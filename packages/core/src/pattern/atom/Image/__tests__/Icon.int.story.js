import { withTests } from '@storybook/addon-jest'
import { Icon } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Atom/Image/Icon',
  component: Icon,
  decorators: [withTests({ results })],
  parameters: { jest: ['Icon.int.test.js'] },
  excludeStories: ['custom'],
}

export function cross() {
  return <Icon name="cross" width="10" height="10" />
}

export function check() {
  return <Icon name="check" width="10" height="10" />
}
