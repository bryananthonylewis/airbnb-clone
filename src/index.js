import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './components/hello';
import registerServiceWorker from './registerServiceWorker';



// const root = <div>
//   <Hello firstName="Bryan" lastName="Lewis" />
//   <Hello firstName="Nate" lastName="Lewis" />
// </div>;



// ReactDOM.render(root, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
