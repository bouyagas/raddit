import React, { Component } from 'react';
import {
  Paper,
  Divider,
  List,
  ListItem,
  Typography,
  Button,
  withStyles,
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchPost,
  deletePost,
} from '../../../action/actionCreators/postsAcionCreators';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 78,
    paddingBottom: 16,
    marginTop: 45,
    marginLeft: 305,
    width: 750,
    height: '40%',
  }),
  center: {
    textAlign: 'center',
    marginTop: 85,
  },
  text: {
    marginTop: 25,
    wordSpacing: 3,
    lineHeight: 1.8,
  },
  button: {
    top: 3,
    left: 538,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  link: {
    textDecoration: 'none',
  },
  arrow: {
    fontSize: 16,
  },
});

class PostsShow extends React.Component {
  componentDidMount() {
    if (!this.props.post) {
      let { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    let { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/posts');
    });
  }

  render() {
    let { classes, post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Typography className={classes.center} variant="display3">
          My Posts
        </Typography>
        <Paper className={classes.root} elevation={5}>
          <Button
            variant="raised"
            color="primary"
            className={classes.arrow}
            component={Link}
            to={'/posts'}
          >
            <ArrowBackIcon className={classes.rightIcon} />
            Back
          </Button>
          <Button
            onClick={this.onDeleteClick.bind(this)}
            className={classes.button}
            variant="raised"
            color="secondary"
          >
            Delete
            <DeleteIcon className={classes.rightIcon} />
          </Button>
          <Typography className={classes.text}>
            <strong>
              Title: <br />
            </strong>
            {post.title}
          </Typography>
          <Typography className={classes.text}>
            <strong>
              Categories: <br />
            </strong>
            {post.categories}
          </Typography>
          <Typography className={classes.text}>
            <strong>
              Content: <br />
            </strong>
            {post.content}
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default withStyles(styles)(
  connect(mapStateToProps, { fetchPost, deletePost })(PostsShow),
);
