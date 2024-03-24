

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
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      
    </div>
  </div>
</div>  
        </div>
    );
};

export default Navbar;