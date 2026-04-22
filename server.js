const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {sequelize} = require('./models');
const customerRoutes = require('./routes/customer_routes');
const  supplierRoutes = require('./routes/supplier_routes');
const medicineRoutes = require('./routes/medicine_routes');
const prescriptionRoutes = require('./routes/prescription_routes');



const PORT = process.env.PORT || 3000;
app.use(express.json ());


const prescription_allRoutes = require('./routes/prescription_all.routes');


app.use('/prescription_all', prescription_allRoutes);
const prescription_twoRoutes = require('./routes/prescription_two.routes');
const prescription_customerRoutes = require('./routes/prescription_customer.routes');

app.use('/prescription_two', prescription_twoRoutes);
app.use('/prescription_customer', prescription_customerRoutes);



app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Pharmacy Management System API'
    });
});

app.use('/suppliers', supplierRoutes);
app.use('/medicines', medicineRoutes);
app.use('/customers', customerRoutes);
app.use('/prescriptions', prescriptionRoutes);
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




