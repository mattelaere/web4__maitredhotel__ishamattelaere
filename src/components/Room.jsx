import Table from "./Table";

const Room = ({
    room,
    allTables,
    allMeals,
    onMealTableChange,
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
                    onMealTableChange={onMealTableChange}
                />
            ))}
        </article>
    );
};

export default Room;