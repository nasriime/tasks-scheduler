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
import { ref, defineComponent } from '@vue/composition-api';

import ListItem from './components/ListItem.vue';
/* eslint-disable import/extensions, import/no-unresolved */
import { Item, DataRef } from './types/index';

export default defineComponent({
  name: 'App',
  components: {
    ListItem,
  },
  setup() {
    const items = [{
      _id: '61e279bd09171b00124d8e23',
      description: 'Dolore mollit duis ut qui quis magna dolor labore adipisicing commodo.',
      done: true,
      createdAt: '2022-01-15T07:37:33.923Z',
      updatedAt: '2022-01-15T07:37:33.923Z',
    }];
    const data = ref<Item[]>(items);
    const item = ref('');
    const url = 'http://localhost:3000/api/v1/todo';

    fetch(url)
      .then((res) => res.json())
      .then((result: DataRef): void => {
        data.value = result.items;
      }, (err) => {
        console.log('err', err);
      });

    const addItem = () => {
      const body = {
        description: item.value,
        done: false,
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log('result', result);
          item.value = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    const onclick = (evt: Event): void => {
      console.log((evt.target as HTMLInputElement).value);
      const val = (evt.target as HTMLInputElement).value;

      item.value = val;
    };

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
