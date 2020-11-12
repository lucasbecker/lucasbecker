#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const boxenConfig = {
  margin: 1,
  backgroundColor: 'black',
  borderColor: 'blue'
};

const data = {
  name: chalk.white.bold('Lucas Becker'),
  occupation: chalk.white('Desenvolvedor Full Stack'),
  organization: chalk.white('Freelancer'),
  web: chalk.blueBright('https://lucasbecker.github.io'),
  github: chalk.blueBright('https://github.com/lucasbecker'),
  linkedin: chalk.blueBright('https://linkedin.com/in/lucasbeckerfelisberto'),
  email: chalk.blueBright('lucasbeckerfelisberto@gmail.com'),
  labelWeb: chalk.white.bold('Web:'),
  labelGithub: chalk.white.bold('GitHub:'),
  labelLinkedin: chalk.white.bold('LinkedIn:'),
  labelEmail: chalk.white.bold('Email:')
};

const newline = '\n';
const name = `   ${data.name}   `;
const work = `   ${data.occupation} - ${data.organization}   `;
const web = `   ${data.labelWeb}      ${data.web}   `;
const github = `   ${data.labelGithub}   ${data.github}   `;
const linkedin = `   ${data.labelLinkedin} ${data.linkedin}   `;
const email = `   ${data.labelEmail}    ${data.email}   `;

const output = newline + name + newline + work + newline + newline + web + newline + github + newline + linkedin + newline + email + newline;

console.log((boxen(output, boxenConfig)));
