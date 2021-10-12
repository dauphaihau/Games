import {combineReducers, createStore} from "redux";
import {GameXucXacReducer} from "./reducers/GameXucXacReducer";
import GameOanTuTiReducer from "./reducers/GameOanTuTiReducer";

const rootReducer = combineReducers({
    GameOanTuTiReducer,
    GameXucXacReducer
})

export const store = createStore(rootReducer)