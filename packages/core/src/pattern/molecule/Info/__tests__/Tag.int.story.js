import { withTests } from '@storybook/addon-jest'
import { Tag } from '../index'
import { emails } from '../../../../data'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Molecule/Info/Tag',
  component: Tag,
  decorators: [withTests({ results })],
  parameters: { jest: ['Tag.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Tag id={emails.items[0].id} text={emails.items[0].text} />
}
