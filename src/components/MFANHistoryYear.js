import React from 'react';
import TextTitle from './TextTitle';
import { List, ListItem, Text } from 'react-atlas';

const MFANHistoryYear = (props) => {
  return [
    <div className="container">
      <TextTitle as="h3" content={props.title} list={props.list} p={props.p}/>
      {
        props.list ?
          <List>
            {props.list.map( p => <ListItem><Text as="p" style={{fontSize:"large"}}>{p}</Text></ListItem>)}
          </List>
          :
          null
      }
      {
        props.p ? <Text as="p" style={{fontSize:"large"}}>{props.p}</Text> : null
      }
    </div>,
    <hr/>
  ]
};

export default MFANHistoryYear;
