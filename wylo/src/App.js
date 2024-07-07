import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';
import RegisterForm from './components/RegisterForms';
import LoginForm from './components/LoginForm';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Provider store={store}>
      <h1>Wylo</h1>
      
      <Router>
        <div className="container">
          
          <Switch>
            <Route path="/" exact component={RegisterForm} /> {/* Updated component */}
            <Route path="/login" component={LoginForm} />
            <Route path="/dashboard">
              <div>
                <CreatePost />
                <PostsDisplay />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
