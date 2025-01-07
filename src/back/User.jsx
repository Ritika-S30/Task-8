import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://task-7-cyiz.onrender.com/api/user/fetch")
      .then(result => {
        console.log(result.data)
        setUser(result.data.users);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // Run once when the component mounts

  const deleteUser = (id) => {
    axios.delete(`https://task-7-cyiz.onrender.com/api/user/delete/${id}`)
      .then(result => {
        console.log("User deleted");
        setUser(user.filter(u => u._id !== id)); // Remove the deleted user from the state
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>User</h1>
      <Link to="/create">Create User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr key={users._id}>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.address}</td>
              <td>
                <Link to={`/update/${users._id}`}>Update</Link>
                <button onClick={() => deleteUser(users._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
