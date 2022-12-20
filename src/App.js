import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './features/home/Home';
import { Header} from './features/header/Header';
import { Subreddits } from './features/subreddits/Subreddits';
import { CommentsPage } from './features/comments/CommentsPage';

function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/">
          <div className="home-subreddits-container">
            <main>
              <Home />
            </main>
            <aside>
              <Subreddits />
            </aside>
          </div>
        </Route>
        <Route exact path="/comments">
          <CommentsPage />
        </Route>
    </Router>
  );
}

export default App;
