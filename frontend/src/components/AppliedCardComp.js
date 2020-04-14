import React from 'react'
import App from '../App';
import '../style.css'

const AppliedCardComp = (props) => {
  return(
    <div>
        {
          props.applications.map((item) => (

          <div className = "card bg-light mb-3" style = {{width:"100%"}}>
            <h4 className = "card-header">{item.company}</h4>
            <h5 className = "card-title">{item.title}</h5>
            <p className = "card-text">{item.desc}</p>
            <div>
              <button type="button" className="btn btn-secondary" key = {item._id} onClick = {props.updateApplicationToInterview.bind(this,item)} style = {{margin: "5px", width: "30%"}}>Interview</button>
              <button type="button" className="btn btn-success" key = {item._id} onClick = {props.updateApplicationToOffer.bind(this,item)} style = {{margin: "5px", width: "30%"}}>Offer</button>
              <button type="button" className="btn btn-danger" key = {item._id} onClick = {props.updateApplicationToReject.bind(this,item)} style = {{margin: "5px", width: "30%"}}>Reject</button>
            </div>
          </div>
        ))}
      </div>
  );
}


export default AppliedCardComp