import React from 'react';
import '../app.css';


const Overview = ({ restaurant }) => {
    return (
        <div className="tables__overview">
            {Object.values(restaurant.rooms).map((room) => (
                <div key={room.id} className="room__section">
                    <h2>{room.name}</h2>
                    <ul className="tables__list">
                        {room.tableIds.map((tableId) => {
                            const table = restaurant.tables[tableId];
                            const totalBill = table.mealIds.reduce((sum, mealId) =>
                                sum + restaurant.meals[mealId].price, 0);
                            const isAvailable = table.occupancy === 0;

                            return (
                                <li key={tableId} className={isAvailable ? 'available' : 'occupied'}>
                                    <div className="table__info">
                                        <span className="table__name">{table.name}</span>
                                        <span className="table__occupancy">
                                            {table.occupancy}/{table.capacity} seats
                                        </span>
                                    </div>
                                    <div className="table__details">
                                        <span className="meal__count">
                                            {table.mealIds.length} meals
                                        </span>
                                        <span className="total__bill">
                                            Total: €{totalBill.toFixed(2)}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Overview;