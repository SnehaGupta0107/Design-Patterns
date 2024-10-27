import logger from './fancyLogger.js'

export default function logFirstImplementation() {
  logger.printLogCount()
  logger.log('First File')
  logger.printLogCount()
}

/*

OUTPUT: 0 Logs
Fancy: First file
1 Logs
*/
