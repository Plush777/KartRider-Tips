import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

if(container.hasChildNodes()){
    ReactDOM.hydrateRoot(
        container,
        <Provider store={store}>
            <BrowserRouter>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </BrowserRouter>
        </Provider>
    );
} else {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </Provider>
        </BrowserRouter>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
