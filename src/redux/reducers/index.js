import {combineReducers} from 'redux';
import {counters} from './counterReducers'

const rootReducer = combineReducers({
    counters
});

export default rootReducer;
