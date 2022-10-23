import { cross, check } from './Icon.int.story'

describe('<Icon />', () => {
  describe('Render', () => {
    test('must match cross', () => {
      expect(global.renderToJSON(cross())).toMatchSnapshot()
    })

    test('must match check', () => {
      expect(global.renderToJSON(check())).toMatchSnapshot()
    })
  })
})
