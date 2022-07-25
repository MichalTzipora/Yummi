import React from "react";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";

import Login from "../components/login";
import About,{About1,About2,About3} from '../components/about';
import HomePage from '../components/homepage';
import AddRecipe from '../components/addRecipe'
import AllRecipes from '../components/allReceipes';
import Recipe from '../components/recipe';
import Favorites from '../components/favorites';
import LogOut from '../components/logOut';
import Profile from '../components/profile';
import CheckIn from '../components/checkin';
// import Router from './Router/Router';

export default function Router(){
    return(
        <>
         <Routes>
              <Route path="/homePage" element={<HomePage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/add-recipe" element={<AddRecipe />}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/logOut" element={<LogOut/>}></Route>
              <Route path="/recipe/:id" element={<Recipe/>}></Route>
              <Route path="/all-recipes" element={<AllRecipes/>}></Route>
              <Route path="/favorites" element={<Favorites/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/check-in" element={<CheckIn/>}></Route>
            </Routes>
        </>
    )
}