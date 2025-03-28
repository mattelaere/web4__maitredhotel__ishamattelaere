import { useState } from "react";
import "./App.css";
import initialRestaurant from "./restaurant";
import { Routes, Route, NavLink } from "react-router";



import Overview from "./components/Overview";
import Edit from "./components/Edit";
import Room from "./components/Room";

function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const toggleMealOnTable = (mealId, tableId, isAdding = true) => {
    setRestaurant((restaurant) => {
    const tmpRestaurant = structuredClone(restaurant);
    const table = tmpRestaurant.tables[tableId];

    
      if (isAdding) {
        table.mealIds.push(mealId);
      } else {
        const index = table.mealIds.indexOf(mealId);
        if (index !== -1) {
          table.mealIds.splice(index, 1);
        }
      }

    return tmpRestaurant;
    });
  };


  


  return (
    <>
      
     
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
            <h1>{restaurant.name}</h1>
            <Routes>
              <Route path="/" element={<Overview restaurant={restaurant} />} />
              <Route path="/edit" element={<Edit restaurant={restaurant} toggleMealOnTable={toggleMealOnTable} />} />
            </Routes>
            {/* <div className="cols">
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
             
            </div> */}
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
