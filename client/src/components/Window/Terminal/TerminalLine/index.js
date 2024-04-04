import { useEffect, useState } from "react";

const TerminalLine = (props) => {

    const [ details, setDetails ] = useState(null);

    useEffect(() => {

        if (props.command === "--help") {

            setDetails(
                <>
                <p>&nbsp;</p>
                <p className="terminal_green">Options</p>
                <p>- - -</p>
                <p>open <i className="terminal_gg">{"<Window Name>"}</i></p>
                <p>close <i className="terminal_gg">{"<Window Name>"}</i></p>
                <p>cd <i className="terminal_gg">{"<Folder Name>"}</i></p>
                <p>account login <i className="terminal_gg">{"<email> <password>"}</i></p>
                <p>account logout</p>
                <p>clear</p>
                <p>&nbsp;</p>
                </>
            )

        }

        else if (props.command === "invalid") {
            setDetails(
                <>
                <p><i className="terminal_gg">Invalid Input: </i>--help for a list of available commands</p>
                </>
            )
        }

        else setDetails(null);

    }, [ props.command ])

    return (
        <>
        
            { 
            
                props.type === "command" && 
                
                <div className="flex row terminal_line">
                <p className="flex row">{props.name}<span className="flex">$</span>{props.command}</p> 
                </div>
                
            }

            {

                props.type === "details" && 

                <div className="flex col terminal_details">

                    { details }

                </div>

            }

        </>
    )

}

export default TerminalLine;