const mongoose = require('mongoose');
const models = require('../models');
const pluralize = require('pluralize');

const dbController = {

    async getStats(req, res) {

        try {

            const collections = await mongoose.connection.db.listCollections().toArray();
            const numCollections = collections.length;

            const collectionStats = await Promise.all(collections.map(async (collection) => {

                const modelName = Object.keys(models).find(modelName => pluralize.plural(modelName.toLowerCase()) === collection.name.toLowerCase() );

                if (!modelName) return { name: collection.name, count: 0 };

                const Model = models[modelName];
                const count = await Model.countDocuments();

                const documents = await Model.find({});
                const storageSize = documents.reduce((totalSize, document) => totalSize + JSON.stringify(document).length, 0);

                return { name: collection.name, count, storageSize };
            
            }));
        
            const dbStats = await mongoose.connection.db.stats();
            const storageSize = dbStats.storageSize;

            const stats = { numCollections, collectionStats, storageSize }
        
            res.json(stats);

        }

        catch (err) { console.error(err); res.status(500).json({ error: "Server Error..." }); }

    }

}

module.exports = dbController;