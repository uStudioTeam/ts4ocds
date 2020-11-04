const { resolve } = require('path');

const fromTemplate = require('./from-template');
const rootPackageJson = require('../package.json');

const meta = (packageName) => ({
  author: 'uStudio Company <toberead@ustudio.company> (http://ustudio.company)',
  repository: 'github:uStudioTeam/ts4ocds',
  homepage: `https://github.com/uStudioTeam/ts4ocds/packages/${packageName}`,
  description: rootPackageJson.description,
  license: 'MIT',
});

const engineInfo = {
  engines: {
    node: '>=12',
  },
};

module.exports = () => {
  fromTemplate(
    (directoryPath) => {
      const templateName = 'package.json';

      return [templateName, require(resolve(directoryPath, templateName))];
    },
    (_, { scripts: _s, name, version, ...packageJson }) => {
      return JSON.stringify(
        {
          name,
          version,
          ...meta(name.slice(name.indexOf('/') + 1)),
          keywords: ['ocds', 'typescript', 'type-definitions', 'classes', 'ts'],
          ...packageJson,
          ...engineInfo,
          publishConfig: {
            access: 'public',
          },
        },
        null,
        2
      );
    }
  );
};
