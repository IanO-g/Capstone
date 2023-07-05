export enum Grade {
        UNGRADED = 0,
        SEVEN = 7,
        EIGHT = 8,
        NINE = 9,
        NINEFIVE = 9.5,
        TEN = 10
}

export interface Init {
    method: string;
    headers: {
      'Content-Type'?: string;
      'Accept': string;
      'Authorization': string;
    },
    body?: string;
}

export interface CollectionInterface {
    id: number;
    name: string;
    value: number | null;
}

export interface ItemInterface {
    id: number;
    name: string;
    value: number | null;
    grade: Grade;
}

export interface CollectionItemInterface {
    collectionId: number;
    itemId: number;
    priceListed: number;
    isSold: boolean | null;
}

export class Collection implements CollectionInterface{
    constructor(
        public id: number = 0,
        public name: string,
        public value: number | null = null
    ){}
}

export class Item implements ItemInterface{
    constructor(
        public id: number = 0,
        public name: string,
        public value: number | null = null,
        public grade: Grade = Grade.UNGRADED
    ){}
}

export class CollectionItem implements CollectionItemInterface{
    constructor(
        public collectionId: number,
        public itemId: number,
        public priceListed: number,
        public isSold: boolean
    ){}
}
