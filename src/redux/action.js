import createStore from 'redux'
import produce from 'immer'

export function getAllRecipies(recipies) {
    if (recipies == null)
        return { type: 'GET_ALL_RECIPIES', payload: null }
    return { type: 'GET_ALL_RECIPIES', payload: recipies }
}

export function updateRecipes(recipes) {
    if (recipes)
        return { type: 'UPDATE_RECIPES', payload: recipes }
}
export function updateCurrentUser(user) {
    return { type: 'UPDATE_CURRENT_USER', payload: user }
}
export function updateCategories(recipes) {
    return { type: 'UPDATE_CATEGORIES', payload: recipes }
}

