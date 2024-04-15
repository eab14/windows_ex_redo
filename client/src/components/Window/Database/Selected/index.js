import { useEffect, useState } from "react";
import { useDB } from "../../../../context/DatabaseContext"; 

const Selected = (props) => {

    const { get, files } = useDB();

    useEffect(() => {

        async function fetchData() {

            await get(`/api/${props.text}`, `SET_${props.text.toUpperCase()}`);

        }

        fetchData();


    }, [ get, props.text ])

    return(
    
        <>
            { (files && props.text === "files") &&  
            
                files.map((file, index) => 
                
                    <div key={index} className="flex row database_entry">
                    <div className="flex row center entry_collection"><i></i><h3 className="flex">{file.description.name}</h3></div>
                    </div>

                )
            
            }
            
        </>
    
    )

}

export default Selected;