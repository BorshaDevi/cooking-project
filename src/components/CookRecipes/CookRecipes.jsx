import Menus from "../Menus/Menus";
import PropTypes from "prop-types"

const CookRecipes = ({cookingMenu,count}) => {
    return (
        <div>
                 <Menus  count={count} cookingMenu={cookingMenu}></Menus>
        </div>
    );
};
CookRecipes.propTypes = {
    cookingMenu:PropTypes.array,
    count:PropTypes.number
}
export default CookRecipes;