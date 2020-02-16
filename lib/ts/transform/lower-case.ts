/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
const lowerCase = (str: string): string => {
  str = str == null ? '' : String(str)
  return str.toLowerCase()
}

export default lowerCase
