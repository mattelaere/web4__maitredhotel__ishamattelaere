const restaurant = {
    name: "Bonjour Butler",
    rooms: {
        1: { id: 1, name: "Downstairs", tableIds: [101, 102] },
        2: { id: 2, name: "Upstairs", tableIds: [201] },
    },
    tables: {
        101: { id: 101, name: "Table 1", mealIds: [1001, 1002] },
        102: { id: 102, name: "Table 2", mealIds: [1003, 1004] },
        201: { id: 201, name: "Table 3", mealIds: [2001, 2002] },
    },
    meals: {
        1001: { id: 1001, name: "Moules Maritimes" },
        1002: { id: 1002, name: "Moules frites" },
        1003: { id: 1003, name: "Oysters" },
        1004: { id: 1004, name: "Escargots" },
        2001: { id: 2001, name: "Vol-au-vent" },
        2002: { id: 2002, name: "Children's delight" },
    },
};

export default restaurant;