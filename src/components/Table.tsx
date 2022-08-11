import React from "react";
type UserProps = {
  userData: {
    name: string;
    email: string
  }[];
}
const Table = ({userData}: UserProps) => {
  return (
    <div className="col-sm-12 text-center">
      <div className=" w-50 p-3" style={{margin:'0 auto'}}>
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user, id) => {
                return(
                  <tr key={id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
