<template lang="pug">
  div.item
    div.item__left
      input(
        type="checkbox"
        id="item"
        v-model="item.done"
      )
      label(
        for="item"
        @click="triggerEditeddItem(item)"
      )
      span(
        v-bind:class="{ 'is-active': item.done }"
        class="item__title"
        @click="triggerEditeddItem(item)"
        ) {{item.description}}
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
    padding: 10px 15px 10px 10px;
    &:not(:last-child){
      border-bottom: 1px solid #C6C6C6;
    }

    input[type=checkbox] {
      display: none;
      + label{
        display:inline-block;
        height: 30px;
        width: 30px;
        min-width: 30px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.17);
        cursor: pointer;
        margin-right: 10px;
      }
      &:checked + label{
        background-image: url('../assets/images/check.png');
        background-repeat: no-repeat;
        background-position: center center;
      }
    }

    &__left{
      display: flex;
    }

    &__title{
      margin-top: 6px;
      font-size: 16px;
      color: #000;
      cursor: pointer;
      &.is-active{
          text-decoration: line-through;
          color: #AEAEAE;
        }
    }

    &__close{
      align-self: start;
      margin: 9px 0px 0px 7px;
      cursor: pointer;
    }
  }
</style>
