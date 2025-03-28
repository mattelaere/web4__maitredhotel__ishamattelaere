


const Overview = ({ restaurant }) => {
    return (
        <div className="tables__overview">
            {Object.values(restaurant.rooms).map((room) => (
                <div key={room.id} className="room__section">
                    <h2>{room.name}</h2>
                    <ul className="tables__list">
                        {room.tableIds.map((tableId) => (
                            <li key={tableId}>
                                {restaurant.tables[tableId].name}
                                <span className="meal__count">
                                    ({restaurant.tables[tableId].mealIds.length} meals)
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Overview;