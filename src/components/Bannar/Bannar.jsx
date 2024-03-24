

const Bannar = () => {
    return (
        <div className=" mx-auto px-10">
           <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/SQYLRKZ/chef-taking-pizza-out-woodburning-oven-old-cafe-city-center-small-local-business.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
     
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className="space-x-5">
      <button className="btn bg-green-500 rounded-r-2xl rounded-l-2xl">Explore Now</button>
      
      <button className="btn glass   rounded-r-2xl rounded-l-2xl">Explore Now</button>
      </div>
    </div>
        </div>
        </div> 
        </div>
    );
};

export default Bannar;