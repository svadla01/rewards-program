import rootReducer from './reducer/index'
import {createStore} from "redux";


export default function store() {

    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
