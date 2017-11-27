import React from 'react';
// import './index.css';
import AppContainer from './containers/AppContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const AppToRender = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>);

 export default AppToRender;   
