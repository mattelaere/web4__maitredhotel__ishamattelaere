import { useState } from "react";
import "./App.css";
import initialRestaurant from "./restaurant";
import { Routes, Route, NavLink } from "react-router";

import Room from "./components/Room";

function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const toggleMealOnTable = (mealId, tableId) => {
    const tmpRestaurant = structuredClone(restaurant);
    const table = tmpRestaurant.tables[tableId];

    
    const mealIndex = table.mealIds.indexOf(mealId);

    if (mealIndex !== -1) {
      
      table.mealIds.splice(mealIndex, 1);
    } else {
      table.mealIds.push(mealId);
    }

    setRestaurant(tmpRestaurant);
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
                    toggleMealOnTable={toggleMealOnTable}
                  />
                ))}
              </section>
             
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
