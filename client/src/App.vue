<template lang="pug">
  #app.todo-app
    input(
      type='text'
      name='search'
      placeholder='Search'
      @input="search"
    )
    input(
      type='text'
      name='take_note'
      placeholder='Take a note'
      v-model="item"
    )
    button(type='button' @click="addItem") btn
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
      getTodos, data, addItem, deleteItem,
      updateItem, search, item,
    } = useApp();

    getTodos();

    return {
      data,
      addItem,
      deleteItem,
      updateItem,
      search,
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
