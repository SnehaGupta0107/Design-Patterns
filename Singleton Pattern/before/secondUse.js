import FancyLogger from './fancyLogger.js'

const logger = new FancyLogger()

export default function logSecondImplementation() {
  logger.printLogCount()
  logger.log('Second file')
  logger.printLogCount()
}

/*

OUTPUT: 0 Logs
Fancy: Second file
1 Logs
*/
