const express = require('express');
const app = express();
const dotenv = require('dotenv');

const {sequelize} = require('./models');

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json ());

const prescription_twoRoutes = require('./routes/prescription_two.routes');
const prescription_allRoutes = require('./routes/prescription_all.routes');

app.use('/prescription_two', prescription_twoRoutes);
app.use('/prescription_all', prescription_allRoutes);



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




