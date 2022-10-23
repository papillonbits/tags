import { withTests } from '@storybook/addon-jest'
import { Input } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Atom/Text/Input',
  component: Input,
  decorators: [withTests({ results })],
  parameters: { jest: ['Input.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Input />
}
