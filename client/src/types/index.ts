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
