import React from 'react';
import { Text } from 'react-atlas';

const TextTitle = (props) => {
  return (
    <Text as={props.as} style={{textAlign: "center"}} >{props.content}</Text>
  )
};

export default TextTitle;
