import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EmployeeItem = (props) => (
  <tr>
    <td>
      <Link to={`employee/${props.employee.id}`}>
        {props.employee.id}
      </Link>
    </td>
    <td>{props.employee.name}</td>
    <td>{props.employee.age}</td>
    <td>{props.employee.organization}</td>
    <td>
      <button className='btn btn-danger btn-sm' onClick={props.handleDelete}>
        削除
      </button>
    </td>
  </tr>
);

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EmployeeItem;