import * as core from '@actions/core';
import * as path from 'path';
import * as fs from 'fs';

try {
  const filePath = core.getInput('path');
  const packageJsonPath = path.join(process.cwd(), filePath || 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  core.setOutput('version', packageJson.version);
  core.setOutput('name', packageJson.name);
} catch (error) {
  core.setFailed(JSON.stringify(error));
}