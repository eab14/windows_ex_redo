import './index.css';

import { useAuth } from '../../../context/AuthContext';

import Loading from '../../Loading';

const Database = () => {

    const { db_stats } = useAuth();

    return (

        <div className="flex col database_spacer">
            
            {

                !db_stats ?
            
                <Loading text_color="black" /> 
        
                :

                <>
                <div className="flex col database_header_spacer">

                    <div className="flex row header_line">
                        <i></i><p>Number of Collections:</p> <span>{db_stats.numCollections}</span>
                    </div>

                    <div className="flex row header_line">
                        <i></i><p>Database Size:</p> <span>{db_stats.storageSize} bytes</span>
                    </div>

                </div>

                <div className="flex col database_entry_spacer">

                    {
                        db_stats.collectionStats.map((stat, index) => 

                            <div key={index} className="flex row database_entry">
                                <div className="flex row center entry_collection"><i></i><h3 className="flex">{stat.name}</h3></div>
                                <span>{stat.count} Documents</span>
                                <p>{stat.storageSize} bytes</p>    
                            </div>

                        )
                    }

                </div>

                </>
                
            }

        </div>
        
    )
  
}

export default Database;