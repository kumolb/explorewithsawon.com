import Button from "../Button/Button";
import classes from "./Header.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Header(){
    return(
        <div className={classes.sizing}>
            <Button buttonValue="Submit" buttonClass="button1"></Button>
            <Button buttonValue="Submit" buttonClass="button2"></Button>
            <Button buttonValue="Submit" buttonClass="button3"></Button>
            <Button buttonValue="Submit" buttonClass="button4"></Button>
            <Button buttonValue="Submit" buttonClass="button5"></Button>
            
        </div>
    );
};

export default Header;