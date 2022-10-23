import { withTests } from '@storybook/addon-jest'
import { Info } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Atom/Text/Info',
  component: Info,
  decorators: [withTests({ results })],
  parameters: { jest: ['Info.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Info body="You will receive a notification with every payment of your credits" />
}
