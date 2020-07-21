import React from 'react';
import { Row, Button, FormGroup, Col ,FormLabel} from 'react-bootstrap';
import { Formik, Form, FastField } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField'



function Bill() {
    const initialValues = {
        FName: '',
        LName: '',
        Email: '',
        Phone: '',
        Address: '',
        City: '',
        District: '',
        Commune: ''
    };

    const validationSchema = Yup.object().shape({
        FName: Yup.string().required('This field is required.'),

        LName: Yup.string().required('This field is required.'),

        Email: Yup.string()
            .email('Invalid email format')
            .required('Required'),

        Phone: Yup.string().required('This field is required.'),

        Address: Yup.string().required('This field is required.'),

        City: Yup.string().required('This field is required.'),

        District: Yup.string().required('This field is required.'),

        Commune: Yup.string().required('This field is required.')
    })
    return (
        <Col md={6} className="checkout__bill">
            <h3 className="checkout__bill-heading">BILLING DETAILS</h3>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {formikProps => {
                    const { values, errors, touched } = formikProps;
                    return (
                        <Form>
                            <div className="wrapper-name">
                                <FastField
                                    name="FName"
                                    component={InputField}
                                    label="First Name"
                                />

                                <FastField
                                    name="LName"
                                    component={InputField}
                                />
                            </div>

                            <FastField
                                name="Email"
                                component={InputField}
                            />

                            <FastField
                                name="Phone"
                                component={InputField}
                            />

                            <FastField
                                name="Address"
                                component={InputField}
                            />

                            <FastField
                                name="City"
                                component={InputField}
                            />

                            <FastField
                                name="District"
                                component={InputField}
                            />

                            <FastField
                                name="Commune"
                                component={InputField}
                            />

                            <FormGroup>
                                <label htmlFor="textare">Order Notes</label>
                            <textarea name="" id="textare" cols="100%" rows="5"></textarea>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" color="primary">Send message</Button>
                            </FormGroup>
                        </Form>
                    )
                }}

            </Formik>
        </Col>
    );
}

export default Bill;