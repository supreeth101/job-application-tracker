import React from 'react'
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const RejectCardComp = (props) => {
  return(
    <div>
    {
      props.applications.map((item) => (
        <div className = "card text-white bg-danger mb-3" style = {{width:"100%"}}>
          <h4 className = "card-header" >{item.company}</h4>
          <h5 className = "card-title">{item.title}</h5>
          <p className = "card-text">{item.desc}</p>
          <div>
          <button type="button" class="btn btn-warning" key = {item._id} onClick = {props.updateApplicationToInterview.bind(this,item)} style = {{margin: "5px",width: '75%'}}>Undo</button>
          <button type="button" className="btn btn-light" key = {item._id} onClick = {props.deleteApplication.bind(this,item)} style = {{margin: "5px",width: "15%"}}><FontAwesomeIcon icon ={faTrash}/></button>
          </div>
        </div>
    ))}
    </div>
  )
}
export default RejectCardComp
