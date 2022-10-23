import { withTests } from '@storybook/addon-jest'
import { Label } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Atom/Text/Label',
  component: Label,
  decorators: [withTests({ results })],
  parameters: { jest: ['Label.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Label text="Email address" />
}
