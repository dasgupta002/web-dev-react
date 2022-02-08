import React from 'react';
import Article from './components/article';
import User from './components/user';

function App() {
  return (
    <div className = "app">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <main className = "container">
        <Article />
        <User />
      </main>
    </div>
  );
}

export default App;