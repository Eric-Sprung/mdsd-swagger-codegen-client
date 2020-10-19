const path = require('path');
const codegen = require('swagger-node-codegen');

codegen.generate({
    swagger: path.resolve(__dirname, './swagger/metamodell.json'),
    target_dir: path.resolve(__dirname, './my-api-client')
  }).then(() => {
    console.log('Done!');
  }).catch(err => {
    console.error(`Something went wrong: ${err.message}`);
  });
