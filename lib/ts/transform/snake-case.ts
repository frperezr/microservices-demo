import noCase from './no-case'

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @return {string}
 */
const snakeCase = (value: string): string => {
  return noCase(value, '_')
}

export default snakeCase
