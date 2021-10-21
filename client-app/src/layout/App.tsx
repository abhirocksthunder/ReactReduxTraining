import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import Dashboard from '../features/Products/Dashboard';
import NewReleases from '../features/Movies/NewReleases';
import { Route } from 'react-router-dom';
import Home from '../features/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: '3.5em' }}>

        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Dashboard} />
        <Route exact path='/movies' component={NewReleases} />
      </Container>
    </div>

  );
}

export default App;
