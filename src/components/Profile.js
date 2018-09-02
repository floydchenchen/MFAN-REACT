import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid rounded mb-3 mb-md-0" src={require(`../media/StrategicTeam/${this.props.src}.png`)} alt=""/>
        </div>
        <div className="col-md-9">
          <h3>{this.props.title}</h3>
          <p>{this.props.p}</p>
          <a className="font-italic" href={`mailto:${this.props.email}`}>{this.props.email}</a>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Profile;

