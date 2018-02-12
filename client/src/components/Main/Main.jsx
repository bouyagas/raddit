import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Button, Typography } from 'material-ui';

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: 234,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Main = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display3">Welcome to the Raddit</Typography>
      <Button
        component={Link}
        to="/signup"
        variant="raised"
        color="primary"
        className={classes.button}
      >
        Create Your Blog
      </Button>
    </div>
  );
};

export default withStyles(styles)(Main);
