import { useState } from "react";
import "./App.css";
import initialRestaurant from "./restaurant";
import { Routes, Route, NavLink } from "react-router";

import Room from "./components/Room";

function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const handleMealTableChange = (employeeId, teamId) => {
    const tmpRestaurant = structuredClone(restaurant);
    removeMealFromTable(employeeId, tmpRestaurant.tables);
    addMealToTable(employeeId, teamId, tmpRestaurant.tables);
    setRestaurant(tmpRestaurant);
  };

  const removeMealFromTable = (mealId, tables) => {
    Object.values(tables).forEach((table) => {
      const index = table.mealIds.indexOf(mealId);
      if (index !== -1) {
        table.mealIds.splice(index, 1);
      }
    });
  };

  const addMealToTable = (mealId, tableId, tables) => {
    tables[tableId].mealIds.push(mealId);
  };


  return (
    <>
      
      <div className="tables__card">
       
      </div>
      <div className="overview" >
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Tables</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit</NavLink>
            </li>
          </ul>
        </nav>
        <div className="rest">
          

          <div className="container">
{/*             
              <Routes>
                <Route path="/" element={<Tables />} />
                <Route path="/edit" element={<Edit  />} />
              </Routes> */}
            <h1>{restaurant.name}</h1>
            <div className="cols">
              <section>
                {Object.values(restaurant.rooms).map((room) => (
                  <Room
                    key={room.id}
                    room={room}
                    allTables={restaurant.tables}
                    allMeals={restaurant.meals}
                    onMealTableChange={handleMealTableChange}
                  />
                ))}
              </section>
              {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
