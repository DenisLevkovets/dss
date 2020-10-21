import constants from '../constants';
import utils from './utils';
import axios from 'axios'

const {success, failure} = utils;

const amounts = [1000,1000,1000,1000];
const newAmounts = [900,1000,1000,900];

const cards = [{suit: "1", value: "Q"}, {suit: "2", value: "2"}, {suit: "3", value: "T"}, {
    suit: "3",
    value: "Q"
}, {suit: "4", value: "K"}]


const newCards = [{suit: "1", value: "2"}, {suit: "2", value: "2"}, {suit: "3", value: "T"}, {
    suit: "3",
    value: "2"
}, {suit: "4", value: "2"}]

let bets = [0,200,200,200]

const api_url = "http://localhost:8000"

function getCards() {
    return (dispatch) => {
        axios.get(api_url + '/getCards').then(res => {
            dispatch(success(constants.game.GET_CARDS, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.GET_CARDS, err));
        })
    }
}

function getAmounts() {
    return (dispatch) => {
        axios.get(api_url + '/getAmounts').then(res => {
            dispatch(success(constants.game.GET_AMOUNTS, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.GET_AMOUNTS, err));
        })
    }
}

function updateAmount(amount) {
    return (dispatch) => {

        axios.get(api_url + '/updateAmount', {
            params: {
                amount: amount
            }
        }).then(res => {
            dispatch(success(constants.game.UPDATE_AMOUNT, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.UPDATE_AMOUNT, err));
        })
    }
}

function changeCards(cards) {
    const body = {
        cards: cards
    }
    return (dispatch) => {
        axios.post(api_url + '/changeCards', body).then(res => {
            dispatch(success(constants.game.CHANGE_CARDS, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.CHANGE_CARDS, err));
        })
    }
}

function getBets() {

    return (dispatch) => {
        axios.get(api_url + '/getBets').then(res => {
            dispatch(success(constants.game.GET_BETS, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.GET_BETS, err));
        })
    }
}

function getIsTurn() {
    return (dispatch) => {
        axios.get(api_url + '/getIsTurn').then(res => {
            dispatch(success(constants.game.GET_IS_TURN, res.data));
        }).catch(err => {
            dispatch(failure(constants.game.GET_IS_TURN, err));
        })
    }
}

export default {
    getCards,
    getAmounts,
    updateAmount,
    changeCards,
    getBets,
    getIsTurn
}
