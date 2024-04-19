function Button({buttonClass, buttonValue}){
    return(
        <>
        <button className={buttonClass}>{buttonValue}</button>
        </>
    );
};

export default Button;