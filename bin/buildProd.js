#!/usr/bin/env node
"use strict"

const buildConfig = require('../buildConfig.json');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function removeWorkspaces() {
  const packageJSON = require('../package.json');
  const newPackageJSON = { ...packageJSON, workspaces: {} };
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(newPackageJSON));
}

function addConfigVersions() {
  const packageJSON = require('../package.json');
  const newPackageJSON = { ...packageJSON, dependencies: {
    ...packageJSON.dependencies,
    ...buildConfig,
  } };
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(newPackageJSON));
}

removeWorkspaces();
addConfigVersions();
spawnSync('yarn && yarn build:core', {
  stdio: 'inherit',
  shell: true,
});
