import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">Camera 1</Button>
      <Button variant="contained" color="primary">
      Camera 2
      </Button>
      <Button variant="contained" color="primary">
      Camera 3
      </Button>
      <Button variant="contained" color="primary">
      Camera 4
      </Button>
      <Button variant="contained" color="primary" 
    //   href="#contained-buttons"
      >
      Camera 5
      </Button>
      <Button variant="contained" color="primary">
      Camera 6
      </Button>
      <Button variant="contained" color="primary">
      Camera 7
      </Button>

    </div>
  );
}