<template lang="pug">
  li {{ index }} {{item.description}}
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
    index: Number,
  },
  emits: ['deletedItem'],
  setup(props, { emit }) {
    const triggerDeletedItem = (item: Item) => {
      console.log('there', item);
      emit('deleted-item', item);
    };

    return {
      triggerDeletedItem,
    };
  },
});
</script>

<style lang="scss">

</style>
