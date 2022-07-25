import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../redux/action";
import { updateUser } from "../service/userService";
export default function Profile() {
    const user = useSelector(s => s.userReducer.currentUser)
    const nameRef = useRef(null)
    const pswrdRef =useRef(null)
    const emailRef = useRef(null)
    const adressRef = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        nameRef.current.value = user.name
        pswrdRef.current.value = user.password
        emailRef.current.value = user.email
        adressRef.current.value = user.adress
    }
        // const pswrdRef = useRef(user.password)
        // const emailRef = useRef(user.email)
        // const adressRef = useRef(user.adress)

    )
    async function updateUserData(e) {
        debugger
        e.preventDefault()
        let newUser = {
            id: user.id,
            name: nameRef.current.value,
            password: pswrdRef.current.value,
            email: emailRef.current.value,
            adress: adressRef.current.value,
            favorites:[]
        }
        const data = await updateUser(newUser)
        try {
            data.success &&
                dispatch(updateCurrentUser(newUser))
        }
        catch {
            alert("not succeed 😐")
        }
    }
    // function addUser(e) {

    // }
    return (
        <>
            <br></br>
            {/* <button onClick={() => logOut()}> <h3>Log-Out</h3></button> */}
            <form onSubmit={(e) => updateUserData(e)}>
                <h1>Welcome to {user.name}'s Profile 💕</h1>
                <p> <label>Name: </label> <input type="text" placeholder="Input your name..." ref={nameRef} /> </p>
                <p> <label>Password: </label> <input type="password" placeholder="Input your password..." ref={pswrdRef} /></p>
                <p> <label>Email: </label> <input type="text" placeholder="Input your email..." ref={emailRef} /></p>
                <p> <label>Adress: </label> <input type="text" placeholder="Input your adress..." ref={adressRef} /></p>
                <input type="submit" value={'Save Changes'} />
            </form>
        </>
    )
}