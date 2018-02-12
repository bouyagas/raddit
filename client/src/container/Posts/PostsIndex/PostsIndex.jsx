import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Paper,
  Divider,
  List,
  ListItem,
  Typography,
  withStyles,
} from 'material-ui';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../../action/actionCreators/postsAcionCreators';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 45,
    marginLeft: 470,
    width: '30%',
    minWidth: 300,
  }),
  center: {
    textAlign: 'center',
    marginTop: 85,
  },
  text: {
    wordSpacing: 3,
    lineHeight: 1.8,
    textDecoration: 'none',
  },
  show: {
    textDecoration: 'none',
  },
});

class PostsIndex extends React.Component {
  componentDidMount() {
    if (this.props.posts) {
      this.props.fetchPosts();
    }
  }

  renderPosts() {
    let { classes } = this.props;

    return _.map(this.props.posts, post => {
      return (
        <div key={post.id}>
          <Link className={classes.show} to={`/posts/${post.id}`}>
            <Paper className={classes.root} elevation={3}>
              <ListItem>
                <Typography className={classes.text}>
                  <strong>
                    Title: <br />
                  </strong>
                  {post.title}
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography className={classes.text}>
                  <strong>
                    Categories: <br />
                  </strong>
                  {post.categories}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.text}>
                  <strong>
                    Content: <br />
                  </strong>
                  {post.content}
                </Typography>
              </ListItem>
            </Paper>
          </Link>
        </div>
      );
    });
  }

  render() {
    let { classes } = this.props;

    if (!this.props.posts) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Typography className={classes.center} variant="display3">
          My Posts
        </Typography>
        <List>{this.renderPosts()}</List>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default withStyles(styles)(
  connect(mapStateToProps, { fetchPosts })(PostsIndex),
);
