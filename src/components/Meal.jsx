import { useState } from "react";

const Meal = ({ id, name, allTables, currentTableId, onTableChange }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    return (
        <li>
            {name}{" "}
            {isEditMode ? (
                <TableSelector
                    tables={allTables}
                    selectedTableId={currentTableId}
                    onTableChange={(tableId) => onTableChange(id, tableId)}
                />
            ) : (
                <button onClick={() => setIsEditMode(true)}>⚙︎</button>
            )}
        </li>
    );
};


const TableSelector = ({ tables, selectedTableId, onTableChange }) => {
    return (
        <select
            defaultValue={selectedTableId}
            onChange={(e) => onTableChange(parseInt(e.target.value, 10))}
        >
            {Object.values(tables).map((table) => (
                <option key={table.id} value={table.id}>
                    {table.name}
                </option>
            ))}
        </select>
    );
};

export default Meal;