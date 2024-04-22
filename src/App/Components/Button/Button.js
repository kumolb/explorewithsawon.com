function Button({buttonClass, buttonValue, clickAction}){
    return(
        <>
        <button className={buttonClass} onClick={()=>clickAction()}>{buttonValue}</button>
        </>
    );
};

export default Button;