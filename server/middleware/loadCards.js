import express from 'express';
import axios from 'axios';

import { CardModel } from '../models/index.js';

/**
 * Middleware to save the url cards from the given url to database 
 */
const loadCardsFromExternal = async (req, res, next) => {
    try {
        const cards = await CardModel.find().exec();
        if ( !Boolean(cards.length) ) {
            const fetch = await axios('https://svquizz.s3.eu-central-1.amazonaws.com/cards.json');
            await CardModel.insertMany(fetch.data);
        }
        next();
    } catch (error) {
        res.status(500).send('Unexpected error received in middleware.');
        console.log(error);
    }
}

export default loadCardsFromExternal;
