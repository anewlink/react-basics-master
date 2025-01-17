import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const articleHeading = 'My first blog post';
const paragraphClass = 'text'
let count = 0;
const interval = setInterval(() => {
    const main = <main id="main">
        <h1>'My Blog'</h1>
        <article>
            <h2>{articleHeading}</h2>
            <p className={paragraphClass}>{count}</p>
            <input maxLength="10" readOnly />
        </article>
    </main>;
    ReactDOM.render(main, document.getElementById('root'));
    if (count === 100) {
        clearInterval(interval)
    } else {
        count++;
    }
}, 30);







// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
