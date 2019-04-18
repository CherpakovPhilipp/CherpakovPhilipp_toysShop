import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

import './styles/general.scss';

const rootComp = (
    <>
        <Header />
        <Main />
        <Footer />
    </>
);

ReactDOM.render(rootComp, document.getElementById('app'));


