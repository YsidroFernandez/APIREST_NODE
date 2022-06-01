const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name : { type : String },
    description : { type : String },
    logo :  { type : String},
    tabs : [{ type : String}]
},
{ 
    timestamps : { createdAt : true , updatedAt : true}
}
);

module.exports = mongoose.model('Student',StudentSchema);