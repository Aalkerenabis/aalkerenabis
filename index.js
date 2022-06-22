const fetch = require('node-fetch');

const moment = require('moment');

const chalk = require('chalk');

const rs = require('readline-sync');

function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));

}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/2', {

    method: 'GET',

    headers: {

      'authorization': auth

    }

  })

    .then(res => res.text())

    .then(data => {

      resolve(data);

    })

    .catch(err => {

      reject(err);

    });

});

(async () => {

  console.log(`Duplikat Crown And Trophy! [ReEdit]

By : ${chalk.bold('AalFitrah')} - Credit : @AalFitrah

`);

  const auth = rs.question('Enter Authentication Code! : ');

  console.log('');

  while (true) {

    const result = await GoStumble(auth);

    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Authentication Code Not Valid`));

      break;

    } else if (result.includes('User')) {

      const data = JSON.parse(result);

      const username = data.User.Username;

      const country = data.User.Country;

      const trophy = data.User.SkillRating;

      const crown = data.User.Crowns;

${chalk.purple(` Status : Succes✓`)}\n`));

await sleep(7500);

console.log(chalk.white(`\rTime : [ ${moment().format('HH:mm:ss')} ] ${chalk.yellow(`!`)}${chalk.blue(`User : ${username}`)} | ${chalk.yellow(`!`)}${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.yellow(`!`)}${chalk.blue(`Crown : ${crown}`)}

    } else if (result == 'BANNED') {

      console.log(chalk.bgRed(`MAMPUS KE BAN`));

     break;

    }

  }

})();

