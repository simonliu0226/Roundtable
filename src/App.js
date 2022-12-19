import React from 'react';
import './App.css';
import { Home } from './features/home/Home';
import { Header} from './features/header/Header';
import { Subreddits } from './features/subreddits/Subreddits';

function App() {
  return (
    <>
      <Header />
      <div className="home-subreddits-container">
        <main>
          <Home />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </div>
    </>

  );
}

export default App;
