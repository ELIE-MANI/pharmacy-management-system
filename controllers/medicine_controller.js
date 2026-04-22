const {Medicine, Supplier} = require('../models');

// Create a new medicine
exports.createMedicine= async (req, res) => {
    try{
        console.log("REQUEST BODY:", req.body)
        const medicine = await Medicine.create(req.body);
        res.status(201).json({
            message:'Successful medicine created',
            data: medicine
        });
    
    } catch (error){
        console.error('error creating medicine', error);
        res.status(500).json({
            message: error.message || 'internal server error'
        });
    }
}

//Get all Medicines
exports.getAllMedicines = async (req,res) =>{
    try{
    const medicines = await Medicine.findAll({
        include: Supplier
    });

    res.status(200).json({
        message:'Medicines Succeful retrieved',
        data: medicines
    });

    }catch (error){
     console.error('error occured while retrieving', error);
     res.status(500).json({
        message: error.message || 'internal server error'
     });

    }
};

//Get medicine by id
exports.getMedicineById = async (req,res) => {
    try{
    const medicine = await Medicine.findByPk(req.params.id,{
        include: Supplier
    });
    res.status(200).json({
        message:'Medicine Successful retrieved',
        data: medicine
    });

    } catch (error){
     console.error('failed to get medicine', error);
     res.status(500).json({
        message: error.message
     });
     
    }
}

//Update medicine
exports.updateMedicine = async (req, res) => {
    try{
        const updatedMedicine = await Medicine.update(req.body, {
            where: {id:req.params.id}
        });
         if(!updatedMedicine){
            return res.status(404).json({
                message: 'Medicine not found'
            });
         }

        res.status(200).json({
            message: 'Medicine updated successfully',
            data: updatedMedicine
        });
    } catch (error){
        console.error('Error updating medicine:', error);
        res.status(500).json({
            message: error.message || 'An error occurred while updating the medicine',
        });
    }
};

//Delete medicine
exports.deleteMedicine = async (req, res) =>{
    try{
        const deletedMedicine =await Medicine.destroy({
            where: {id: req.params.id}
        });
         if(!deletedMedicine){
            return res.status(404).json({
                message: 'Medicine not found'
            });
         }

        res.status(200).json({
            message: 'Medicine deleted successfully'
    
        });
    } catch (error) {
        console.error('Error deleting medicine:', error);
        res.status(500).json ({
            message: error.message || 'An error occurred while deleting the medicine',
        });
    }
}