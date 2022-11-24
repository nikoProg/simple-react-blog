//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //write variables before the return template!
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          {/* <Home></Home> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <p>Liked { likes * Math.random() } times</p>
        
          {/* <p>{ person }</p> */}

          {/* <p>{ 10 }</p>
          <p>{ "hello, ninjas" }</p>
          <p>{ [1,2,3,4,5]}</p>

          <a href={link}>Google Site</a> 
          <p>{ Math.random() * 10 }</p>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;
