// packages
import './App.css';
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux'
// components
import Menu from './Router/nav';
import Router from './Router/Router';
import HomePage from './components/homepage';

function App() {
  return (

    <>
      <div className="App">
          <h1>xxxxxxxxxxxxxxxxxxxxxx in the full updated michal branch</h1>
          <h3>vvvvvvvvvvvvvvvvvvvvvv</h3>
        <Provider store={store}>
          <h1>I just want to check the git hub!!!</h1>
          <h1>So Strange...</h1>
          <BrowserRouter>
            <Menu></Menu>
            <Router></Router>
          </BrowserRouter>
          {/* <HomePage></HomePage> */}
        </Provider>
      </div>
    </>
  )
}

export default App;

