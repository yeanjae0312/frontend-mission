import { mount } from '@vue/test-utils';
import ItemPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItemPage);
  });

  it('redners ItemListItem', async () => {
    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });
});
