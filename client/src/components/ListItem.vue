<template lang="pug">
  div
    input(
      type="checkbox"
      v-model="item.done"
      @click="triggerEditeddItem(item)"
    )
    span {{item.description}}
    button(@click="triggerDeletedItem(item)") x
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

</style>
