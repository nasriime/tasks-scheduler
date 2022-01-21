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
          span.item__time  - {{time}}
    img(
      src="../assets/images/Remove.png"
      class="item__close"
      @click="triggerDeletedItem(item)"
    )
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import moment from 'moment';

/* eslint-disable import/extensions, import/no-unresolved */
import { Item } from '../types/index';

export default defineComponent({
  name: 'ListItem',
  props: {
    item: {
      required: true,
      type: Object as PropType<Item>,
    },
  },
  emits: ['deletedItem'],
  setup(props, { emit }) {
    const time = computed(():string => moment(props.item.updatedAt).fromNow(true));
    const triggerDeletedItem = (item: Item) => {
      emit('deleted-item', item);
    };

    const triggerEditeddItem = (item: Item) => {
      emit('edited-item', item);
    };

    return {
      triggerDeletedItem,
      triggerEditeddItem,
      time,
    };
  },
});
</script>

<style lang="scss">
  .item{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 10px 18px;
    &:not(:last-child){
      border-bottom: 1px solid #C6C6C6;
    }

    &:hover{
      .item__close{
        display: block;
      }
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
      max-width: 531px;
    }

    &__title{
      margin-top: 6px;
      font-size: 16px;
      font-weight: 100;
      color: #000;
      cursor: pointer;
      &.is-active{
          text-decoration: line-through;
          color: #AEAEAE;
        }
    }

    &__time{
      font-size: 10px;
      font-weight: 100;
      color: #AEAEAE;
    }

    &__close{
      display: none;
      align-self: start;
      margin: 10px 0px 0px 7px;
      cursor: pointer;
    }
  }
</style>
