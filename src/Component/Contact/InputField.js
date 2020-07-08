import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, FormLabel, Form } from 'react-bootstrap';
import { ErrorMessage } from 'formik'

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
  console.log(showError);
  
  return (
    <FormGroup>

      <Form.Control
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
        isInvalid={showError}
      />
      {showError&& <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>}
    </FormGroup>
  );
}

export default InputField; 