//import logo from "./assets/images/stumpMe.png";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to Stump Me</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
//import { setContext } from "@apollo/client/link/context";

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
// import SingleThought from "./pages/SingleThought";
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Riddle from './pages/Riddle';
import '../src/assets/App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to Stump Me</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav></Nav>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/thought/:id" element={<SingleThought />} /> */}
              <Route path="/newGame" element={<Riddle />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
