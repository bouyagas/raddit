import chalk from 'chalk';
import open from 'open';
import print from './libs/utils';
import server from './server/server';

const port = process.argv[2] || process.env.Port || 3000;

const renderToTheBrowser = () => {
  return global.setTimeout(() => {
    open(`http://localhost:${port}`);
  }, 30000);
};

server.listen(port, err => {
  if (err) {
    print(err);
  } else {
    renderToTheBrowser();
  }
  print(
    chalk.blue.bold(
      `Listening on http//localhost:${chalk.red(port)} ====>>> 🌎`,
    ),
  );
});
