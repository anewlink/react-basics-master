import React from 'react';
import logo from './logo.svg';
import './App.css';

      // React.createElement(type,[props], [...children])
  // const button = React.createElement('button',{type: 'button'}, 'Save');
  const button = <button type='button'>Save</button>;
  /* const articleHeading = React.createElement('h2', null, 'My first blog post');
  const paragraph = React.createElement('p', {className: 'text'}, 'This is the content of my post');
  const article = React.createElement('article', null, articleHeading, paragraph);
  const mainHeading = React.createElement('h1', null, 'My Blog');
  const main = React.createElement('main', {id: 'main'}, mainHeading, article);*/
function App() {
  const main = <main id="main">
    <h1>'My Blog'</h1>
    <article>
      <h2>My first blog post</h2>
      <p className="text">This is the content of my post</p>
    </article>
  </main>;
  return (
    //button
    main
  );
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
