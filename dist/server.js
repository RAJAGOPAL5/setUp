"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
// Initialize Express app
const app = (0, express_1.default)();
const PORT = 3000;
// PostgreSQL connection configuration
const pool = new pg_1.Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432, // PostgreSQL default port
});
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Example route to handle GET request for fetching data from PostgreSQL
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Query the PostgreSQL database
        const { rows } = yield pool.query('SELECT * FROM users');
        res.status(200).json(rows);
    }
    catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}));
// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map