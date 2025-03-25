// const Tables = () => {
//   return (
//     <div className="tables">
//       <div>
//         <h2>Table 1</h2>
//         <p id="status">Status: Reserved</p>
//       </div>
//       <div>
//         <h2>Table 2</h2>
//         <p id="status">Status: Free</p>
//       </div>
//       <div>
//         <h2>Table 3</h2>
//         <p id="status">Status: Reserved</p>
//       </div>
//       <div>
//         <h2>Table 4</h2>
//         <p id="status">Status: Reserved</p>
//       </div>
//     </div>
//   );
// };

// export default Tables;


import Meal from "./Meal";

const Table = ({
  id,
  name,
  mealIds,
  allTables,
  allMeals,
  onMealTableChange,
}) => {
  return (
    <article>
      <h3>{name}</h3>
      {mealIds.length === 0 ? (
        <p>No employees in this team</p>
      ) : (
        <ul>
          {mealIds.map((mealId) => (
            <Meal
              key={mealId}
              {...allMeals[mealId]}
              allTables={allTables}
              currentTableId={id}
              onTableChange={onMealTableChange}
            />
          ))}
        </ul>
      )}
    </article>
  );
};

export default Table;
