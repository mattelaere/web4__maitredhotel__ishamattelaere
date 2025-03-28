import { useState } from "react";
import "./App.css";
import initialRestaurant from "./restaurant";
import { Routes, Route, NavLink } from "react-router";



import Overview from "./components/Overview";
import Edit from "./components/Edit";


function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const toggleMealOnTable = (tableId, newMealIds) => {
    setRestaurant((restaurant) => {
    const tmpRestaurant = structuredClone(restaurant);
      if (!tmpRestaurant.tables || !tmpRestaurant.tables[tableId]) {
        return restaurant; 
      }
      tmpRestaurant.tables[tableId].mealIds = newMealIds;

      return tmpRestaurant;
    });
  };

  const updateTableOccupancy = (tableId, newOccupancy) => {
    setRestaurant((restaurant) => {
      const tmpRestaurant = structuredClone(restaurant);
      const table = tmpRestaurant.tables[tableId];

      table.occupancy = Math.max(0, Math.min(table.capacity, newOccupancy));

      return tmpRestaurant;
    });
  };

  return (
    <>
      
     
      <div className="overview" >
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit</NavLink>
            </li>
          </ul>
        </nav>
        <div className="rest">
          <div className="container">
            <h1>{restaurant.name}</h1>
            <Routes>
              <Route path="/" element={<Overview restaurant={restaurant} />} />
              <Route path="/edit" element={<Edit restaurant={restaurant} toggleMealOnTable={toggleMealOnTable} updateTableOccupancy={updateTableOccupancy}  />} />
            </Routes>
          
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
