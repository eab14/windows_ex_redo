import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";

const TerminalLine = (props) => {

    const { user, admin } = useAuth();
    const [ details, setDetails ] = useState(null);

    useEffect(() => {

        if (props.command === "--help") {

            setDetails(
                <>
                <p>&nbsp;</p>
                <p className="terminal_green">Options</p>
                <p>&nbsp;</p>
                <p>open <i className="terminal_gg">{"<Window Name>"}</i></p>
                <p>close <i className="terminal_gg">{"<Window Name>"}</i></p>
                <p>cd <i className="terminal_gg">{"<Folder Name>"}</i></p>
                <p>account login <i className="terminal_gg">{"<email> <password>"}</i></p>
                <p>account logout</p>
                <p>clear</p>
                <p>&nbsp;</p>
                <p className="terminal_green">Available Windows</p>
                {
                    
                        <>
                        <p>&nbsp;</p>
                        <p>
                            <i className="terminal_gg">account</i>&nbsp;|&nbsp;
                            <i className="terminal_gg">calculator</i>&nbsp;|&nbsp;
                            <i className="terminal_gg">caldendar</i>&nbsp;|&nbsp;
                            { admin && <><i className="terminal_gg">database</i>&nbsp;|&nbsp;</> }
                            <i className="terminal_gg">easter-egg</i>&nbsp;|&nbsp;
                        </p>
                        <p>
                            { user && <><i className="terminal_gg">files</i>&nbsp;|&nbsp;</> }
                            { user && <><i className="terminal_gg">messages</i>&nbsp;|&nbsp;</> }
                            <i className="terminal_gg">password-generator</i>&nbsp;|&nbsp;
                            { user && <><i className="terminal_gg">settings</i>&nbsp;|&nbsp;</> }
                            <i className="terminal_gg">weather</i>
                        </p>
                        </>
                
                }
                <p>&nbsp;</p>
                <p className="terminal_green">Available Folders</p>
                <p>&nbsp;</p>
                <p><i className="terminal_gg">music</i> | <i className="terminal_gg">photos</i> | <i className="terminal_gg">videos</i></p>
                <p>&nbsp;</p>
                </>
            )

        }

        else if (props.type === "folder") {

            if (props.command === "") {

                setDetails(
                    <>
                    <p>&nbsp;</p>
                    <p>- music</p>
                    <p>- photos</p>
                    <p>- videos</p>
                    <p>&nbsp;</p>
                    </>
                )

            }

        }

        else if (props.command === "invalid") {
            setDetails(
                <>
                <p>&nbsp;</p>
                <p><i className="terminal_gg">Invalid Input: </i>--help for a list of available commands</p>
                <p>&nbsp;</p>
                </>
            )
        }

    }, [ props, user, admin ])

    return (
        <>
        
            { 
            
                props.type === "command" && 
                
                <div className="flex row terminal_line">
                <p className="flex row">{props.name}<span className="flex">$</span>{props.command}</p> 
                </div>
                
            }

            {

                (props.type === "details" || props.type === "folder") && 

                <div className="flex col terminal_details">

                    { details }

                </div>

            }

        </>
    )

}

export default TerminalLine;