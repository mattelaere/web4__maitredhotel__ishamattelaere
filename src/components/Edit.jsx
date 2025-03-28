import React from 'react';
import Room from './Room';

import '../App.css';

const Edit = ({ restaurant, toggleMealOnTable, updateTableOccupancy  }) => {
  return (
  
    <div className="edit__container">
      <section className="meals__section">
        <h2 className='edit__h2'>Meals by Room</h2>
        {Object.values(restaurant.rooms).map((room) => (
          <Room
            key={room.id}
            room={room}
            allTables={restaurant.tables}
            allMeals={restaurant.meals}
            toggleMealOnTable={toggleMealOnTable}
            updateTableOccupancy={updateTableOccupancy}
          />
        ))}
      </section>
    </div>
  );
};

export default Edit;
