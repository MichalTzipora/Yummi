import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../redux/action";
import { removeFromFavorites } from "../service/userService";


export default function Favorites() {
  const [filter, setFilter] = useState(null)
  const [selectFilter, setSelectFilter] = useState(1)
  const user = useSelector(s => s.userReducer.currentUser)
  const favorites = useSelector(s => s.userReducer.currentUser.favorites)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const style = {
    fontSize: '16px',
    backgroundColor: 'red',
    width: '50px'
  }
  async function removeFavorite(rId) {
    let data = await removeFromFavorites(user.id, rId)
    try {
      dispatch(updateCurrentUser(data.user))
    }
    catch {
      console.log('Not found.')
    }
  }
  return (
    <>
      <h1>Favorites 💖</h1>
      <div>
        <label >Filter By Selection: </label>
        <input type="radio" value='Recipes I Liked' name="filter" onChange={() => setSelectFilter(3)} />Recipes I Liked
        <input type="radio" value='My Recipes' name='filter' onChange={() => setSelectFilter(2)} />Private Recipes
        <input type="radio" value='Both' name="filter" onChange={() => setSelectFilter(1)} selected />Both
      </div>
      <button onClick={() => navigate('/add-recipe')}>Add Recipe ➕</button>

      <input type="text" placeholder='Search in your favorites ...' onChange={(event) => setFilter(event.target.value)} />

      {
        favorites && favorites.map(r => (selectFilter == 1 || (selectFilter == 2 && r.userName == user.name) || (selectFilter == 3 && r.userName != user.name))
          &&
          <>
            {(!filter || r.name.toLowerCase().includes(filter.toLowerCase())) &&
              <div style={style} >
                <h2>{r.name}</h2>
                {r.image ? <img src={require('../images/' + r.image)} width="150px" onClick={() => navigate('/recipe/' + r.id)} ></img> :
                  <img src={require('../images/j0406644.jpg')} width="150px" onClick={() => navigate('/recipe/' + r.id)} ></img>}
                <h5>{r.kashrut}</h5>
                <button onClick={() => removeFavorite(r.id)}>❌</button>
              </div>
            }
          </>

        )
      }
    </>
  )
}