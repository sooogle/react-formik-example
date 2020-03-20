import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./pages/EmployeeList";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeUpdate from "./pages/EmployeeUpdate";

function App() {
  return (
    <Router>
      <h3 className="mb-3">従業員マスターメンテナンス</h3>
      <Route path="/" exact={true} component={EmployeeList} />
      <Route path="/employee/new" component={EmployeeCreate} />
      <Route path="/employee/:id(E\d+)" component={EmployeeUpdate} />
    </Router>
  );
}

export default App;
