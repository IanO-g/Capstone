export enum Grade {
        UNGRADED = "UNGRADED",
        SEVEN = "SEVEN",
        EIGHT = "EIGHT",
        NINE = "NINE",
        NINEFIVE = "NINEFIVE",
        TEN = "TEN"
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

export interface AppUserInterface {
    appUserId: number;
    username: string;
    roles: string[];
}

export class AppUser implements AppUserInterface{
    constructor (
        public appUserId: number = 0,
        public username: string,
        public roles: string[]
    ){}
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
    grade: Grade | null;
}

export interface CollectionItemInterface {
    id:number;
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
        public value: number | null = 0.00,
        public grade: Grade | null = Grade.UNGRADED
    ){}
}

export class CollectionItem implements CollectionItemInterface{
    constructor(
        public id: number = 0,
        public collectionId: number,
        public itemId: number,
        public priceListed: number,
        public isSold: boolean
    ){}
}
