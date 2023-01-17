import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';


function App() {

  return (
    <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/'>
                <div className="content">
                  <Home />
                </div>
              </Route>
              <Route exact path = '/create'>
                <div className="content">
                  <CreatePost />
                </div>
              </Route>
              <Route exact path = '/blog/:id'>
                <div className="content">
                  <BlogDetail />
                </div>
              </Route>
              <Route exact path = '*'>
                <div className="content">
                  <NotFound />
                </div>
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
