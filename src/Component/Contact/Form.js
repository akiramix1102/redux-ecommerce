import React from 'react';
import { Button, FormGroup, Col } from 'react-bootstrap'
import { Formik, Form, FastField } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField'
import './contact.scss'
function FormControl(props) {
    const initialValues = {
        Name: '',
        Email: '',
        Object: '',
        Message: ''
    };
    const validationSchema=Yup.object().shape({
        Name:Yup.string().required('This field is required.'),
        Email: Yup.string().required('This field is required.'),
        Object:Yup.string().required('This field is required.'),
        Message:Yup.string().required('This field is required.')
    })
    return (

        <>
            <Col lg={6} className="contact__form">
                <h2>Get In Touch </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values=>console.log('submit',values)}
                    
                >
                    {formikProps => {
                        const { values, errors, touched } = formikProps;
                        console.log({ values, errors, touched });

                        return (
                            <Form>
                                <FastField
                                    name="Name"
                                    component={InputField}

                                    placeholder="Your Name"
                                />

                                <FastField
                                    name="Email"
                                    component={InputField}

                                    placeholder="Your Email"
                                />

                                <FastField
                                    name="Object"
                                    component={InputField}

                                    placeholder="Your Object"
                                />

                                <FastField
                                    name="Message"
                                    component={InputField}

                                    placeholder="Your Message"
                                />
                                <FormGroup>
                                    <Button type="submit" color="primary">Send message</Button>
                                </FormGroup>
                            </Form>
                        );
                    }}
                </Formik>
            </Col>
        </>
    );
}

export default FormControl;