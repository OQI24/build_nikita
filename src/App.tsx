import React from 'react';
// @ts-ignore
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import MainPage from "./containers/MainPage";
import Header from "./containers/Header";
import Contacts from "./containers/ContactPage";
import Objects from "./containers/Objects";

const style = require('./App.css');

function App() {
    return (
            <div className={'App'}>
                <Header/>
                <div className={"app-wrapper"}>
                    <Route path='/mainpage' component={MainPage}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/objects' component={Objects}/>
                </div>
                <footer className={'Footer'}>
                    <span className={"signature"}>by Sukhachev</span>
                </footer>
            </div>
    );
}

export default App;
