import logger from './fancyLogger.js'

export default function logSecondImplementation() {
  logger.printLogCount()
  logger.log('Second File')
  logger.printLogCount()
}
/*

OUTPUT: 1 Logs
Fancy: Second File
2 Logs
*/
