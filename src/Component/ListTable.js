import React from 'react';


const ListTable = () => {

    let employees = [
  {
    "ID": "1",
    "Name": "siddes",
    "Experience" : "2 years"
  },
  {
    "ID": "2",
    "Name": "Ram",
     "Experience" : "4 years"
  },
  {
    "ID": "3",
    "Name": "paramesh",
     "Experience" : "2 years"
  },
  {
    "ID": "4",
    "Name": "sathish",
     "Experience" : "2 years"
  },
  {
    "ID": "5",
    "Name": "Ravi",
     "Experience" : "5 years"
  },
];

const employeeList = employees.map(employee => ( 
<tr>
    <td>{employee.ID}</td>
    <td>{employee.Name}</td>
    <td>{employee.Experience}</td>
  </tr>));

  return (
    <div>
    <h2>Employee details</h2>
        <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Experience</th>
        </tr>
        {employeeList}
        </table>
    </div>
  )
}

export default ListTable
