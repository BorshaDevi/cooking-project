import { useEffect } from "react";
import { useState } from "react";
import Cook from "../RecipeData/Cook";
import Cooking from "../CookingMenu/Cooking";


const Recipes = () => {
    const [recipes,setRecipes] =useState([])

    useEffect(() => {
        fetch('Recipes.json')
        .then (res => res.json())
        .then (data => setRecipes(data))
    },[])
    return (
        <div className="lg:flex space-x-10">
        <div className="grid lg:grid-cols-2 space-y-5 space-x-10 ">
        {
            recipes.map((recipe,index) => <Cook  key={index} menu={recipe}></Cook>)
        }
        </div>
        <Cooking></Cooking>
        </div>
    );
};

export default Recipes;