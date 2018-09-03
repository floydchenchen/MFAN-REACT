import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Text } from 'react-atlas';

const CustomVerticalTimelineElement = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      iconStyle={{ background:props.bg}}
      icon={props.icon}
    >
      <Text as="h3" className="vertical-timeline-element-title">{props.time}</Text>
      { props.list ?
        <ul>
          {props.list.map(li => <li>{li}</li>)}
        </ul>
        :
        null
      }
      { props.p ? <p>{props.p}</p> : null}
    </VerticalTimelineElement>
  )
};

export default CustomVerticalTimelineElement;