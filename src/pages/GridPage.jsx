import React, { useState, useEffect } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import SearchBar from "../components/searchBar";
import CityFilter from "../components/CityFilter";
import "./GridPage.css";

const GridPage = () => {
  const [users, setUsers] = useState([]);       
  const [search, setSearch] = useState("");     
  const [city, setCity] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
    }, 0);
  }, []);

  //some Random usecase of useEffect
  useEffect(() => {
    alert("You have chosen some city");
  }, [city]);


  const filteredUsers = users.filter((user) => {
    const byName =
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase());
    const byCity = city ? user.city === city : true;
    return byName && byCity;
  });

  // Get unique cities for filter dropdown
  const cities = [...new Set(users.map((u) => u.city))];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <h1>Users Data</h1>
        <p>Explore all users and filter by name or city</p>
      </div>

      {/* Search and City Filter */}
      <div className="filter-container">
        <SearchBar onSearch={setSearch} />
        <CityFilter cities={cities} onFilter={setCity} />
      </div>

      {/* Users Grid */}
      <div className="grid-container">
        {filteredUsers.length === 0 ? (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>No users found.</p>
        ) : (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default GridPage;
