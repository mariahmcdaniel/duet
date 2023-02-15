import { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client' 
import "bootswatch/dist/quartz/bootstrap.min.css";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileForm from './pages/CreateProfile'

const httpLink = createHttpLink({uri: '/graphql'});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${ token }` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client = {client}>
      <Router>
    <Routes>
    <>
        {/* <Navbar /> */}
        
          <Route
            path='/duet'
            element={<ProfileForm />}
          />
          {/* <Route
            path='/saved'
            element={<SavedBooks />}
          />
          <Route
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          /> */}
        
      </>
    </Routes>
    </Router>
    </ApolloProvider>
  )
}

export default App
