import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../redux/action";
import logo from '../images/Yummi_Logo.jpg'

export default function Menu() {
    const user = useSelector(s => s.userReducer.currentUser)
    const dis = useDispatch()
    const style = {
        backgroundColor: 'white',
        color: 'red',
        padding: '5px',
        margin: '10px 0',
        border: 'solid',
        width: 'cover',
        borderRadius: '30px',
        cursor: 'pointer',
        // fontSize: '40px'
    }
    //   const link={
    //     backgroundColor: 'white',
    //     color: 'green',
    //     padding: '5px',
    //      margin: '10px 0',
    //     // border: 'solid',
    //     width: 'cover',
    //     borderRadius: '30px',
    //     cursor: 'pointer',
    //   }
    return (
        <>
         
            <img src={logo} style={{ width: '150px' }} />

            {!user ?
                <div style={style}>
                    {/* <Link to="/homePage">Home Page</Link> | */}
                    <Link to="/all-recipes">Home</Link> |
                    <Link to="/login">Login</Link> |
                    <Link to="/check-in">Check-In</Link> |
                    <Link to="/about">About</Link>
                </div>
                :
                <>
                    <h5 className='App-logo'> 👤 {user.name}</h5>
                    <div style={style}>
                        <Link to="/all-recipes">Home</Link> |
                        <Link to="/add-recipe">Add Recipe</Link>  |
                        <Link to="/favorites">Favorites ❤</Link> |
                        <Link to="/profile">Profile 👤</Link> |
                        <Link to="/about">About</Link> |
                        <Link to="/logOut">Log-Out</Link>

                    </div>
                </>
            }
        </>
    );
}

