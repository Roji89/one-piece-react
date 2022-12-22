import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './apps/pages/Home';
import { Provider } from 'react-redux';
import store from './apps/features';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
