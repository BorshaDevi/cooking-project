
import PropTypes from 'prop-types'
const Cooking = ({cookName}) => {
    
    const {recipe_name,preparing_time,calories} =cookName
    return (
        <div>
            <div className="card w-96 shadow-md rounded-xl">
    <div className="card-body  text-center items-center">
    <h2 className="card-title">Want to cook:</h2>
    <hr></hr>
    <div className="flex space-x-10">
        <p>Name <span className='mt-2'>{recipe_name}</span>  </p>
        <p> Time <span>{preparing_time}</span> </p>
        <p> Calories <span>{calories}</span> </p>
    </div>
    <hr></hr>
    <h2 className="card-title">Currently cooking:</h2>
    <hr></hr>
    <div className="flex space-x-10">
        <p>Name</p>
        <p> Time </p>
        <p> Calories </p>
    </div>
    <hr></hr>
    </div>
    </div>
        </div>
    );
};
Cooking.propTypes ={
    cookName:PropTypes.object
}

export default Cooking;