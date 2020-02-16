import camelCase from './camel-case'
import snakeCase from './snake-case'

/**
 * @description Change all keys of an Array | Object by a transformer function
 * @param transformer - Transformer function to change the objects keys
 * @param obj - An Array | Object to transform
 */
const changeKeys = (transformer: any, obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((key) => (typeof key === 'string' ? transformer(key) : changeKeys(transformer, key)))
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).reduce((object: any, data: any) => {
      let [key, value] = data
      if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
        value = changeKeys(transformer, value)
      }
      object[`${transformer(key)}`] = value
      return object
    }, {})
  }

  return obj
}

/**
 * @description Transform an Object | String to camel case
 * @param obj
 */
export const camelCaseObject = (obj: any) => {
  if (typeof obj === 'string') {
    return camelCase(obj)
  }
  return changeKeys(camelCase, obj)
}

/**
 * @description Transform an Object | String to snake case
 * @param obj
 */
export const snakeCaseObject = (obj: any) => {
  if (typeof obj === 'string') {
    return snakeCase(obj)
  }

  return changeKeys(snakeCase, obj)
}

/**
 * @description Delete undefined params from an Object and parse the new Object
 * @param obj
 */
export const classToJson = (obj: any): any => {
  return Object.entries(obj)
    .filter((el) => el[1] !== undefined)
    .reduce((json: any, ele) => {
      const [key, value] = ele
      json[`${key}`] = value
      return json
    }, {})
}
