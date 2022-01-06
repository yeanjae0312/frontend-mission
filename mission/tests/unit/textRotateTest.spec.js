import { shallowMount } from '@vue/test-utils';
import TextRotate from '@/components/TextRotate.vue';

describe('TextRotate.vue', () => {
  const wrapper = shallowMount(TextRotate);
  const input = wrapper.find('input');
  const showArea = wrapper.find('.show-input-text');

  test('input값을 입력하면 아래에 입력한 내용이 보인다.', async () => {
    await input.setValue('input value');

    expect(showArea.text()).toBe('input value');
  });

  test('회전 버튼 클릭시 아래에 글자가 회전된다.', async () => {
    const rotateBtn = wrapper.find('.btn-rotate');

    await input.setValue('Projectlion');
    await rotateBtn.trigger('click');

    expect(showArea.text()).toBe('rojectlionP');
  });

  test('회전 버튼 클릭시 아래에 숫자가 회전된다.', async () => {
    const rotateBtn = wrapper.find('.btn-rotate');

    await input.setValue('12345');
    await rotateBtn.trigger('click');

    expect(showArea.text()).toBe('23451');
  });
});
