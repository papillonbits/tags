import { withTests } from '@storybook/addon-jest'
import { TagList } from '../index'
import { emails } from '../../../../data'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Molecule/Info/TagList',
  component: TagList,
  decorators: [withTests({ results })],
  parameters: { jest: ['TagList.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <TagList items={emails.items} />
}
