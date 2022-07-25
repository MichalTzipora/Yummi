import { useEffect, useRef, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllRecipes, addLike, minusLike } from '../service/recipeService'
import { Link, useNavigate } from 'react-router-dom'
import { updateCurrentUser, updateRecipes } from '../redux/action'
import { addToFavorites } from '../service/userService'
import { removeFromFavorites } from '../service/userService'
export default function AllRecipes(props) {
  const [filter, setFilter] = useState(null)
  // const [recipes, setRecipes] = useState(null)
  const recipes = useSelector(s => s.recipeReducer.recipes)
  const user = useSelector(s => s.userReducer.currentUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const style = {
    fontSize: '16px',
    backgroundColor: 'pink'
  }

  useEffect(() => {
    if (!recipes)
      (async () => {
        const data = await getAllRecipes()
        console.log(data)
        dispatch(updateRecipes(data));
      })();
  }, []);
  // function d(){
  //   let ans=confirm('Your are still ==not logged in 🤔, Would you want to change it ?')  
  //   if(ans)
  //     navigate('/login')
  // }
  async function addNewLike(id) {
    if (!user) {
      navigate('/login')
    }
    const data = await addLike(id)
    try {
      // setRecipes(data.recipes)
      dispatch(updateRecipes(data.recipes))
    }
    catch
    {
      console.log('Not succeed', data);
    }
  }
  async function minus1Like(id) {
    if (!user) {
      navigate('/login')
    }
    const data = await minusLike(id)
    try {
      // setRecipes(data.recipes)
      dispatch(updateRecipes(data.recipes))
    }
    catch
    {
      console.log('Not succeed', data);
    }
  }
  async function addRecToFavorites(r) {
    let data = await addToFavorites(user.id, r)
    try {
      dispatch(updateCurrentUser(data.user))
    }
    catch {
      console.log('Not found.')
    }
  }
  async function removeRecFromFavorites(rId) {
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
      <h1>All Recipes <br></br>
        🍕🍔🍟🌭🍿🥨🥐🥞🧇🥖🧀🍵🍡🍫🧁🥧🥤🍹🍸🍵☕🧃🥞🧈</h1>
      <button onClick={() => user ? navigate('/add-recipe') : navigate('/login')}>Add New Recipe ➕</button>
      {/* <input type="text" placeholder='Search...' onChange={(event) => setFilter(event.target.value)} /> */}
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" onChange={(event) => setFilter(event.target.value)} />
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
      {
        recipes != undefined && recipes.length > 0 &&
        recipes.map((r) =>
          <div key={r.id}>
            {(!filter || r.name.toLowerCase().includes(filter.toLowerCase())) &&
              <div style={style} >
                <h2>{r.name}</h2>
                {r.image ? <img src={require('../images/' + r.image)} width="150px" onClick={() => navigate('/recipe/' + r.id)} ></img> :
                  <img src={require('../images/j0406644.jpg')} width="150px" onClick={() => navigate('/recipe/' + r.id)} ></img>}
                <h5>{r.kashrut}</h5>
                {r.userName && <h5>By: {r.userName}</h5>}
                <h5>{r.like} likes</h5>
                <button onClick={() => addNewLike(r.id)}>👍</button>
                <button onClick={() => minus1Like(r.id)}>👎</button>
                {user &&
                  <>
                    {user.favorites.find(f => f.id == r.id) ?
                      <button onClick={() => removeRecFromFavorites(r.id)}>🧡</button> :
                      <button onClick={() => addRecToFavorites(r)} >🤍</button>}
                  </>
                }
              </div>
            }
          </div>
        )}
    </>
  )
}


