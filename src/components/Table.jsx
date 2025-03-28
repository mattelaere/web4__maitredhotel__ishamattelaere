
import { useState } from "react";


const Table = ({
  id,
  name,
  mealIds,
  allMeals,
  toggleMealOnTable,
}) => {

  const [isEditMode, setIsEditMode] = useState(false);

  const getMealQuantities = () => {
    const quantities = {};
    mealIds.forEach(mealId => {
      quantities[mealId] = (quantities[mealId] || 0) + 1;
    });
    return quantities;
  };

  const mealQuantities = getMealQuantities();

  const adjustMealQuantity = (mealId, change) => {
    const currentQuantity = mealQuantities[mealId] || 0;
    const newQuantity = currentQuantity + change;

    if (newQuantity > currentQuantity) {
      toggleMealOnTable(mealId, id, true); 
    } else if (newQuantity < currentQuantity && newQuantity > 0) {
      toggleMealOnTable(mealId, id, false); 
    } else if (newQuantity <= 0) {
      for (let i = 0; i < currentQuantity; i++) {
        toggleMealOnTable(mealId, id, false);
      }
    }
  };

  return (
    <article>
      <h3>{name}</h3>
      {mealIds.length === 0 ? (
        <p>No meals on this table</p>
      ) : (
          <ul>
            {Object.entries(mealQuantities).map(([mealId, quantity]) => (
              <li key={mealId}>
                {allMeals[mealId].name} {quantity > 1 ? `(x${quantity})` : ''}
                {isEditMode && (
                  <>
                    <button onClick={() => adjustMealQuantity(mealId, -1)}>-</button>
                    <button onClick={() => adjustMealQuantity(mealId, 1)}>+</button>
                  </>
                )}
              </li>
            ))}
          </ul>
      )}
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Done" : "Edit Meals"}
      </button>
      {isEditMode && (
        <MealSelector
          allMeals={allMeals}
          selectedMealIds={mealIds}
          onMealToggle={(mealId) => toggleMealOnTable(mealId, id, true)}
        />
      ) }
    </article>
  );
};

const MealSelector = ({ allMeals, selectedMealIds, onMealToggle }) => {
  return (
    <div>
      {Object.values(allMeals).map((meal) => (
        <label key={meal.id} style={{ display: "block", margin: "5px 0" }}>
          <input
            type="checkbox"
            checked={selectedMealIds.includes(meal.id)}
            onChange={() => onMealToggle(meal.id)}
          />
          {" " + meal.name}
        </label>
      ))}
    </div>
  );
};

export default Table;
