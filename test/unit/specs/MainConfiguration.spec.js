import { mount } from '@vue/test-utils'
import MechGenerator from '@/components/MainConfiguration'

describe('MainConfiguration.vue', () => {
  it('should render correct contents', () => {
    let subject = mount(MechGenerator);
    expect (subject.contains('input')).to.equal(true);
  })
})
