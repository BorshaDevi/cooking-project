import { useEffect } from "react";
import { useState } from "react";
import Cook from "../RecipeData/Cook";


const Recipes = () => {
    const [recipes,setRecipes] =useState([])

    useEffect(() => {
        fetch('Recipes.json')
        .then (res => res.json())
        .then (data => setRecipes(data))
    },[])
    return (
        <div className="grid lg:grid-cols-2 space-y-5 ">
        {
            recipes.map((recipe,index) => <Cook  key={index} menu={recipe}></Cook>)
        }
        </div>
    );
};

export default Recipes;