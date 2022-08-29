const core = require('@actions/core')
const github = require('@actions/github')
const { getInput, setOutput, setFailed } = core

try {
  core.debug('Debug message, only show when debbuging option is enabled')
  core.warning('Show message in yellow')
  core.error('Show message in red')
  
  const name = getInput('who-to-greet')
  // core.setSecret(name) will mask variable 
  console.log(`Hello ${name}!`)
  
  const time = new Date()
  setOutput('time', time.toTimeString())
  
  // create expandable content  
  core.startGroup('Logging github object')
  console.log(JSON.stringify(github, null, '\t'))
  core.endGroup()
  
  // Export environment variables
  core.exportVariable('ENV_VARIABLE', 'hello')
} catch (error) {
  setFailed(error.message)
}

