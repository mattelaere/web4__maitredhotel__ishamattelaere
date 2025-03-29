import Table from "./Table";

const Room = ({
    room,
    allTables,
    allMeals,
    toggleMealOnTable,
    updateTableOccupancy
}) => {
    return (
        <article>
            <h2>{room.name}</h2>
            {room.tableIds.map((tableId) => {
                const table = allTables[tableId];
                return (
                    <Table
                        key={tableId}
                        id={table.id}
                        name={table.name}
                        capacity={table.capacity}
                        occupancy={table.occupancy}
                        mealIds={table.mealIds}
                        allTables={allTables}
                        allMeals={allMeals}
                        toggleMealOnTable={toggleMealOnTable}
                        updateTableOccupancy={updateTableOccupancy}
                        signatureDishId={table.signatureDishId}
                    />
                );
            })}
        </article>
    );
};

export default Room;