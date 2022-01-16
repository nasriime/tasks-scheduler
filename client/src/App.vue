<template lang="pug">
  #app.todo-app
    div {{ message }}
</template>

<script lang="ts">
import { ref, defineComponent } from '@vue/composition-api';

/* eslint-disable import/extensions, import/no-unresolved */
import { Ref, Data } from './types/index';

export default defineComponent({
  name: 'App',
  setup() {
    const data: Ref = ref();
    const url = 'http://localhost:3000/api/v1/todo';

    fetch(url)
      .then((res) => res.json())
      .then((result: Data) => {
        console.log('result', result);
        data.value = result;
      }, (err) => {
        console.log('err', err);
      });

    return {
      message: 'Todo list should be here',
      data,
    };
  },
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
