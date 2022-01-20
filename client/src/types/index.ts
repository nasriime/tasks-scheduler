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
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: string,
    nextPage: string
}

export interface DataRef {
    items: [Item],
    meta: meta
}

export interface USEAPP {
    getTodos: (dir?: string) => void,
    data: Ref<{
        _id: string;
        description: string;
        done: boolean;
        createdAt: string;
        updatedAt: string;
    }[]>;
    addItem: () => void;
    deleteItem: (singleItem: Item) => void;
    updateItem: (singleItem: Item) => void;
    search: (evt: Event) => void;
    item: Ref<string>;
    hasNextPage: Ref<boolean>;
    hasPrevPage: Ref<boolean>;
}

export interface API {
    results: Ref<DataRef | undefined>;
    loading: Ref<boolean>;
    errors: Ref<any>;
    call: (url: string, options?: {
        method: string;
    }) => void;
}
