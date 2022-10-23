/* eslint-disable no-shadow, no-console */
import iconPaths from '../font/selection.json'

export function getPath(name) {
  const icon = iconPaths.icons.find((icon) => icon.properties.name === name)

  if (icon) {
    return icon.icon.paths.join(' ')
  }
  console.warn(`icon ${name} does not exist.`)
  return ''
}
