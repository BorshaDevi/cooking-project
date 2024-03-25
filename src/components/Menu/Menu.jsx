
import PropTypes from "prop-types"
const Menu = ({cooking,count}) => {
    const {recipe_name,preparing_time,calories} =cooking
    return (
        <div className="items-center text-centerm ml-20">
    <tbody>
      <tr>
        <td>{count}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button className="btn bg-green-500 text-black">preparing</button></td>
      </tr>
    </tbody>
  
    </div>
       
    );
};
Menu.propTypes = {
    cooking:PropTypes.object,
    count:PropTypes.number
}
export default Menu;