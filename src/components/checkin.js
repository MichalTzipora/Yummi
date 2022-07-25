import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../redux/action";
import { addNewUser } from "../service/userService";
export default function CheckIn() {
    const nameRef = useRef("")
    const pswrdRef = useRef("")
    const emailRef = useRef("")
    const adressRef = useRef("")
    const dispatch = useDispatch()

    async function addUser(e) {
        debugger
        e.preventDefault()
        let newUser = {
            id: 12,
            name: nameRef.current.value,
            password: pswrdRef.current.value,
            email: emailRef.current.value,
            adress: adressRef.current.value,
            favorites:[]
        }
        const data = await addNewUser(newUser)
        try {
            data.success &&
                dispatch(updateCurrentUser(newUser))
        }
        catch {
            alert("not succeed 😐")
        }
    }

    return (
        <>
            <form onSubmit={(e) => addUser(e)}>
                <h1>Check In ...</h1>
                <p> <label>Name: </label> <input type="text" placeholder="Input your name..." ref={nameRef}/> </p>
                <p> <label>Password: </label> <input type="password" placeholder="Input your password..." ref={pswrdRef}/></p>
                <p> <label>Email: </label> <input type="text" placeholder="Input your email..." ref={emailRef}/></p>
                <p> <label>Adress: </label> <input type="text" placeholder="Input your adress..." ref={adressRef}/></p>
                <input type="submit" value={'Send'} />
            </form>
        </>
    )
}