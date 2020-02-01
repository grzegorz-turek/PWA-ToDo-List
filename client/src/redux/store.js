import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import list from './listRedux';// import reducers
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    list
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;