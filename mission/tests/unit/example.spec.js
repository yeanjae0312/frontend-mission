import { shallowMount } from '@vue/test-utils';
import TextRotate from '@/components/TextRotate.vue';

describe('TextRotate.vue', () => {
  test('input값을 입력하면 아래에 입력한 내용이 보인다.', async () => {
    const wrapper = shallowMount(TextRotate);
    const input = wrapper.find('input');
    const showArea = wrapper.find('.show-input-text');

    await input.setValue('input value');

    expect(showArea.text()).toBe('input value');
  });
});
