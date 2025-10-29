const express = require('express');
const personRoutes = require('./routes/person.routes');

const app = express();

app.use(express.json());
app.use('/api/personas', personRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = app;