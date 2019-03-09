import { shallowMount } from '@vue/test-utils'
import MyComponent from '../src/my-component.vue';

describe('MyComponent', () => {
  it('should work', () =>  {
    const wrapper = shallowMount(MyComponent);
    wrapper.setData({ msg: 'Success' });
    expect(wrapper.find('h1').text()).toContain('Success');
  });
});
