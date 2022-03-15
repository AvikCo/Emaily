import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = (props) =>{


    const renderFields = () =>{
        return (
            formFields.map(({lable, name}) => <Field key={name} type="text" component={SurveyField} lable={lable} name={name}/>)  
        );
    } 


    return (
        <div>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
               {renderFields()}
               <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit" className="teal btn-flat right white-text">Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    )

    
}

const validate = (values) => {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    formFields.forEach(({ name })=>{
        if(!values[name]) errors[name] = 'You must provide value';
    })
    
    return errors;
}
export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);