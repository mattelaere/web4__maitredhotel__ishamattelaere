
import { useState } from "react";


const Table = ({
  id,
  name,
  mealIds,
  allMeals,
  toggleMealOnTable,
}) => {

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <article>
      <h3>{name}</h3>
      {mealIds.length === 0 ? (
        <p>No meals on this table</p>
      ) : (
          <ul>
            {mealIds.map((mealId) => (
              <li key={mealId}>{allMeals[mealId].name}</li>
            ))}
          </ul>
      )}
      {isEditMode ? (
        <MealSelector
          allMeals={allMeals}
          selectedMealIds={mealIds}
          onMealToggle={(mealId) => toggleMealOnTable(mealId, id)}
        />
      ) : (
        <button onClick={() => setIsEditMode(true)}>Edit Meals</button>
      )}
    </article>
  );
};

const MealSelector = ({ allMeals, selectedMealIds, onMealToggle }) => {
  return (
    <div>
      {Object.values(allMeals).map((meal) => (
        <label key={meal.id}>
          <input
            type="checkbox"
            checked={selectedMealIds.includes(meal.id)}
            onChange={() => onMealToggle(meal.id)}
          />
          {meal.name}
        </label>
      ))}
    </div>
  );
};

export default Table;
