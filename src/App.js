import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single';
import Write from "./pages/write/Write";
import Settings from './pages/settings/Settings';
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './context/Context'
import { Spin } from 'antd';
import './components/header/header.css'
function App() {
  const {user} = useContext(Context);
  return (
    <>
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
    <div className="example">
    haha
    <Spin />
  </div>  
</>
  );
}
export default App;
{/* <Switch>
        <Route exact path={`${REACT_APP_API_URL}/`}>
          <Home />
        </Route>
        <Route path={`${REACT_APP_API_URL}/register`}>
          {user ? <Home /> : <Register />}
        </Route>
        <Route path={`${REACT_APP_API_URL}/login`}>
        {user ? <Home /> : <Login />}
        </Route>
        <Route path={`${REACT_APP_API_URL}/write`}>
        {user ? <Write /> : <Register />}
        </Route>
        <Route path={`${REACT_APP_API_URL}/settings`}>
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path={`${REACT_APP_API_URL}/post/:postId`}>
          <Single />
        </Route>
      </Switch> */}