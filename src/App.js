import React from 'react';
import logo from './logo.svg';
import './App.css';

      // React.createElement(type,[props], [...children])
  // const button = React.createElement('button',{type: 'button'}, 'Save');
  // const button = <button type='button'>Save</button>;
  /*const paragraph = React.createElement('p', {className: 'text'}, 'This is the content of my post');
  const article = React.createElement('article', null, articleHeading, paragraph);
  const mainHeading = React.createElement('h1', null, 'My Blog');
  const main = React.createElement('main', {id: 'main'}, mainHeading, article);*/
  // const articleHeading = React.createElement('h2', null, 'My first blog post');
  const articleHeading = 'My first blog post';
  const paragraphClass = 'text'
function App() {
  let x = 3;
  let y = 4;

  const main = <main id="main">
    <h1>'My Blog'</h1>
    <article>
      <h2>{articleHeading}</h2>
      <p className={paragraphClass}>{x * y}</p>
      <input maxLength="10" readOnly/>
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
