import cls from "../CustomButton/CustomButton.module.css"
import React from 'react'
import PostItem from "../../Posts/PostItem"


function CustomButton(props) {
 const {text, onHandleClick} = props
   return (
        <button  className={cls.btn} onClick={onHandleClick}>{text}</button>
   )
}
 export default CustomButton;