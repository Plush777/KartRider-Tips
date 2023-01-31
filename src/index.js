import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import RouteScroll from './Routes/RouteScroll'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

if(container.hasChildNodes()){
    ReactDOM.hydrateRoot(
        container,
        <React.StrictMode>
            <BrowserRouter>
                <HelmetProvider>
                    <RouteScroll/>
                    <App/>
                </HelmetProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <BrowserRouter>
                    <RouteScroll/>
                    <App/>
                </BrowserRouter>
            </HelmetProvider>
        </React.StrictMode>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
