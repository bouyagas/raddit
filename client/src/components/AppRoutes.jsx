import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';
import RequireAuth from '../container/Auth/RequireAuth';
import SignUp from '../container/Auth/SignUp/SignUp';
import SignIn from '../container/Auth/SignIn/SignIn';
import SignOut from '../container/Auth/SignOut/SignOut';
import Main from '../components/Main/Main';
import PostsNew from '../container/Posts/PostsNew/PostsNew';
import PostShow from '../container/Posts/PostsShow/PostsShow';
import PostsIndex from '../container/Posts/PostsIndex/PostsIndex';

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/posts/new" component={RequireAuth(PostsNew)} />
        <Route path="/posts/:id" component={RequireAuth(PostShow)} />
        <Route path="/posts" component={RequireAuth(PostsIndex)} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
