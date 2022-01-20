<template lang="pug">
  #app.todo-app
    div.search
      img(
        src="./assets/images/search-icon.png"
        class="search__img"
      )
      input(
        type='text'
        name='search'
        class="search__input"
        placeholder='Search'
        @input="search"
      )
    div.list
      div.note
        img(
          src="./assets/images/add.png"
          class="note__img"
          @click="addItem"
        )
        input(
          type='text'
          name='take_note'
          class="note__input"
          placeholder='Take a note'
          v-model="item"
        )
      ListItem(
        v-for="(item, index) in data"
        :item="item"
        :key="item._id"
        @deleted-item="deleteItem"
        @edited-item="updateItem"
      )
      div(v-if="data.length === 0" class="no-results") No results found
    div.arrows
      div.arrows__wrapper
        img(
          src="./assets/images/left-arrow.png"
          class="arrows__left"
          @click="navigate('previous')"
        )
        img(
          src="./assets/images/right-arrow.png"
          class="arrows__right"
          @click="navigate('next')"
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
@import "./assets/scss/_variables.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

*{
  box-sizing: border-box;
}

body{
  background: $bg;
}

.todo-app {
  max-width: 588px;
  margin: 40px auto 0px;
}

.search{
  margin-bottom: 20px;
  position: relative;
  &__img{
    position: absolute;
    top: 9px;
    left: 10px;
  }
  &__input{
    border-radius: 12px;
    border-color: transparent;
    width: 100%;
    background: $input-bg;
    padding: 6px 29px;
    font-weight: 300;
    font-size: 16px;
    color: #787878;
    outline: none;
  }
}
.list{
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.17);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 30px;
}

.note{
    position: relative;
    border-bottom: 1px solid #C6C6C6;
  &__img{
    position: absolute;
    top: 17px;
    right: 10px;
    cursor: pointer;
  }
  &__input{
    width: 100%;
    padding: 16px 10px 16px 30px;
    border: none;
    outline: none;
    color: #A8A8A8;
    font-size: 16px;
  }
}

.no-results{
  text-align: center;
  padding: 20px;
}

.arrows{
  display: flex;
  justify-content: end;
  .arrows__wrapper{
    border: 1px solid rgba(0, 0, 0, 0.17);
    background: #fff;
    padding: 10px;
    border-radius: 12px;
    .arrows__right{
      cursor: pointer;
      padding-left: 10px;
      border-left: 1px solid rgba(0, 0, 0, 0.17);;
    }
    .arrows__left {
      cursor: pointer;
      padding-right: 10px;
    }
  }
}
</style>
