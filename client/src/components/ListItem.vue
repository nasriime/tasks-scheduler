<template lang="pug">
  li {{ index }} {{item.description}}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ListItem',
  props: {
    item: String,
    index: Number,
    key: Number,
  },
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss">

</style>
