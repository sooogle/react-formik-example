import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm"
import EmployeeStore from "../stores/EmployeeStore";
import Overlay from '../components/Overlay';

class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      employee: { id: '', name: '', age: 0, organization: '', isRetired: false },
      loading: true,
      redirect: false,
    };
  }

  async componentDidMount() {
    const employee = await EmployeeStore.find(this.props.match.params.id);
    this.setState({
      employee: employee,
      loading: false
    })
  }

  async handleSubmit(values) {
    await EmployeeStore.update(values);
    this.setState({ redirect: true });
  }

  render() {
    return (
      <>
        {this.state.redirect && (<Redirect to={{
          pathname: '/',
          state: {
            flash: {
              level: 'info',
              message: '更新しました',
            }
          }
        }} />)}
        <Overlay show={this.state.loading} />
        <EmployeeForm initialValues={this.state.employee} onSubmit={this.handleSubmit} />
      </>
    );
  }

}

export default EmployeeUpdate;
