import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// #region pages
import Users from "./pages/user/Users";
import Todos from "./pages/todo/Todos";
import Albums from "./pages/album/Albums";
// #endregion pages

function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                <Route path="/users">
                    <Users></Users>
                </Route>
                <Route path="/todos">
                    <Todos></Todos>
                </Route>
                <Route path="/albums">
                    <Albums></Albums>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
