#!/bin/bash
# @author Jason Seminara for General Assembly, 2016
# @desc Deployment should be as slim as possible, and with any identifying remarks or traces removed (i.e., we don't need to tell anyone how we built our app when it's deployed ;).

rm -rf client/src bin/scripts  webpack.config.babel.js .babelrc .gitignore README.md
