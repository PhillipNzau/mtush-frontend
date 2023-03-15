export interface ItemCard {
    id?: number;
    price:number;
    brand:string;
    size:string;
    location:string;
    liked?:boolean;
    numberOfLikes?:number;
}
