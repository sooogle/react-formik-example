import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeStore from "../stores/EmployeeStore"

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { redirect: false };
  }

  async handleSubmit(values) {
    await EmployeeStore.create(values);
    this.setState({ redirect: true });
  }

  render() {
    const initialValues = { id: '', name: '', age: 0, organization: '', isRetired: false };
    return (
      <>
        {this.state.redirect && (<Redirect to={{
          pathname: '/',
          state: {
            flash: {
              level: 'info',
              message: '登録しました',
            }
          }
        }} />)}
        <EmployeeForm initialValues={initialValues} onSubmit={this.handleSubmit} />
      </>
    );
  }

}

export default EmployeeCreate;
