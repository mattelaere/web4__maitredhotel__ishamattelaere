import React from 'react';
import '../App.css';


const Overview = ({ restaurant, clearTable }) => {
    return (
        <div className="tables__overview">
            {Object.values(restaurant.rooms).map((room) => (
                <div key={room.id} className="room__section">
                    <h2>{room.name}</h2>
                    <ul className="tables__list">
                        {room.tableIds.map((tableId) => {
                            const table = restaurant.tables[tableId];
                            const hasSignatureDish = table.mealIds.includes(table.signatureDishId);
                            const totalBill = table.mealIds.reduce((sum, mealId) =>
                                mealId === table.signatureDishId ? sum : sum + restaurant.meals[mealId].price, 0);
                            const isAvailable = table.occupancy === 0;

                            return (
                                <li key={tableId} className={isAvailable ? 'available' : 'occupied'}>
                                    <div className="table__info">
                                        <span className="table__name">{table.name}</span>
                                        <span className="table__occupancy">
                                            {table.occupancy}/{table.capacity} seats
                                        </span>
                                    </div>
                                    {!isAvailable && table.mealIds.length > 0 && (
                                        <div className="table__meals">
                                            <ul>
                                                {table.mealIds.map((mealId) => (
                                                    <li key={mealId}>
                                                        {restaurant.meals[mealId].name} - €{restaurant.meals[mealId].price.toFixed(2)}
                                                    </li>
                                                ))}
                                            </ul>
                                            {!isAvailable && (
                                                <button
                                                    className="clear__table__btn"
                                                    onClick={() => clearTable(tableId)}
                                                >
                                                    Settle the bill
                                                </button>
                                            )}
                                        </div>
                                    )}
                                    <div className="table__details">
                                        <span className="meal__count">
                                            {table.mealIds.length} meals
                                        </span>
                                        <span className="total__bill">
                                            Total: €{totalBill.toFixed(2)}
                                        </span>
                                        {hasSignatureDish && (
                                            <div className="signature__dish__notice">
                                                <span>🎉 Signature dish ordered - It's on the house! 🎉</span>
                                                <span className="signature__dish__name">
                                                    ({restaurant.meals[table.signatureDishId].name})
                                                </span>
                                            </div>
                                        )}
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