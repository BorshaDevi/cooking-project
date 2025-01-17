import { useEffect } from "react";
import { useState } from "react";
import Cook from "../RecipeData/Cook";

import PropTypes from "prop-types"


const Recipes = ({handleClick}) => {
    const [recipes,setRecipes] =useState([])
    

    useEffect(() => {
        fetch('Recipes.json')
        .then (res => res.json())
        .then (data => setRecipes(data))
    },[])

    // const handleCook =() =>{
    //     console.log('working')
    // handleCook ={handleCook }
    // }
    return (
        <div className="lg:flex space-x-10">
        <div className="grid lg:grid-cols-2 space-y-5 space-x-10 ">
        {
            recipes.map((recipe,index) => <Cook  handleClick={handleClick}  key={index} menu={recipe}></Cook>)
        }
        </div>
        
        </div>
    );
};
Recipes.propTypes ={
    handleClick:PropTypes.func
}
export default Recipes;