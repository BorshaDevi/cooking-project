
import PropTypes from 'prop-types'
const Cooking = ({cookName,count}) => {
    
    const {recipe_name,preparing_time,calories} =cookName
    return (
        <div>
            <div className="card w-96 shadow-md rounded-xl">
    <div className="card-body  text-center items-center">
    <h2 className="card-title">Want to cook:{count}</h2>
    <hr></hr>
    <div className="grid grid-cols-5 ">
        <p>{count}</p>
        <p>Name<span className=' grid grid-cols-1'>{recipe_name}</span>  </p>
        <p> Time <span className=' grid grid-cols-1'>{preparing_time}</span> </p>
        <p> Calories <span className=' grid grid-cols-1'>{calories}</span>  </p>
        <button className='text-black font-semibold btn bg-green-500 rounded-r-xl rounded-l-xl  p-4'>preparing</button>
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
    cookName:PropTypes.object,
    count:PropTypes.number
}

export default Cooking;