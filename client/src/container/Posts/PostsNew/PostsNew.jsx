import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField, Paper, Typography, Button, withStyles } from 'material-ui';
import { Send, Cancel } from 'material-ui-icons';
import { createPost } from '../../../action/actionCreators/postsAcionCreators';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 175,
    marginLeft: 400,
    width: 600,
  }),
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    margin: theme.spacing.unit,
    width: 500,
  },
  flex: {
    flex: 1,
    textAlign: 'center',
  },
  sendButton: {
    marginTop: -43,
    marginLeft: 122,
    paddingLeft: 10,
    paddingTop: 11,
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 20,
    marginLeft: 382,
    padding: 10,
    fontSize: 16,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class PostsNew extends React.Component {
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/posts');
    });
  }

  renderTextField({ input, meta: { touched, error }, ...custom }) {
    return (
      <div>
        <TextField {...input} {...custom} />
        <p
          style={{
            color: 'red',
          }}
        >
          {touched ? error : ''}
        </p>
      </div>
    );
  }

  render() {
    let { classes, handleSubmit } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography
            className={classes.flex}
            variant="display1"
            color="inherit"
          >
            Add New Posts
          </Typography>
          <form className={classes.container}>
            <Field
              name="title"
              component={this.renderTextField}
              label="Title"
              className={classes.textField}
            />
            <Field
              name="categories"
              component={this.renderTextField}
              label="Categories"
              className={classes.textField}
            />
            <Field
              name="content"
              component={this.renderTextField}
              label="Content"
              multiline={true}
              rows={3}
              className={classes.textField}
            />
            <Button
              component={Link}
              to={'/posts'}
              className={classes.cancelButton}
              variant="raised"
              color="secondary"
            >
              Cancel
              <Cancel className={classes.rightIcon} />
            </Button>
            <Button
              onClick={handleSubmit(this.onSubmit.bind(this))}
              className={classes.sendButton}
              variant="raised"
              color="primary"
            >
              Submit
              <Send className={classes.rightIcon} />
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const validate = values => {
  let errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content please!';
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(withStyles(styles)(connect(null, { createPost })(PostsNew)));
