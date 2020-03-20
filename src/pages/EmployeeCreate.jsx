import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeStore from "../stores/EmployeeStore"

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(values) {
    await EmployeeStore.create(values);
    this.props.history.push("/");
  }

  render() {
    const initialValues = { id: '', name: '', age: 0, organization: '', isRetired: false };
    return (
      <EmployeeForm initialValues={initialValues} onSubmit={this.handleSubmit} />
    );
  }

}

export default withRouter(EmployeeCreate);
