import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import { Common } from './styles/Global/Common';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <QueryClientProvider client={queryClient}>

    <RecoilRoot >
      <BrowserRouter>
        <Global styles={Common} />
        <Reset />
        <App />
      </BrowserRouter>
    </RecoilRoot>

  </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
