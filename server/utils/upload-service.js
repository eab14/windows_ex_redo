const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.UL_CLOUD_NAME, 
    api_key: process.env.UL_API_KEY, 
    api_secret: process.env.UL_API_SECRET,
    secure: true
});

const uploadFile = async (file) => { return (!file) ? { url: null } : await streamUpload(file); }

const streamUpload = (file) => {

    return new Promise((resolve, reject) => {

        let stream = cloudinary.uploader.upload_stream((error, result) => (result) ? resolve(result) : reject(error));
        streamifier.createReadStream(file.buffer).pipe(stream);

    });
    
}

const localTest = multer.diskStorage({
    destination: function (req, file , cb) { cb(null, 'uploads/') },
    filename: function (req, file , cb) { cb(null,file.fieldname+'-'+Date.now()+'.' + file.mimetype.split('/').reverse()[0]); },
});

module.exports = {
    localTest
}