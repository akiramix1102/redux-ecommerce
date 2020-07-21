import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Form ,FormLabel} from 'react-bootstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
}

function InputField(props) {
  const {
    field, form,
    type, placeholder, disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>

  <FormLabel>{name} <span style={{color:'red'}}>*</span></FormLabel>
      <Form.Control
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        isInvalid={showError}
      />
      {showError && <p className="error">{errors[name]}</p>}
    </FormGroup>

  );
}

export default InputField; 