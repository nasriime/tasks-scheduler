import { ref } from '@vue/composition-api';

/* eslint-disable import/extensions, import/no-unresolved */
import { Item, DataRef } from './types/index';

const useApp = () => {
  const items = [{
    _id: '61e279bd09171b00124d8e23',
    description: 'Dolore mollit duis ut qui quis magna dolor labore adipisicing commodo.',
    done: true,
    createdAt: '2022-01-15T07:37:33.923Z',
    updatedAt: '2022-01-15T07:37:33.923Z',
  }];

  const item = ref('');
  const data = ref<Item[]>(items);
  const url = 'http://localhost:3000/api/v1/todo';

  const getTodos = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result: DataRef): void => {
        data.value = result.items;
      }, (err) => {
        console.log('err', err);
      });
  };

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
    getTodos,
    data,
    addItem,
    onclick,
    item,
  };
};

export default useApp;
