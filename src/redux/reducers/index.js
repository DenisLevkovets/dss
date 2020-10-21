import {combineReducers} from 'redux';
import {game} from './gameReducers'

const rootReducer = combineReducers({
    game
});

export default rootReducer;
