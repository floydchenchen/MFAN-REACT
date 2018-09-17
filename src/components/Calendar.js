import React, { Component } from "react";
import { Button, Modal, Text } from "react-atlas";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import request from 'superagent';

const URL_CONFIG = process.env.URL;

moment.locale("en");
BigCalendar.momentLocalizer(moment);

// use this function to parse the date if input events object manually from things like ... new Date(2018, 9, 1);
const correctDateParser = (year, month, day) => {
  return new Date(year, month - 1, day)
};

const Event = ({ event }) => {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
};

const EventAgenda = ({ event }) => {
  return (
    <span>
      <em style={{ color: '#00a7e1' }}>{event.title}</em>
      <p>{event.desc && event.desc}</p>
      <p>{event.location && event.location}</p>
    </span>
  )
};

const getEvents = (callback) => {
  request
    .get(URL_CONFIG)
    .end((err, resp) => {
      if (!err) {
        const events = [];
        JSON.parse(resp.text).items.map(event => {
          let sTime = event.start.date || event.start.dateTime;
          let eTime = event.end.date || event.end.dateTime;

          let csTime = moment(sTime).toDate();
          let ceTime = moment(eTime).toDate();

          return events.push({
            start: csTime,
            end: ceTime,
            title: event.summary,
            desc: event.description,
            location: event.location,
          });
        });
        callback(events);
      }
    })
};

class Calendar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      events: [],
      active: false,
      title: "",
      desc: "",
      location: ""
    }
  }

  handleToggle = (event) => {
    if (event) {
      this.setState({
        active: !this.state.active,
        title: event.title,
        desc: event.desc,
        location: event.location
      })
    } else {
      this.setState({
        active: !this.state.active,
        title: "",
        desc: "",
        location: ""
      })
    }
  };

  componentDidMount() {
    getEvents(events => {
      this.setState({ events })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container" style={{marginBottom:"10px", width: "100%", height:"700px"}}>
          <BigCalendar
            events={this.state.events}
            views={["month", "week", "day", "agenda"]}
            step={60}
            showMultiDayTimes
            defaultView={BigCalendar.Views.AGENDA}
            defaultDate={new Date()}
            components={{
              event: Event,
              agenda: {
                event: EventAgenda,
              },
            }}
            onSelectEvent={event => this.handleToggle(event)}
          />
          <Modal
            overlay
            active={this.state.active}
            onOverlayClick={() => this.handleToggle()}
            onEscKeyDown={() => this.handleToggle()}
            title={this.state.title}
          >
            <div style={{'marginBottom':'20px'}}>
              <Text>{this.state.desc}<br/>{this.state.location}</Text>
            </div>
            <Button raised primary onClick={this.handleToggle}>Close!</Button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Calendar;