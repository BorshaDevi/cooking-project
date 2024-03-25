import CookRecipes from "../CookRecipes/CookRecipes";
import Recipes from "../Recipes/Recipes";


const OurRecipe = () => {

    const handleClick=(menu) =>{
        console.log('working',menu)
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
            <CookRecipes></CookRecipes>
            </div>
        </div>
    );
};

export default OurRecipe;