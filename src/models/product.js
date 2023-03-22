import mongoose from "mongoose";

const productSchem = new mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        tyoe: Number,
    }, 
});
export default mongoose.model("Product", productSchem);