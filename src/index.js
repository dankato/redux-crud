import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Route} from 'react-router-dom';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
<Route>
    <Provider store={store}>
        <App />
    </Provider>
</Route>, 
document.getElementById('root'));
registerServiceWorker();
