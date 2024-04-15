import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";

import { useDB } from "../../../../context/DatabaseContext";
import { useWindowsEX } from '../../../../context/WindowContext';

import Loading from "../../../Loading";

const Selected = (props) => {

    const { get, files, notes, users, messages } = useDB();
    const { setDatabase } = useWindowsEX();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        async function fetchData() {

            setLoading(true);
            await get(`/api/${props.text}`, `SET_${props.text.toUpperCase()}`);
            setLoading(false)

        }

        fetchData();


    }, [ get, props.text ])

    return(
    
        <>

            { loading ? 
            
                <Loading text_color="black" /> 
            
                : 
                
                <>

                <div className="flex col database_header_spacer">

                    <div className="flex row header_line" onClick={() => setDatabase('')}>
                        <FontAwesomeIcon icon={faCaretLeft} /> &nbsp; <p>Back</p> <span></span>
                    </div>

                </div>

                { (files && props.text === "files") &&  
                            
                    files.map((file, index) => 
                    
                        <div key={index} className="flex row database_entry">
                        <div className="flex row center entry_collection"><i></i><h3 className="flex">{file.description.name}</h3></div>
                        </div>

                    )
                
                }

                { (notes && props.text === "notes") &&

                    // Pagination testing will be done here...

                    notes.slice(0, 5).map((note, index) => 
                    
                        <div key={index} className="flex row database_entry">
                        <div className="flex row center entry_collection"><i></i><h3 className="flex">{note.body}</h3></div>
                            <span></span>
                            <p>{`${new Date(note.date).toLocaleString("en-us", { timeZone: "UTC", weekday: "short", day: "numeric", month: "short", year: "numeric" })}`}</p>
                        </div>

                    )
                
                }

                { (users && props.text === "users") &&

                    users.map((user, index) => 

                        <div key={index} className="flex row database_entry">
                        <div className="flex row center entry_collection"><i></i><h3 className="flex">{user.email}</h3></div>
                        </div>

                    )

                }
            
                { (messages && props.text === "messages") &&

                    messages.map((message, index) => 

                        <div key={index} className="flex row database_entry">
                        <div className="flex row center entry_collection"><i></i><h3 className="flex">{message.body}</h3></div>
                        </div>

                    )

                }
            
                </>

            }
            
        </>
    
    )

}

export default Selected;