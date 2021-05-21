// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Projects/>
//     </div>
//   );
// }

// export default App;

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Projects from './components/Pages/Projects';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Projects}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
