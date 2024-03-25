import PropTypes from 'prop-types'

import { IoTimeOutline } from "react-icons/io5";

import { AiOutlineFire } from "react-icons/ai";

const Cook = ({menu,handleClick }) => {
    const {recipe_name,short_description,recipe_image,ingredients,preparing_time,calories} =menu
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-md rounded-xl p-5 space-y-3">
        <img className=' rounded-md' src={recipe_image}  />
    <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <hr></hr>
    <h1 className='font-semibold'>Ingredients:</h1>
        {
            ingredients.map((ingredient,index) => <ul key={index}><li><span className='s'>.</span>{ingredient}</li></ul>)
        }
    
       <hr></hr>
       <div className=' flex justify-between '>
         <div className='flex space-x-1'>
            <button><IoTimeOutline /></button>
           <p>{preparing_time}</p>
            <p>minutes</p>
         </div>
         <div className='flex space-x-1'>
            <button><AiOutlineFire /></button>
            <p>{calories}</p>
            <p>calories</p>
         </div>
       </div>
    <div className="card-actions justify-start">
      <button onClick={() => handleClick(menu) } className="btn bg-green-500 rounded-full font-semibold text-xl">Want to cook</button>
    </div>
    </div>
    </div> 
        </div>
    );
};
Cook.propTypes ={
    menu:PropTypes.object,
    handleClick :PropTypes.func
}

export default Cook;