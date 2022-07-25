import axios from "axios";


export function getAllRecipes() {
  return axios.get('http://localhost:4000/recipe/getRecipes')
    .then((res) => {
      console.log("res:" + res);
      if (res && res.data) {
        console.log("data:" + res.data);
        return res.data
      }
    })
    .catch((err) => { console.log("error:" + err.message); })
}
export function getCategories() {
  return axios.get('http://localhost:4000/recipe/getCategories')
    .then((res) => {
      console.log("res:" + res);
      if (res && res.data) {
        console.log("data:" + res.data);
        return res.data
      }
    })
    .catch((err) => { console.log("error:" + err.message); })
}
export function addNewRecipe(recipe) {
  return axios.post('http://localhost:4000/recipe/addRecipe', recipe)
    .then((res) => {
      console.log("res:" + res);
      if (res && res.data) {
        alert("The Recipe added sucessfully 👍")
        return res.data
      }
    })
    .catch((err) => { console.log("error:" + err.message); })
}
export function addLike(recid) {
  return axios.post('http://localhost:4000/recipe/addLike/'+ recid)
    .then((res) => {
      console.log("res:" + res);
      if (res && res.data) {
        return res.data
      }
    })
    .catch((err) => { console.log("error:" + err.message); })
}
export function minusLike(recid) {
  return axios.post('http://localhost:4000/recipe/minusLike/'+ recid)
    .then((res) => {
      console.log("res:" + res);
      if (res && res.data) {
        return res.data
      }
    })
    .catch((err) => { console.log("error:" + err.message); })
}