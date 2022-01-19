import { ref } from '@vue/composition-api';

/* eslint-disable import/extensions, import/no-unresolved */
import { Item, DataRef, USEAPP } from './types/index';

const useApp = (): USEAPP => {
  const defaultItems = [{
    _id: '61e279bd09171b00124d8e23',
    description: 'Dolore mollit duis ut qui quis magna dolor labore adipisicing commodo.',
    done: true,
    createdAt: '2022-01-15T07:37:33.923Z',
    updatedAt: '2022-01-15T07:37:33.923Z',
  }];

  const item = ref('');
  const data = ref<Item[]>(defaultItems);
  const limit = ref<number>(20);
  const offset = ref<number>(20);
  const hasNextPage = ref<boolean>(false);
  const hasPrevPage = ref<boolean>(false);

  const url = 'http://localhost:3000/api/v1/todo';

  const getTodos = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result: DataRef): void => {
        const { items, meta } = result;

        data.value = items;
        hasNextPage.value = meta.hasNextPage;
        hasPrevPage.value = meta.hasPrevPage;
      }, (err) => {
        console.log('err', err);
      });
  };

  const addItem = ():void => {
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
        getTodos();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const deleteItem = (singleItem: Item): void => {
    const { _id } = singleItem;

    fetch(`${url}/${_id}`, {
      method: 'DELETE',
    })
      .then(() => {
        getTodos();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const updateItem = (singleItem: Item): void => {
    const {
      _id, description, done, createdAt, updatedAt,
    } = singleItem;

    const body = {
      _id,
      description,
      done: !done,
      createdAt,
      updatedAt,
    };

    fetch(`${url}/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result);
        getTodos();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const search = (evt: Event): void => {
    const val = (evt.target as HTMLInputElement).value;

    if (val === '') {
      getTodos();
      return;
    }

    const newData = data.value.filter((v: Item) => v.description.includes(val.toLowerCase()));

    data.value = newData;
  };

  const navigate = (dir: string): void => {
    console.log('here');

    if (dir === 'next') {
      offset.value += limit.value;
    } else {
      offset.value -= limit.value;
    }

    fetch(`${url}?limit=${limit.value},offset=${offset.value}`)
      .then((res) => res.json())
      .then((result: DataRef): void => {
        data.value = result.items;
      }, (err) => {
        console.log('err', err);
      });
  };

  return {
    getTodos,
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
};

export default useApp;
