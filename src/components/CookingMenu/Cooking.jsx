

const Cooking = () => {
    return (
        <div>
            <div className="card w-96 shadow-md rounded-xl">
    <div className="card-body  text-center items-center">
    <h2 className="card-title">Want to cook:</h2>
    <hr></hr>
    <div className="flex space-x-10">
        <p>Name </p>
        <p> Time </p>
        <p> Calories </p>
    </div>
    <hr></hr>
    <h2 className="card-title">Currently cooking:</h2>
    <hr></hr>
    <div className="flex space-x-10">
        <p>Name </p>
        <p> Time </p>
        <p> Calories </p>
    </div>
    <hr></hr>
    </div>
    </div>
        </div>
    );
};

export default Cooking;