<template lang="pug">
  #app.todo-app
    div {{ message }}
</template>

<script lang="ts">
import { ref, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup() {
    // utilise todo-bitpanda-server to get data
    const result = ref();

    const fetchData = (): Promise<any> => {
      const url = '3000/api/v1/todo/';

      return fetch(url)
        .then((response) => {
          if (response.status !== 201) {
            throw response.status;
          } else {
            return response.json();
          }
        });
    };

    result.value = fetchData();

    return {
      message: 'Todo list should be here',
      result,
    };
  },
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
