import { useState } from "react";
import CookRecipes from "../CookRecipes/CookRecipes";
import Recipes from "../Recipes/Recipes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OurRecipe = () => {
    const [cookingMenu,setCookingMenu] =useState([])
    const [count,setCount] =useState(0)

    const handleClick=(menu) =>{
        const isExist = cookingMenu.find(item => item.id == menu.id)
        if(!isExist){
            const newCookingMenu =[...cookingMenu,menu]
            setCookingMenu(newCookingMenu)
            setCount(count+1)
        }
        else{
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
        
    }
    return (
        <div >
            <div className="text-center">
            <h1 className="text-xl font-serif font-bold">Our Recipes</h1>
            <p className="p-5 space-y-3">  Our best recipes is here.There is an art to writing recipes that<br></br> 
                will inspire – there is nothing more frustrating for a than trying out a <br></br>
                 new recipe and finding the instructions ambiguous, that something <br></br>
                 should have been prepared hours in advance, <br></br>
                or that the ingredients are not easily obtainable. </p>
                </div>
                <div className="flex space-x-10">
            <Recipes handleClick={handleClick}></Recipes>
            <ToastContainer />
            <CookRecipes count={count} cookingMenu={cookingMenu}></CookRecipes>
            </div>
        </div>
    );
};

export default OurRecipe;