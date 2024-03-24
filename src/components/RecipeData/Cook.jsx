import PropTypes from 'prop-types'

import { IoTimeOutline } from "react-icons/io5";

import { AiOutlineFire } from "react-icons/ai";

const Cook = ({menu}) => {
    const {recipe_name,short_description,recipe_image,ingredients,preparing_time,calories} =menu
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-md rounded-xl p-5 space-y-3">
        <img className=' rounded-md' src={recipe_image}  />
    <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <hr></hr>
    <ul>
        <li>{
            
            }</li>
    </ul>
       <hr></hr>
       <div>
         <div>
            <button><IoTimeOutline /></button>
           <p>{preparing_time}</p>
         </div>
         <div>
            <button><AiOutlineFire /></button>
            <p>{calories}</p>
         </div>
       </div>
    <div className="card-actions justify-start">
      <button className="btn bg-green-500 rounded-full font-semibold text-xl">Want to cook</button>
    </div>
    </div>
    </div> 
        </div>
    );
};
Cook.propTypes ={
    menu:PropTypes.object
}

export default Cook;