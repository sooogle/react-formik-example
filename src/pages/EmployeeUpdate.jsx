import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <Overlay show={this.state.loading} />
        <EmployeeForm initialValues={this.state.employee} onSubmit={this.handleSubmit} />
      </>
    );
  }

}

export default withRouter(EmployeeUpdate);
