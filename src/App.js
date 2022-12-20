import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Home } from './features/home/Home';
import { Header} from './features/header/Header';
import { Subreddits } from './features/subreddits/Subreddits';
import { CommentsPage } from './features/comments/CommentsPage';
import { SearchResults } from './features/search/searchResults/SearchResults';

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
        <Route exact path="/searchResults">
          <SearchResults />
        </Route>
    </Router>
  );
}

export default App;
