import produce from "immer";

const initialState = {
    currentUser: null,
    // currentFavoriteRecipes:null,
    statusUser: null,
    favorites: [],
    users: []

};

export const userReducer = produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_USER':
            {
                console.log('current user',action.payload)
                state.currentUser = action.payload
                break;
            }
        default:
            {
                break;
            }
    }
}, initialState)


