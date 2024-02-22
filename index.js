const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

const pool = new Pool({
    user: 'sudphdzr',
    host: 'satao.db.elephantsql.com',
    database: 'sudphdzr',
    password: 'cLkLQqLpR7YHwt3DWxLdAr2oKwycq_al',
    port: 5432,
});

app.get('/api/login', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM login');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
