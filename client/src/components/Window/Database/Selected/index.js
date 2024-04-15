import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from "react";
import { gsap } from 'gsap'; 

import { useDB } from "../../../../context/DatabaseContext";
import { useWindowsEX } from '../../../../context/WindowContext';

import Loading from "../../../Loading";

const Selected = (props) => {

    const divRef = useRef(null);

    const { get, files, notes, users, messages } = useDB();
    const { setDatabase } = useWindowsEX();
    const [ loading, setLoading ] = useState(true);
    const [ page, setPage ] = useState(1)

    const backClick = (str) => {

        const width = divRef.current.offsetWidth;
        gsap.to(divRef.current, { x: width, duration: 0.3, onCompleteParams: [str], onComplete: setDatabase })

    }

    useEffect(() => {

        async function fetchData() {

            setLoading(true);
            await get(`/api/${props.text}?page=${page}`, `SET_${props.text.toUpperCase()}`);
            setLoading(false)

        }

        fetchData();


    }, [ get, props.text, page ])

    return(
    
        <div ref={divRef}>

            { loading ? 
            
                <Loading text_color="black" /> 
            
                : 
                
                <>

                <div className="flex col database_header_spacer">

                    <div className="flex row center back_button" onClick={() => backClick('')}>
                        <span><FontAwesomeIcon icon={faCaretLeft} /></span><p>Back</p>
                    </div>

                </div>

                { (files && props.text === "files") &&  
                            
                    files.map((file, index) => 
                    
                        <div key={index} className="flex row database_entry">
                        <div className="flex row center entry_collection"><i></i><h3 className="flex">{file.description.name}</h3></div>
                        <p>{file.user}</p>
                        </div>

                    )
                
                }

                { (notes && props.text === "notes") &&

                    // Pagination testing will be done here...

                    <>

                    {

                        notes.data.map((note, index) => 
                        
                            <div key={index} className="flex row database_entry">
                            <div className="flex row center entry_collection"><i></i><h3 className="flex">{note.body}</h3></div>
                                <span></span>
                                <p>{`${new Date(note.date).toLocaleString("en-us", { timeZone: "UTC", weekday: "short", day: "numeric", month: "short", year: "numeric" })}`}</p>
                            </div>

                        )

                    }

                    <div className="flex row database_header_spacer spaced_between">

                        { (page > 1 && notes.totalPages > 1) &&
                            <div className="flex row center prev_button" onClick={() => setPage(prevState => prevState - 1)}>
                                <span><FontAwesomeIcon icon={faCaretLeft} /></span><p>Prev</p>
                            </div>
                        }

                        
                        { page < notes.totalPages &&  
                            <div className="flex row center next_button" onClick={() => setPage(prevState => prevState + 1)}>
                                <p>Next</p><span><FontAwesomeIcon icon={faCaretRight} /></span>
                            </div>
                        }
                        

                    </div>

                    </>
                
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
            
        </div>
    
    )

}

export default Selected;