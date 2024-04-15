import './index.css';

import { useRef } from 'react';

import { useAuth } from '../../../context/AuthContext';
import { useWindowsEX } from '../../../context/WindowContext';

import { DatabaseProvider } from '../../../context/DatabaseContext';

import { gsap } from 'gsap'; 

import Loading from '../../Loading';
import Selected from './Selected';


const Database = () => {

    const divRef = useRef(null);

    const { db_stats } = useAuth();
    const { database, setDatabase } = useWindowsEX();

    const clickHandler = (str) => {

        const width =- divRef.current.offsetWidth;
        gsap.to(divRef.current, { x: width, duration: 0.3, onCompleteParams: [str], onComplete: setDatabase })

    }

    return (

        <DatabaseProvider>

        <div className="flex col database_spacer">
            
            {

                !database &&

                <div ref={divRef}>

                { !db_stats ? 
                
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

                                <div key={index} className="flex row database_entry" onClick={() => clickHandler(stat.name)}>
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
                
            }

            { database && <Selected text={database} /> }

        </div>

        </DatabaseProvider>
        
    )
  
}

export default Database;