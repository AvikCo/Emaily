import React, {useState} from 'react';
import SurveyForm from './SurveyForm';
import {reduxForm} from 'redux-form';
import SurveyFormReview from './SurveyFormReview';


const SurveyNew = () =>{
const [showFormReview, setShowFormReview] = useState(false);

 const renderCotent = () => {
     if(showFormReview)
        return <SurveyFormReview onCancle={()=> setShowFormReview(false)} />;

    return <SurveyForm onSurveySubmit={()=> setShowFormReview(true)}/>;
 }

    return (
        <div>
           {renderCotent()}
        </div>
    )
}

export default reduxForm({form: 'surveyForm'})(SurveyNew);