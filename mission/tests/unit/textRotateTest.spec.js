import { shallowMount, mount } from '@vue/test-utils';
import TextRotate from '@/components/TextRotate.vue';

describe('TextRotate.vue', () => {
  test('텍스트를 받는 input이 있는가', async() => {
    const wrapper = shallowMount(TextRotate);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('알림 버튼이 있는가', async() => {
    const wrapper = shallowMount(TextRotate);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('입력된 텍스트를 보여주는 영역이 있는가', async() => {
    const wrapper = shallowMount(TextRotate);

    expect(wrapper.find('[data-test="custom-input"]').exists()).toBe(true);
  });

  test('input에 입력된 텍스트가 커스텀 인풋 영역에 동일하게 보여진다.', async() => {
    const wrapper = shallowMount(TextRotate);
    const input = wrapper.find('input');
    await input.setValue('Projectlion');

    expect(wrapper.find('[data-test="custom-input"]').text()).toContain('Projectlion');
  });

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

    expect(wrapper.find('[data-test="custom-input"]').text()).toContain('34512');
  });

  test('클릭수 버튼 클릭시 input에 입력된 문자열을 모달로 보여준다.', async () => {
    const wrapper = mount(TextRotate);
    const input = wrapper.find('input');
    const btn = wrapper.get('[data-test="alert"]');

    await input.setValue('Projectlion');
    await btn.trigger('click');

    expect(wrapper.get('[data-test="modal-body-message"]').text()).toContain('Projectlion');
  });

  test('클릭수 버튼 클릭시 클릭 수를 모달로 보여준다.', async () => {
    const wrapper = mount(TextRotate);
    const btn = wrapper.get('[data-test="alert"]');

    await btn.trigger('click');

    expect(wrapper.get('[data-test="modal-body-message"]').text()).toContain('1');
  });
});
