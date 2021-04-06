import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Gallery from './Gallery';
import SectionBgImg from './SectionBgImg';
import Footer from './Footer';
// import { ReactComponent as Logo } from './logo.svg'; // <Logo /> component

// start/create new component with the name App
function App() {
    return (
        <div className="app-container">
            <h1>first React JSX App</h1>
            <Header />
            <Sidebar />
            <Gallery />
            <SectionBgImg />
            <Footer />
        </div>
    )
}

export default App;
