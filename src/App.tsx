/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Paper>
        <div className="App">
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Launches />} />
              <Route path="launch/:id" element={<Launch />} />
            </Routes>
          </Router>
        </div>
      </Paper>
    </ApolloProvider>
  );
}

export default App;
