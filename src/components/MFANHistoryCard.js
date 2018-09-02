import React from 'react';
import { Button } from 'react-atlas';

const MFANHistoryCard = (props) => {

  return [
    <div className="row">
      <div className="col-md-3" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <img className="img-fluid rounded mb-3 mb-md-0" src={require(`../media/history/${props.src}.png`)} alt=""/>
      </div>
      <div className="col-md-9" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        <Button primary href={props.href}>{props.button}</Button>
      </div>
    </div>,
    <hr/>
  ]
};

export default MFANHistoryCard;
