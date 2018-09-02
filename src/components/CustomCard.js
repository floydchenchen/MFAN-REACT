import React from 'react';
import { Card, Button } from 'react-atlas';
import Grid from '@material-ui/core/Grid';

const CustomCard = (props) => {
  return (
    <Grid item xs={10} sm={10}>
      <Card title={props.title} style={{border:"None"}} image={props.image}>
        <p>{props.p}</p>
        {props.button? <Button primary href={props.href}>{props.button}</Button> : null}
      </Card>
    </Grid>
  )
};

export default CustomCard;