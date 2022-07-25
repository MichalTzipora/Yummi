import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../redux/action";

export default function LogOut() {
    const dis=useDispatch()
    const nav=useNavigate()
    function logOut() {
        dis(updateCurrentUser(null))
        alert('You have logged out ...')
        nav('/all-recipes')
    }
    const style = {
        backgroundColor: 'white',
        color: 'red',
        padding: '5px',
         margin: '10px 0',
        border: 'solid',
        width: 'cover',
        borderRadius: '30px',
        cursor: 'pointer',
        fontSize: '12px'
      }
    return (
        <>
        <br></br>
        <br></br>
            <button style={style} onClick={() => logOut()}> <h3>Log-Out</h3></button>

        </>
    )
}