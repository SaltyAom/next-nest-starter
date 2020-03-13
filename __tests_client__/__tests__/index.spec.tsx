import Index from 'views/index'

import { shallow } from 'enzyme'

describe('Index', () => {
    it('Should contains Hello World!', () => {
        let App = shallow(<Index />)

        expect(App.find('h1').text()).toBe('Hello World!')
    })
})
