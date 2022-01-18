import { ref } from '@vue/composition-api';

/* eslint-disable import/extensions, import/no-unresolved */
import { DataRef, API } from '../types/index';

export default (): API => {
  const results = ref<DataRef>();
  const loading = ref(false);
  const errors = ref();

  const call = (url: string, options = { method: 'GET' }) => {
    loading.value = true;
    fetch(url, options)
      .then((res) => res.json())
      .then((data: DataRef): void => {
        console.log('data', data);
        results.value = data;
      })
      .catch((error: string): void => {
        errors.value = error;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    results, loading, errors, call,
  };
};
