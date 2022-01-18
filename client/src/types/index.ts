import { Ref } from '@vue/composition-api';

export interface Item {
    _id: string,
    description: string,
    done: boolean,
    createdAt: string,
    updatedAt: string,
}

export interface meta {
    itemCount: number,
    offset: number,
    limit: number,
    pageCount: number,
    page: number,
    hasPrevPage: string,
    hasNextPage: string,
    prevPage: string,
    nextPage: string
}

export interface DataRef {
    items: [Item],
    meta: meta
}

export interface USEAPP {
    getTodos: () => void;
    data: Ref<{
        _id: string;
        description: string;
        done: boolean;
        createdAt: string;
        updatedAt: string;
    }[]>;
    addItem: () => void;
    deleteItem: (singleItem: Item) => void;
    updateItem: (id: string) => void;
    search: (evt: Event) => void;
    item: Ref<string>;
}

export interface API {
    results: Ref<DataRef | undefined>;
    loading: Ref<boolean>;
    errors: Ref<any>;
    call: (url: string, options?: {
        method: string;
    }) => void;
}
