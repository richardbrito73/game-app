import { fetchAllCards } from '../services/index.js';

const listCards = (req, res) => {
    try {
        return fetchAllCards(req, res);
    } catch (error) {
        res.status(500).send({message: '!Ups We have an unexpected error.'});
    }
}

export default listCards;