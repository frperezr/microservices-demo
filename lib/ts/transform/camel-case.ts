import upperCase from './upper-case'
import noCase from './no-case'

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
const camelCase = (value: string, mergeNumbers?: boolean) => {
  let result = noCase(value)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, (m, $1) => upperCase($1))
}

export default camelCase
