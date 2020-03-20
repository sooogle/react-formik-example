import * as React from 'react';
import { Formik, Form } from 'formik';
import { Input, Select, Checkbox } from '../lib/form-helper';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const EmployeeForm = (props) => (
  <Formik
    initialValues={props.initialValues} // フォームに埋める初期値
    enableReinitialize // このオプションがないとinitialValuesが変わった時に再レンダリングされない
    onSubmit={values => props.onSubmit(values)} // サブミット時のコールバック
    validationSchema={Yup.object({
      id: Yup.string().required().label('従業員コード'),
      name: Yup.string().required().label('氏名'),
      age: Yup.number().required().label('年齢'),
      organization: Yup.string().required().label('組織'),
    })} // バリデーションはYupというライブラリを利用
  >
    {/* Formikコンポーネントのchildrenとしてフォームを定義 */}
    <Form>
      <Input label='従業員コード' name='id' type='text' />
      <Input label='氏名' name='name' type='text' />
      <Input label='年齢' name='age' type='number' />
      <Select label='組織' name='organization'>
        <option value=''></option>
        <option value='営業'>営業</option>
        <option value='人事'>人事</option>
        <option value='経理'>経理</option>
      </Select>
      <Checkbox label='退職済み' name='isRetired' id='isRetired' />
      <button type='submit' className='btn btn-primary'>保存</button>
    </Form>
  </Formik>
);

EmployeeForm.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    organization: PropTypes.string.isRequired,
    isRetired: PropTypes.bool.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EmployeeForm;
