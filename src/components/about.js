import React, { useEffect, useState } from "react";
import logo from '../images/Yummi_Logo.jpg'

export function About1() {
  return (

    <div style={{ backgroundColor: "red", fontFamily: 'Calibri Light', color: 'white' }}>
      <h3>
        Who said you are not good in kitchen ???
        <br></br>Chance to proof yourself, your family and everybody that you are the first one…
        <br></br> So, If you hope for tasty food
        <br></br> In all difficulties level
        <br></br>Welcome to Yummi
        <br></br>It will be Yummi…
      </h3>
    </div>
  )
}
export function About2() {
  return (
    <>
      <div style={{ fontFamily: 'Calibri Light', backgroundColor: "green", color: 'yellowgreen' }}>
        <h1>Bon Apetit ... </h1>
      </div>
    </>
  )
}
export function About3() {
  return (
    <>
      <div>
        <img src={logo} style={{ width: '450px' }} />
        <h2 style={{ fontFamily: 'Calibri Light', color: 'yellowgreen' }}>©  By Michal More  </h2>
      </div>    </>
  )
}

export default function About(props) {
  const [currentPage, setCurrentPage] = useState(0)
  // const [numberOfPages,setNumberOfPages]=useState(React.Children.count(props.children))
  useEffect(() => {
    let s = 1500
    let a = setInterval(() => {
      setCurrentPage(val => val == 2 ? 0 : val + 1)
    }, s)
    return () => {
      clearInterval(a)
    }
  })

  function showComponent() {
    if (currentPage == 0)
      return <About3></About3>
    if (currentPage == 1)
      return <About2></About2>
    if (currentPage == 2)
      return <About1></About1>
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
      <button disabled={currentPage == 0} onClick={() => { setCurrentPage(val => val - 1) }} style={style}>next</button>
      <button disabled={currentPage == 2} onClick={() => { setCurrentPage(val => val + 1) }} style={style}>prev</button>
      <div style={{ height: '500px', width: '600px', overflow: 'auto', margin: 'auto' }}>
        {/* <div> */}
        {showComponent()}
      </div>

    </>
  )
}



