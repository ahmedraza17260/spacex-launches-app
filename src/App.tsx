import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="launch/:id" element={<Launch />} />
          </Routes>
        </Router>
      </div>
      <div className="copyRight" >
        <h4 style={{ color: "black" }}> Powered by Ahmed Raza </h4>
        <a style={{ color: "black" }} href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
          {" "}
          <h3 style={{ color: "black" }}> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
        </a>
        <h3 style={{ color: "black" }}> All Right Reserved </h3>
      </div>
    </ApolloProvider>
  );
}

export default App;
