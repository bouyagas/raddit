// To connect to our database server(mongodb)
import mongoose from 'mongoose';

const dbconfig = () => {
  const mongodb = mongoose.connect('mongodb://localhost:blogs/blogs');
  return mongodb;
};

export default dbconfig;
