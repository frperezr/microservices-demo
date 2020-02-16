import lowerCase from './lower-case'

import NON_WORD_REGEXP from './regex/non-word-regexp'
import CAMEL_CASE_REGEXP from './regex/camel-case-regexp'
import CAMEL_CASE_UPPER_REGEXP from './regex/camel-case-upper-regexp'
/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} replacement
 * @return {string}
 */
const noCase = (str: string, replacement?: string): string => {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace(match: any, index: number, value: any): string {
    if (index === 0 || index === value.length - match.length) {
      return ''
    }

    return replacement || ''
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str)
}

export default noCase
