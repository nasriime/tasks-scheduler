<template lang="pug">
  #app.todo-app
    input(
      type='text'
      name='search'
      placeholder='Search'
      v-model="item"
    )
    button(type='button' @click="addItem($event)") btn
    ListItem(
      v-for="(item, index) in data"
      :item="item"
      :index="index"
      :key="item._id"
    )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import ListItem from './components/ListItem.vue';
/* eslint-disable import/extensions, import/no-unresolved */
import useApp from './use-app';

export default defineComponent({
  name: 'App',
  components: {
    ListItem,
  },
  setup() {
    const {
      getTodos, data, addItem, onclick, item,
    } = useApp();

    getTodos();

    return {
      data,
      addItem,
      onclick,
      item,
    };
  },
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
