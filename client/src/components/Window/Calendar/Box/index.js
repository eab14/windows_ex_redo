const Box = (props) => {

    return (
        <div className={props.empty ? "box empty" : props.current ? "box current" : "box" }>
            <h3>{ !props.empty && props.day }</h3>
        </div>
    )

}

export default Box;