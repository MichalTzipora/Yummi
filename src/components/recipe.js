import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import store from "../redux/store";
import { addLike, minusLike } from "../service/recipeService";
import { updateCurrentUser, updateRecipes } from "../redux/action";
import { addToFavorites, removeFromFavorites } from "../service/userService";

export default function Recipe() {
    let params = useParams()
    const recipes = useSelector(s => s.recipeReducer.recipes)
    const user = useSelector(s => s.userReducer.currentUser)
    const recipe = recipes.find(r => r.id == params.id) || user.favorites.find(r => r.id == params.id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function addNewLike(id) {
        if (!user) {
            navigate('/login')
        }
        const data = await addLike(id)
        try {
            dispatch(updateRecipes(data.recipes))
        }
        catch
        {
            console.log('not succeed', data);
        }
    }
    async function minus1Like(id) {
        if (!user) {
            navigate('/login')
        }
        const data = await minusLike(id)
        try {
            dispatch(updateRecipes(data.recipes))
        }
        catch
        {
            console.log('not succeed', data);
        }
    }
    async function addRecToFavorites() {
        let data = await addToFavorites(user.id, recipe)
        try {
            dispatch(updateCurrentUser(data.user))
        }
        catch {
            console.log('Not found.')
        }
    }
    async function removeRecFromFavorites() {
        let data = await removeFromFavorites(user.id, recipe.id)
        try {
            dispatch(updateCurrentUser(data.user))
        }
        catch {
            console.log('Not found.')
        }
    }
   
    return (
        <>
            <br></br>
            <h1>{recipe.name}</h1>
            <h1>{recipe.like} likes</h1>
            <button onClick={() => addNewLike(recipe.id)}>👍</button>
            <button onClick={() => minus1Like(recipe.id)}>👎</button>
            {user &&
                <>
                    {user.favorites.find(f => f.id == recipe.id) ?
                        <button onClick={() => removeRecFromFavorites()}>🧡</button> :
                        <button onClick={() => addRecToFavorites()} >🤍</button>}
                </>
            }
            <h1>{recipe.desc}</h1>
            <h3>Difficulty Level: {recipe.difficulty}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {
                    recipe.ingredients &&
                    recipe.ingredients.map((i) => <li>{i}</li>)
                }
            </ul>
            <h4>Instructions:</h4>
            <ul>
                {
                    recipe.instructions &&
                    recipe.instructions.map((i) => <li>{i}</li>)
                }
            </ul>
            {recipe.image && <img src={require('../images/' + recipe.image)} width="400px" ></img>}

        </>
    )
}