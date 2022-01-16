export type Item = {
    _id: string,
    description: string,
    done: string,
    createdAt: string,
    updatedAt: string,
}

export type meta = {
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

export type Data = {
    items: [Item],
    meta: meta
}

export interface Ref {
    value: Data
  }
