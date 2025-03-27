import Table from "./Table";

const Room = ({
    room,
    allTables,
    allMeals,
    toggleMealOnTable,
}) => {
    return (
        <article>
            <h2>{room.name}</h2>

            {room.tableIds.map((tableId) => (
                <Table
                    key={tableId}
                    {...allTables[tableId]}
                    allTables={allTables}
                    allMeals={allMeals}
                    toggleMealOnTable={toggleMealOnTable}
                />
            ))}
        </article>
    );
};

export default Room;