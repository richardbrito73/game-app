import mongoose from 'mongoose';

const { Schema } = mongoose;

const CardSchema = mongoose.Schema({
    url: String,
});

const CardModel = mongoose.model('Card', CardSchema);

export default CardModel;