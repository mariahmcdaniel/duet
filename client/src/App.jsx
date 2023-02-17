import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import "bootswatch/dist/quartz/bootstrap.min.css";
import './components/Navbar/style.css';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProfile from './pages/HandleUser/CreateProfile';
import UserPage from './pages/ProfilePage';
import MyPage from './pages/myProfile';
import DeletedAcctMessage from './components/DeletedAcctMessage';
import MatchPage from './pages/Matches';
import Questionaire from './pages/HandleUser/Questionaire';
import Footer from './components/Footer';
import Login from './pages/HandleUser/Login';
import UserList from './pages/PotentialMatches';
import Header from './components/Header';
import lgLogo from './Duet-Logo-lg.png';
import PhotoQuestion from './pages/PhotoQuestion/index';
import Home from './pages/Home';

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
        <div className="appCont container-fluid">
        <Header />
        <div className='min-vh-100'>
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
              path='/users/:userId'
              element={<UserPage />}
            />
            <Route
              path='/me'
              element={<MyPage />}
            />
            <Route
              path='/matches'
              element={<MatchPage />}
            />
            <Route
              path='/accountDeleted'
              element={<DeletedAcctMessage />}
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
        </div>
        <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
