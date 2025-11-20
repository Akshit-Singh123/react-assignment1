import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.firstName} {user.lastName}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>City: {user.city}</p>
    </div>
  );
};

export default UserCard;
