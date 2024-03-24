import { GoPerson } from "react-icons/go";


const Navbar = () => {
    return (
        <div className="">
          <div className="navbar bg-base-100 mx-auto px-10 ">
  <div className="flex-1">
    <h1 className="text-2xl font-serif font-bold">Home Cooking recipe</h1>
  </div>
  <div className="md:space-x-5 md:mr-48 invisible md:visible">
    <a href=''>Home</a>
    <a href=''>Recipes</a>
    <a href=''>About </a>
    <a href=''>Search</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full bg-slate-300" />
    </div>
    <div className="dropdown dropdown-end">
      
        <div className="bg-green-500 rounded-full w-full">
        <GoPerson /> 
        </div>
      
      
    </div>
  </div>
</div>  
        </div>
    );
};

export default Navbar;