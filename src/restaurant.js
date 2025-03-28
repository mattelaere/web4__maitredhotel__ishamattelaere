const restaurant = {
    name: "Bonjour Butler",
    rooms: {
        1: { id: 1, name: "Downstairs", tableIds: [101, 102, 103, 104, 105, 106, 107] },
        2: { id: 2, name: "Upstairs", tableIds: [201, 202, 203, 204, 205] },
    },
    tables: {
        101: { id: 101, name: "Table 1", capacity: 2, occupancy: 0, mealIds: [], signatureDishId: 1001 },
        102: { id: 102, name: "Table 2", capacity: 2, occupancy: 2, mealIds: [1003, 1004], signatureDishId: 3009 },
        103: { id: 102, name: "Table 3", capacity: 2, occupancy: 2, mealIds: [1001, 1002], signatureDishId: 3001 },
        104: { id: 102, name: "Table 4", capacity: 2, occupancy: 2, mealIds: [1002, 1003], signatureDishId: 4002 },
        105: { id: 102, name: "Table 5", capacity: 2, occupancy: 0, mealIds: [], signatureDishId: 1004 },
        106: { id: 102, name: "Table 6", capacity: 2, occupancy: 0, mealIds: [], signatureDishId: 1002 },
        107: { id: 102, name: "Table 7", capacity: 2, occupancy: 2, mealIds: [2002, 1001], signatureDishId: 4010 },

        201: { id: 201, name: "Table 8", capacity: 6, occupancy: 0, mealIds: [], signatureDishId: 4003 },
        202: { id: 202, name: "Table 9", capacity: 5, occupancy: 0, mealIds: [], signatureDishId: 4004 },
        203: { id: 203, name: "Table 10", capacity: 6, occupancy: 2, mealIds: [2001, 2002], signatureDishId: 3010 },
        204: { id: 204, name: "Table 11", capacity: 8, occupancy: 8, mealIds: [3009, 4002, 4006, 4007, 1003, 1001, 2002, 3007, 3005], signatureDishId: 2002 },
        205: { id: 205, name: "Table 12", capacity: 10, occupancy: 0, mealIds: [], signatureDishId: 1003 },
    },
    meals: {
        1001: { id: 1001, name: "Moules Maritimes", price: 19.50 },
        1002: { id: 1002, name: "Moules frites", price: 17.00 },
        1003: { id: 1003, name: "Oysters", price: 21.00 },
        1004: { id: 1004, name: "Escargots", price: 16.50 },

        2001: { id: 2001, name: "Vol-au-vent", price: 18.00 },
        2002: { id: 2002, name: "Children's delight", price: 12.00 },

        3001: { id: 3001, name: "Bouillabaisse", price: 25.00 },
        3002: { id: 3002, name: "Coq au Vin", price: 22.00 },
        3003: { id: 3003, name: "Ratatouille", price: 18.00 },
        3004: { id: 3004, name: "Quiche Lorraine", price: 15.00 },
        3005: { id: 3005, name: "Tarte Tatin", price: 12.00 },
        3006: { id: 3006, name: "Crème Brûlée", price: 10.00 },
        3007: { id: 3007, name: "Soupe à l'oignon", price: 14.00 },
        3008: { id: 3008, name: "Duck Confit", price: 26.00 },
        3009: { id: 3009, name: "Cassoulet", price: 24.00 },
        3010: { id: 3010, name: "Macarons", price: 8.00 },

        4001: { id: 4001, name: "Chardonnay", price: 15.00 },
        4002: { id: 4002, name: "Merlot", price: 14.00 },
        4003: { id: 4003, name: "Cabernet Sauvignon", price: 16.00 },
        4004: { id: 4004, name: "Rosé", price: 13.00 },
        4005: { id: 4005, name: "Champagne", price: 20.00 },
        4006: { id: 4006, name: "Kir Royale", price: 18.00 },
        4007: { id: 4007, name: "Pastis", price: 10.00 },
        4008: { id: 4008, name: "Cognac", price: 22.00 },
        4009: { id: 4009, name: "Armagnac", price: 21.00 },
        4010: { id: 4010, name: "Evian Water", price: 5.00 }

    },
};

export default restaurant;

