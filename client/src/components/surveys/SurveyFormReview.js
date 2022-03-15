import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions'; 
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancle, formValues, submitSurvey, history }) => {

    const renderFields =  formFields.map(({lable, name}) => 
           { return (
              <div key={lable}>
                <lable>{lable}</lable>
                <div>{formValues[name]}</div>
              </div>
            );
    });
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {renderFields}
            <div style={{'paddingTop': '10px'}}>
                <button className="yellow darken-3 white-text btn-flat" onClick={onCancle}>Back</button>
                <button className="green btn-flat white-text right" onClick={()=> submitSurvey(formValues, history)}>Send Survey
                <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    );
};
function mapStateToProps(state){
    console.log(state);
    return { formValues: state.form.surveyForm.values};
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));