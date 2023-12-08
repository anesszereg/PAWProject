// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddStudent from './Components/Form/AddStudent';
import ListStudents from './Components/List/ListStudent';
import SearchStudent from './Components/Search/SearchStudent';
import Login from './pages/Login/Login';


const App = () => {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add Student</Link>
            </li>
            <li>
              <Link to="/list">List Students</Link>
            </li>
            <li>
              <Link to="/search">Search Students</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/add" component={AddStudent} />
        <Route path="/list" component={ListStudents} />
        <Route path="/search" component={SearchStudent} />
      </div> */}
      <Login/>
    </Router>
  );
};

export default App;
