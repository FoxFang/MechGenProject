import { mount } from '@vue/test-utils'
import MechGenerator from '@/components/MainConfiguration'

describe('MainConfiguration.vue', () => {

  let subject;

  beforeEach( () => {
    subject =  mount(MechGenerator);
  })

  it('should render a tonnage input box', () => {
    expect(subject.contains('.tonnageInput')).to.equal(true);
  });

  it('should render a movement speed input box', () => {
    expect(subject.contains('.movementInput')).to.equal(true);
  });

  it('should display calculated run move after walk is input', () => {
    const walkingSpeed = subject.find('.movementInput');
    walkingSpeed.element.value = 4;
    expect(subject.find('.runningSpeed').text()).contains('6');
  });
})
