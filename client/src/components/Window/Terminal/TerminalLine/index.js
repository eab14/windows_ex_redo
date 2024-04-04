const TerminalLine = (props) => {

    return (
        <div className="flex row terminal_line">
            { props.type === "command" && <p className="flex row">{props.name}<span className="flex">$</span>{props.command}</p> }
        </div>
    )

}

export default TerminalLine;