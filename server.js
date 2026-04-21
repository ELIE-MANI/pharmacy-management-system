const express = require('express');
const app = express();
const dotenv = require('dotenv');

const {sequelize} = require('./models');

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json ());


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Pharmacy Management System API'
    });
});

sequelize.sync({force: false })
.then(() => {
   console.log('Database synced');
   app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
    });
})
.catch(err => {
    console.error('Unable to sync database:', err);
});




