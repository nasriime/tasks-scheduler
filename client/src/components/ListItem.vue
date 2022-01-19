<template lang="pug">
  div.item
    div
      input(
        type="checkbox"
        v-model="item.done"
        @click="triggerEditeddItem(item)"
      )
      span {{item.description}}
    img(
      src="../assets/images/remove.png"
      class="item__close"
      @click="triggerDeletedItem(item)"
    )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

/* eslint-disable import/extensions, import/no-unresolved */
import { Item } from '../types/index';

export default defineComponent({
  name: 'ListItem',
  props: {
    item: Object,
  },
  emits: ['deletedItem'],
  setup(props, { emit }) {
    const triggerDeletedItem = (item: Item) => {
      emit('deleted-item', item);
    };

    const triggerEditeddItem = (item: Item) => {
      emit('edited-item', item);
    };

    return {
      triggerDeletedItem,
      triggerEditeddItem,
    };
  },
});
</script>

<style lang="scss">
  .item{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 10px;
    &:not(:last-child){
      border-bottom: 1px solid #C6C6C6;
    }
    .item__close{
      align-self: center;
      cursor: pointer;
    }
  }
</style>
