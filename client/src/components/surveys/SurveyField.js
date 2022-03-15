import React from 'react';

const SurveyField =({input, lable, meta})=> {
return (
    <div>
        <lable>{lable}</lable>
        <input style={{marginBottom: "2px"}} {...input}/>
        <div className="red-text" style={{marginBottom: "18px"}}>
            {meta.touched && meta.error}
        </div>
    </div>
)
}

export default SurveyField;