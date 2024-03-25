

const Menus = () => {
    return (
        <div>
            <div className="card w-96  shadow-md">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Want to cook:</h2>
     
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
    <tbody>
      {/* row 1 */}
      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
    </tbody>
  </table>
</div>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Current cooking:</h2>
  <hr></hr>
     
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
    <tbody>
      {/* row 1 */}
      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
    </tbody>
  </table>
</div>
  </div>

</div>
        </div>
    );
};

export default Menus;