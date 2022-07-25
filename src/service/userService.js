import axios from "axios";

export function loginUser(name, password) {
    return axios.get('http://localhost:4000/user/login/'+name+"/"+password,{})
        .then((res) => {
            if (res && res.data)
                return res.data
        })
        .catch((err) => { console.log(err); })
}
export function addNewUser(user) {
    return axios.post('http://localhost:4000/user/addUser', user)
      .then((res) => {
        console.log("res:" + res);
        if (res && res.data) {
          alert("The User added sucessfully 👍")
          return res.data
        }
      })
      .catch((err) => { console.log("error:" + err.message); })
  }
  export function updateUser(user) {
    return axios.post('http://localhost:4000/user/updateUser', user)
      .then((res) => {
        console.log("res:" + res);
        if (res && res.data) {
          alert("The User updated sucessfully 👍")
          return res.data
        }
      })
      .catch((err) => { console.log("error:" + err.message); })
  }
  export function addToFavorites(userId,recipe) {
    return axios.post('http://localhost:4000/user/addRecipeToFavorites/'+userId, recipe)
    .then((res) => {
        console.log("res:" + res);
        if (res && res.data) {
          return res.data
        }
      })
      .catch((err) => { console.log("error:" + err.message); })
  }
  export function removeFromFavorites(userId,recipeId) {
    return axios.post('http://localhost:4000/user/removeRecipeFromFavorites/'+userId+'/'+recipeId)
    .then((res) => {
        console.log("res:" + res);
        if (res && res.data) {
          return res.data
        }
      })
      .catch((err) => { console.log("error:" + err.message); })
  }
