import mongoose from 'mongoose';
import { CardModel } from '../models/index.js';

/**
 * Retrieve all cards from database
 * @param {*} req 
 * @param {*} res 
 */
const fetchAllCards = async (req, res) => {
    try {
        const cards = await CardModel.find().exec()
        return res.status(200).send(cards);
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}


export {
    fetchAllCards
}