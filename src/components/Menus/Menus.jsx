import Menu from "../Menu/Menu";
import PropTypes from "prop-types"


const Menus = ({cookingMenu,count}) => {
    // const handlePreparing=()=>{

    // }
    
    return (
        <div>
            <div className="card w-96  shadow-md">
  <div className="card-body items-center text-center ">
    <h2 className="card-title">Want to cook:{count}</h2>
     
    <div className="overflow-x-auto ">
  <table className="table items-center text-center justify-center">
    {/* head */}
  
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>calories</th>
      </tr>
    

    {
        cookingMenu.map((cooking,index)=><Menu key={index} count={count} cooking={cooking} ></Menu>)
    }
    
  </table>
</div>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Current cooking:</h2>
   
     
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>calories</th>
      </tr>
    </thead>
   
  </table>
</div>
  </div>

</div>
        </div>
    );
};
Menus.propTypes={

    cookingMenu:PropTypes.array,
    count:PropTypes.number
}

export default Menus;