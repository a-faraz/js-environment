/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mock-data-schema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';
const outputFile = './client/api/db.json';

jsf.extend('faker', function() {
  return faker;
});

jsf.resolve(schema).then(function(result) {
  fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err) {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      console.log(chalk.green(`Mock Data Generated`));
    }
  });
});
