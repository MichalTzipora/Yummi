import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategories, updateCurrentUser, updateRecipes } from '../redux/action'
import { getCategories, addNewRecipe } from '../service/recipeService'
import { addToFavorites } from '../service/userService'

export default function AddRecipe() {
    const user = useSelector(s => s.userReducer.currentUser)
    const [selectedFile, setSelectedFile] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const nameRef = useRef("")
    const descRef = useRef("")
    const instrRef = useRef("")
    const ingrdRef = useRef("")
    const catRef = useRef("")
    const dispatch = useDispatch()
  
    const [difficulty, setDifficulty] = useState(null)
    const [kashrut, setKashrut] = useState(null)
    const categories = useSelector(s => s.recipeReducer.categories)

    useEffect(() => {
        if (!categories)
            (async () => {
                const data = await getCategories()
                dispatch(updateCategories(data));
            })();
    }, []);

    async function addRecipe(e) {
        e.preventDefault()
        let newRecipe =
        {
            id:Math.round(Math.random()*100000).toString(),
            name: nameRef.current.value,
            category: catRef.current.value,
            difficulty: difficulty,
            kashrut: 'Parve',
            image: '',
            ingredients: ingredients,
            instructions: instructions,
            userName:user.name,
            like: 0
        }

        const data = await addNewRecipe(newRecipe)
        dispatch(updateRecipes(data.recipes))


    }

    async function keepInFavorites(e) {
        e.preventDefault()
        let newRecipe =
        {
            id: Math.round(Math.random()*100000).toString(),
            name: nameRef.current.value,
            category: catRef.current.value,
            difficulty: difficulty,
            kashrut: 'Parve',
            image: '',
            ingredients: ingredients,
            userName:user.name,
            instructions: instructions,
        }
        let data = await addToFavorites(user.id, newRecipe)
        try {
            dispatch(updateCurrentUser(data.user))
        }
        catch {
            console.log('Not found.')
        }

    }

    return (
        <>
            <form onSubmit={e => addRecipe(e)}>
                <fieldset>
                    <legend>Add Recipe</legend>
                    {/* name */}
                    <label >Name: </label><br></br>
                    <input type="text" width={150} placeholder="Name" ref={nameRef} required/><br></br>
                    {/* desc */}
                    <label >Desc: </label><br></br>
                    <input type="text" width={150} placeholder="Describe" ref={descRef} required/><br></br><br></br>
                    {/* ingredients */}
                    <label >Ingredients: </label>
                    <ul>
                        {
                            ingredients.map((ingrd,index) =>
                                <div key={index}>
                                    <li>{ingrd}
                                        <label onClick={() => setIngredients(ingredients.filter(i => i != ingrd))}>✖</label>
                                    </li>
                                </div>
                            )
                        }
                    </ul>
                    <input type="text" width={150} placeholder="Ingredients ..." ref={ingrdRef} />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setIngredients([...ingredients, ingrdRef.current.value])
                        ingrdRef.current.value = "";
                    }
                    }>+</button><br></br><br></br>
                    {/* instructions */}
                    <label >Instructions: </label>
                    <ul>
                        {
                            instructions.map((instr,index) =>
                                <div key={index}>
                                    <li>{instr}
                                        <label onClick={() => setInstructions(instructions.filter(i => i != instr))}>✖</label>
                                    </li>
                                </div>
                            )
                        }
                    </ul>

                    <input type="text" width={150} placeholder="Instructions..." ref={instrRef} /><br></br>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setInstructions([...instructions, instrRef.current.value])
                        instrRef.current.value = ""
                    }}>+</button>
                    <br></br><br></br>
                    {/* image */}
                    {/* <input type="file" placeholder='צרף תמונה מגרה...' onChange={fileSelectHandler}/><br></br> */}
                    <label >Image: </label><br></br>
                    <input type="text" className="next" placeholder='Image' /><br></br><br></br>
                    {/* difficulty */}
                    <div>
                        <label >Difficulty Level: </label>
                        <input type="radio" value='Easy' name="dif" onChange={(e) => setDifficulty(e.target.value)} />Easy
                        <input type="radio" value='Medium' name="dif" onChange={(e) => setDifficulty(e.target.value)} />Medium
                        <input type="radio" value='Challenging' name='dif' onChange={(e) => setDifficulty(e.target.value)} />Challenging
                    </div>
                    {/* <p>dif: {difficulty}</p> */}
                    {/* Kashrut */}
                    <div>
                        <label >Kashrut: </label>
                        <input type="radio" name='kash' value='Besari' onChange={e => setKashrut(e.target.value)} />Besari
                        <input type="radio" name="kash" value='Chalavi' onChange={e => setKashrut(e.target.value)} />Chalavi
                        <input type="radio" name="kash" value='Parve' onChange={e => setKashrut(e.target.value)} />Parve
                    </div>
                    {/* <p>kash: {kashrut}</p> */}
                    {/* category */}
                    <input type="text" list="catList" placeholder='Choose Category' ref={catRef} />
                    <datalist id="catList">
                        {
                            categories && categories.map(c => <option>{c}</option>)
                        }
                    </datalist>
                    <br></br> <br></br>
                    <input type="submit" value={'Share With Everybody'} />
                </fieldset>
            </form>
                    <button onClick={(e)=> keepInFavorites(e)}>Save In My Favorites</button>
        </>
    )
}