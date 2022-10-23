import { withTests } from '@storybook/addon-jest'
import { MultiTagCard } from '../index'
import { intro, emails, telephones } from '../../../../data'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Tags/Template/Input/MultiTagCard',
  component: MultiTagCard,
  decorators: [withTests({ results })],
  parameters: { jest: ['MultiTagCard.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <MultiTagCard intro={intro} mails={emails} telephones={telephones} />
}
