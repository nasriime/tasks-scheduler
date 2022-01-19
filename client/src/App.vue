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
    button(type='button' @click="addItem") +
    ListItem(
      v-for="(item, index) in data"
      :item="item"
      :key="item._id"
      @deleted-item="deleteItem"
      @edited-item="updateItem"
    )
    div(v-if="data.length === 0") No results found
    button(
      type='button'
      name="previous_button"
      :disabled="!hasPrevPage"
      @click="navigate('previous')") <
    button(
      type='button'
      name="next_button"
      :disabled="!hasNextPage"
      @click="navigate('next')") >
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
      updateItem, search, navigate, item,
      hasNextPage,
      hasPrevPage,
    } = useApp();

    getTodos();

    return {
      data,
      addItem,
      deleteItem,
      updateItem,
      search,
      navigate,
      item,
      hasNextPage,
      hasPrevPage,
    };
  },
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
