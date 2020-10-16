import constants from '../constants';

const initialState = [];


export const counters = (state = initialState, action) => {
    switch (action.type) {
        case constants.counters.GET:
            return action.counters;
        case constants.counters.CONNECT:
            return action.counters;
        case constants.counters.DISCONNECT:
            return action.counters;
        case constants.counters.COUNT:
            return action.counters;
        default:
            return state;
    }
};



