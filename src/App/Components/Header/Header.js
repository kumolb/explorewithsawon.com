import { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import classes from "./Header.module.css";
import Input from "../Input/Input";

function Header(){
    const [dropDownClassName, setDropDownClassName] = useState(["dropdown-content"]);
    const showDropDown = (event)=>{
        console.log("Event done")
        dropDownClassName == "dropdown-content" ? setDropDownClassName("dropdown-content display_block") : setDropDownClassName("dropdown-content");
    }
    return(
        <div className={classes.sizing}>
            <Button buttonValue="menu_1" buttonClass="menu_button1"></Button>
            <Button buttonValue="menu_2" buttonClass="menu_button1"></Button>
            <Button buttonValue="menu_button1" buttonClass="menu_button1"></Button>

<Input></Input>
            
            {/* <Button buttonValue="Submit" buttonClass="button1"></Button>
            <Button buttonValue="Submit" buttonClass="button2"></Button>
            <Button buttonValue="Submit" buttonClass="button3"></Button>
            <Button buttonValue="Submit" buttonClass="button4"></Button>
            <Button buttonValue="Submit" buttonClass="button5"></Button>
            <Button buttonValue="Button 6" buttonClass="button6"></Button> */}
            <Button buttonValue="menu_button" buttonClass="menu_button"></Button>
            {/* <Button buttonValue="menu_button1" buttonClass="menu_button1"></Button> */}
            {/* <div className="dropdown">
                <Button buttonValue="drop" buttonClass="menu_button dropbtn" clickAction={()=>showDropDown()}></Button>
                <DropDown className={dropDownClassName}>
                    <div style={{"width":"300px", paddingTop: "20px", paddingBottom: "20px"}}>
                                    Hello world
                    </div>
                </DropDown>
            </div>

            <div className="dropdown">
                <Button buttonValue="drop" buttonClass="menu_button dropbtn" ></Button>
                <DropDown buttonClass="">
                    <div style={{"width":"300px", paddingTop: "20px", paddingBottom: "20px"}}>
                                    Hello world
                    </div>
                </DropDown>
            </div> */}
        </div>
    );
};

export default Header;