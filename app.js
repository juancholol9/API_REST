const express = require('express');
const session = require('express-session')
const baseRoutes = require('./routes/base.routes')
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes')

const app = express();

app.use(express.json());
app.use(session({
    secret: 'enginehub',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60,
    },
}))
app.use('/', baseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (res, req) => {
    console.log("Hello world")
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = app;