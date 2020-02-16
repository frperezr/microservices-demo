/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
const upperCase = (str: string): string => {
  str = str == null ? '' : String(str)
  return str.toUpperCase()
}

export default upperCase
