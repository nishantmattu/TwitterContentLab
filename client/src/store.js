import {createStore, combineReducers, applyMiddleware} from "redux";
//import logger from "redux-logger";
import thunk from "redux-thunk";
//import promise from "redux-promise-middleware";

import tweetReducers from "./reducers/tweetReducers";
import tempReducers from "./reducers/tempReducers";

export default createStore(
    combineReducers({
        tweetReducers,
        tempReducers
    }),
    {},
    applyMiddleware(thunk)
);