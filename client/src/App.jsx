import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import "bootswatch/dist/quartz/bootstrap.min.css";
import './components/Navbar/style.css';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProfile from './pages/CreateProfile';
import Questionaire from './pages/Questionaire';
import Footer from './components/Footer';
import Login from './pages/Login';
import UserList from './pages/PotentialMatches';
import Header from './components/Header';
import lgLogo from './Duet-Logo-lg.png';
import PhotoQuestion from './pages/Photoquestion';
import Home from './pages/Home/Home';

const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container-fluid">
        <Header />
        <Routes>
        <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/duet'
            element={<Home />}
          />
          <Route
            path='/createprofile'
            element={<CreateProfile />}
          />
          <Route
            path='/quest'
            element={<Questionaire />}
          />
          <Route
            path='/photo'
            element={<PhotoQuestion />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/feed'
            element={<UserList />}
          />
          <Route
            path='*'
            element={(<div>
            <h1 className='display-2'>Wrong page!</h1>
            <img src ={lgLogo} alt='Duet Logo'/>
            </div>
            )}
          />
        </Routes>
        <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
