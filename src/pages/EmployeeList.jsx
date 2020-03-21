import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../stores/EmployeeStore';
import EmployeeItem from '../components/EmployeeItem';
import Overlay from '../components/Overlay';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      loading: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const list = await EmployeeService.findList();
    this.setState({
      employeeList: list,
      loading: false,
    });
  }

  async handleDelete(id) {
    this.setState({ loading: true });
    await EmployeeService.delete(id);
    this.setState({
      employeeList: this.state.employeeList.filter(emp => emp.id !== id),
      loading: false,
    });
  }

  render() {
    return (
      <>
        <Overlay show={this.state.loading} />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>従業員コード</th>
              <th>氏名</th>
              <th>年齢</th>
              <th>組織</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map(employee => (
              <EmployeeItem
                key={employee.id}
                employee={employee}
                onDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>
        <Link to='/employee/new' className='btn btn-primary'>
          新規登録
        </Link>
      </>
    );
  }
}

export default EmployeeList;