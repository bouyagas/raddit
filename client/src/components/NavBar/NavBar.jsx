import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, withStyles } from 'material-ui';
import CreateIcon from 'material-ui-icons/Create';
import './NavBar.css';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class NavBar extends Component {
  static propTypes = {
    authenticated: PropTypes.bool,
  };

  logo() {
    const { classes } = this.props;
    if (this.props.authenticated) {
      return (
        <Button
          color="inherit"
          className={classes.flex}
          component={Link}
          to="/posts"
        >
          Raddit
        </Button>
      );
    } else {
      return (
        <Button
          color="inherit"
          className={classes.flex}
          component={Link}
          to="/"
        >
          Raddit
        </Button>
      );
    }
  }
  renderLinks() {
    const { classes } = this.props;
    if (this.props.authenticated) {
      return [
        <div key="0">
          <Button
            component={Link}
            to="/posts/new"
            variant="fab"
            color="secondary"
            aria-label="create"
            className={classes.button}
          >
            <CreateIcon />
          </Button>
        </div>,
        <div key="1">
          <Button color="inherit" component={Link} to="/signout">
            Sign Out
          </Button>
        </div>,
      ];
    } else {
      return [
        <div key="0">
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </div>,
        <div key="1">
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </div>,
        <div key="2">
          <Button color="inherit" component={Link} to="/jobs">
            Jobs
          </Button>
        </div>,
        <div key="3">
          <Button color="inherit" component={Link} to="/status
          ">
            Status
          </Button>
        </div>,
      ];
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography color="inherit" type="title" className={classes.flex}>
              {this.logo()}
            </Typography>
            {this.renderLinks()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default withStyles(styles)(connect(mapStateToProps, null)(NavBar));
