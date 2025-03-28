import React from 'react';
import Room from './Room';


const Edit = ({ restaurant, toggleMealOnTable }) => {
  return (
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
  );
};

export default Edit;
