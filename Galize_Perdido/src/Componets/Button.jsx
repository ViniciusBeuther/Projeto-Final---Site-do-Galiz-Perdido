const Button = ( props ) => {
    return(
        <button className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold hover:scale-105 hover:duration-75" onClick={ props.handleClick }>
            {props.text}
        </button>
    )
}

export default Button;