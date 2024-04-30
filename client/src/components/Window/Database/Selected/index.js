import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from "react";
import { gsap } from 'gsap'; 

import { useDB } from "../../../../context/DatabaseContext";
import { useWindowsEX } from '../../../../context/WindowContext';

import Loading from "../../../Loading";

const Selected = (props) => {

    const divRef = useRef(null);
    const collectionRef = useRef(null);

    const { get, remove, files, notes, users, messages, easterEggs } = useDB();
    const { setDatabase } = useWindowsEX();
    const [ loading, setLoading ] = useState(true);
    const [ page, setPage ] = useState(1);

    const backClick = (str) => {

        const width = divRef.current.offsetWidth;
        gsap.to(divRef.current, { x: width, duration: 0.3, onCompleteParams: [str], onComplete: setDatabase })

    }

    const nextClick = (n) => {

        const width =- collectionRef.current.offsetWidth;
        gsap.to(collectionRef.current, { x: width, duration: 0.3, onCompleteParams: [n], onComplete: setPage })

    }

    const prevClick = (n) => {

        const width = collectionRef.current.offsetWidth;
        gsap.to(collectionRef.current, { x: width, duration: 0.3, onCompleteParams: [n], onComplete: setPage })

    }

    const removeClick = async (url) => {

        await remove(url);
        await get(`/api/${props.text}?page=${page}`, `SET_${props.text.toUpperCase()}`);

    }

    const revealCells = () => {

        const array = divRef.current.querySelectorAll('.test_animation');
        
        if (array.length > 0) {

            // offset so the next one is delayed based on increased offset
            let offset = 0.14;

            for (let i = 0; i < array.length; i ++) {

                gsap.to(array[i], { opacity: 1, top: 0, left: 0, delay: offset, duration: 0.3, pointerEvents: "all" });
                offset += 0.14;

            }

        }

    }

    const hideCells = () => {

        const array = divRef.current.querySelectorAll('.test_animation');

        if (array.length > 0) {

            let offset = 0.10

            for (let i = 0; i < array.length; i ++) {

                gsap.to(array[i], { opacity: 0, top: -10, left: -100, delay: offset, duration: 0.1, pointerEvents: "none" });
                offset += 0.05;

            }

        }

    }

    useEffect(() => {

        async function fetchData() {

            setLoading(true);
            await get(`/api/${props.text}?page=${page}`, `SET_${props.text.toUpperCase()}`);
            setLoading(false)

        }

        fetchData();


    }, [ get, props.text, page ])

    useEffect(() => { (!loading && notes) && revealCells(); (loading && notes) && hideCells() }, [ loading, notes ]);

    return (
    
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

                    <div ref={collectionRef}>

                    {

                        notes.data.map((note, index) => 
                        
                            <div className="flex row test_animation">

                                <div className="flex row center entry_collection"><i></i><h3 className="flex">{note.body}</h3></div>
                                <span className="remove_icon" onClick={() => removeClick(`/api/notes/${note._id}`)}><FontAwesomeIcon icon={faXmark} /></span>
                                <p>{`${new Date(note.date).toLocaleString("en-us", { timeZone: "UTC", weekday: "short", day: "numeric", month: "short", year: "numeric" })}`}</p>

                            </div>

                        )

                    }

                    </div>

                    { notes.totalPages > 1 && 

                        <div className="flex row database_header_spacer spaced_between">

                            { (page > 1) &&
                                <div className="flex row center prev_button" onClick={() => prevClick(page - 1)}>
                                    <span><FontAwesomeIcon icon={faCaretLeft} /></span><p>Prev</p>
                                </div>
                            }

                            
                            { page < notes.totalPages &&  
                                <div className="flex row center next_button" onClick={() => nextClick(page + 1)}>
                                    <p>Next</p><span><FontAwesomeIcon icon={faCaretRight} /></span>
                                </div>
                            }
                            

                        </div>

                    }

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

                    { (easterEggs && props.text === "eastereggs") &&

                        easterEggs.map((egg, index) => 

                            <div key={index} className="flex row database_entry">
                            <div className="flex row center entry_collection"><i></i><h3 className="flex">{egg.user}</h3></div>
                            </div>

                        )

                    }
            
                </>

            }
            
        </div>
    
    )

}

export default Selected;