import React, { useEffect, useState } from "react";
import logo from '../images/Yummi_Logo.jpg'
import axios from "axios";
import { getAllRecipes } from "../service/recipeService"

export default function HomePage() {

  // const [selectedFile, setSelectedFile] = useState(null)

  // function fileSelectHandler(event) {
  //   setSelectedFile(event.target.files[0]);
  // }

  // async function fileUploadHandler() {
  //   const formData = new FormData();
  //   formData.append(
  //     "my file",
  //     selectedFile,
  //     selectedFile.name
  //   )
  //   console.log(selectedFile);
  //   const data= await (await axios.post('http://localhost:4000/upload', formData)).data
  //   console.log(data)
  // }
  // function fileData() {
  //   if (selectedFile)
  //     return (
  //       <>
  //         <h1>name: {selectedFile.name}</h1>
  //         <h1>type: {selectedFile.type}</h1>
  //         {/* {selectedFile.type=='img' &&
  //         <img src="" />} */}
  //       </>
  //     )
  // }
  return (
    <>
      {/* <h1>HomePage</h1>
      <img src={logo} style={{ width: '350px' }} />
      <br></br>
      {/* <h1>jjj</h1> */}
      {/* <div>
        <input type="file" onChange={(e) => fileSelectHandler(e)} />
        <button onClick={() => fileUploadHandler()}>Upload</button>
      </div>
      {fileData()} */}
      
    </>
  );
}