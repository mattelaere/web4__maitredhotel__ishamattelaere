
import { useState, useEffect } from "react";


const Table = ({
  id,
  name,
  capacity,
  occupancy,
  mealIds,
  allMeals,
  signatureDishId,
  toggleMealOnTable,
  updateTableOccupancy
}) => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [localMealIds, setLocalMealIds] = useState(mealIds);

  useEffect(() => {
    if (occupancy === 0) {
      setLocalMealIds([]);
    } else {
      setLocalMealIds(mealIds);
    }
  }, [occupancy, mealIds]);

  const getMealQuantities = () => {
    const quantities = {};
    localMealIds.forEach(mealId => {
      quantities[mealId] = (quantities[mealId] || 0) + 1;
    });
    return quantities;
  };

  const mealQuantities = getMealQuantities();

  const calculateTotalBill = () => {
    let hasSignatureDish = false;

    const total = localMealIds.reduce((total, mealId) => {
      if (mealId === signatureDishId) {
        hasSignatureDish = true;
        return total; 
      }
      return total + allMeals[mealId].price;
    }, 0);
    return { total, hasSignatureDish };
  };

  const { total: totalBill, hasSignatureDish } = calculateTotalBill();

  const adjustMealQuantity = (mealId, change) => {
    const newQuantity = (mealQuantities[mealId] || 0) + change;
    let newMealIds;
    if (newQuantity <= 0) {
      
      newMealIds = localMealIds.filter(id => id !== mealId);
    } else if (change > 0) {
      
      newMealIds = [...localMealIds, mealId];
    } else {
      
      const index = localMealIds.lastIndexOf(mealId);
      newMealIds = [...localMealIds.slice(0, index), ...localMealIds.slice(index + 1)];
    }

    setLocalMealIds(newMealIds);
    toggleMealOnTable(id, newMealIds);
  };

  const isAvailable = occupancy === 0;
  const isFull = occupancy === capacity;

  return (
    <article className={`table__card ${isAvailable ? 'available' : 'occupied'}`}>

      <div className="table__header">
        <h3>{name}</h3>
        <div className="table__summary">
          <span>Total Bill: €{totalBill.toFixed(2)}</span>
          {hasSignatureDish && (
            <div className="signature__dish__notice">
              <span>🎉 This table's signature dish has been ordered - It's on the house! 🎉</span>
            </div>
          )}
        </div>
      </div>

      <div className="occupancy__section">
        <h4>Occupancy</h4>
        <div className="occupancy__controls">
          <button
            onClick={() => updateTableOccupancy(id, Math.max(0, occupancy - 1))}
            disabled={occupancy === 0}
          >
            -
          </button>
          <span className="occupancy__display">
            {occupancy}/{capacity}
          </span>
          <button
            onClick={() => updateTableOccupancy(id, Math.min(capacity, occupancy + 1))} 
            disabled={occupancy === capacity}
          >
            +
          </button>
        </div>
        <div className="status__indicator">
          {isAvailable ? 'Available' : isFull ? 'Full' : 'Partially Occupied'}
        </div>
      </div>

      {!isAvailable && (
      <div className="meals__section">
        <h4>Meals</h4>
          {localMealIds.length === 0 ? (
          <p>No meals on this table</p>
        ) : (
          <ul>
                {Object.entries(mealQuantities).map(([mealId, quantity]) => (
              <li key={mealId}>
                <div className="meal__info">
                  <span>{allMeals[mealId].name}</span>
                      <span className="meal__price"> € {allMeals[mealId].price.toFixed(2)}</span>
                </div>
                <div className="meal__quantity">
                  {quantity > 1 ? `(x${quantity})` : ''}
                  {isEditMode && (
                    <>
                      <button onClick={() => adjustMealQuantity(mealId, -1)}>-</button>
                      <button onClick={() => adjustMealQuantity(mealId, 1)}>+</button>
                    </>
                  )}
                </div>
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
              tableId={id}
              onMealToggle={(mealId) => adjustMealQuantity(mealId, localMealIds.includes(mealId) ? -1 : 1)}
            />
          )}
      </div>
      )}
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
          {" " + meal.name} - €{meal.price.toFixed(2)}
        </label>
      ))}
    </div>
  );
};

export default Table;
