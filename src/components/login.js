import React, {  useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCurrentUser } from '../redux/action';
import { getUsers, loginUser } from '../service/userService';


export default function Login() {

  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  //  const {history} = props;   
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function login() {
    let name = nameRef.current.value
    let password = passwordRef.current.value
    if (!name || !password) {
      alert('Missing name / password :(')
    }
    else {
      let data = await loginUser(name, password);
      try {
        dispatch(updateCurrentUser(data.user));
        navigate('/all-recipes')

      }
      catch {
        alert(name + ", you have to check-in ...")
        navigate('/check-in')
      }
    }

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
  return <>

    <div>
      <h3>Please enter name & password</h3>
      <input style={style} type="text" placeholder="Enter Name" ref={nameRef}></input><br></br>
      <input style={style} type="password" placeholder="Enter Password" ref={passwordRef}></input><br></br>
      <button style={style} onClick={() => login()}>Login</button>
      {users && users.map(u => <h1>user</h1>)}
    </div>

  </>

}
// export default function Login(){
//     return (
//       <>
//        <h1>Login</h1>
//        <input type="text" placeholder="user name"/>
//        <input type="text" placeholder="password"/><br></br>
//        <button>Enter</button>
//       </>
//     );
//   }


