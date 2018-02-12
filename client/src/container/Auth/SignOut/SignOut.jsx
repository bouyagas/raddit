import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, Typography, Button, withStyles } from 'material-ui';
import { ArrowBack } from 'material-ui-icons';
import { signoutUser } from '../../../action/actionCreators/authActionCreators';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 115,
    marginLeft: 235,
    width: 900,
    height: 100,
  }),

  flex: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 45,
  },
  sendButton: {
    marginTop: 0,
    marginLeft: 393,
    marginBottom: 23,
    paddingLeft: 10,
    paddingTop: 11,
    fontSize: 16,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={6}>
        <Typography className={classes.flex} type="display1">
          Sorry to see you go...
        </Typography>
        <Button
          className={classes.sendButton}
          variant="raised"
          color="primary"
          component={Link}
          to="/signin"
        >
          <ArrowBack className={classes.rightIcon} />
          Go Back
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(connect(null, { signoutUser })(Signout));
