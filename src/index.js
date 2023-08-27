import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Preview, Editor } from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';

const store = configureStore({ reducer: appReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Editor />
    <Preview />
  </Provider>
);
