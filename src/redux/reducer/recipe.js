
import produce from "immer";

const initialState = {
    recipes: null,
    categories:null
};

export const recipeReducer = produce((state, action) => {
    switch (action.type) {
        case 'GET_ALL_RECIPIES':
            {
                state.recipes = action.payload
                break;
            }
        case 'UPDATE_RECIPES':
            {
                state.recipes = action.payload
                break;
            }
            case 'UPDATE_CATEGORIES':
                {
                    state.categories = action.payload
                    break;
                }
        default:
             { 
                 break;
             }
    }


}, initialState)


