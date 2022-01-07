import { shallowMount, mount } from '@vue/test-utils';
import TextRotate from '@/components/TextRotate.vue';

describe('TextRotate.vue', () => {
  test('회전 버튼 클릭시 글자가 회전된다.', async () => {
    const wrapper = shallowMount(TextRotate);
    const input = wrapper.find('input');
    const btn = wrapper.find('button');

    await input.setValue('Projectlion');
    await btn.trigger('click');

    expect(wrapper.text()).toContain('rojectlionP');
  });

  test('회전 버튼 클릭시 숫자가 회전된다.', async () => {
    const wrapper = shallowMount(TextRotate);
    const input = wrapper.find('input');
    const btn = wrapper.find('button');

    await input.setValue('12345');
    await btn.trigger('click');
    await btn.trigger('click');

    expect(wrapper.text()).toContain('34512');
  });

  /* test('클릭수 버튼 클릭시 input에 입력된 문자열을 모달로 보여준다.', async () => {
    const wrapper = mount(TextRotate);
    const input = wrapper.find('input');
    const btn = wrapper.find('button');
    const modal = wrapper.find('#modal');
    
    await input.setValue('Projectlion');
    await btn.trigger('click');

    expect(modal.text()).toContain('Projectlion');
  }); */

  /* test('클릭수 버튼 클릭시 클릭 수를 모달로 보여준다.', async () => {
    const wrapper = mount(TextRotate);
    const btn = wrapper.find('button');
    const modal = wrapper.find('#modal');

    await btn.trigger('click');
    await btn.trigger('click');
    await btn.trigger('click');
    await btn.trigger('click');
    await btn.trigger('click');

    expect(modal.text()).toContain('5');
  }); */
});
