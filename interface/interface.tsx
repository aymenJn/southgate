    export interface SelectedProduct{
      id:string,
      name : string , 
      price : string , 
      quantity :number ,
      type : string
     }

    export interface operation {
      selected : SelectedProduct[] ,
      somme : number ,
      date : string, 
      owner  : string ,
     }
export  interface produit  {
  id : string
  name : string , 
  type : string , 
  price : string , 
  quantity : number
}
export interface date  {
  year : number , 
  month : number , 
  day : number , 
  hour  : number , 
  minute : number , 
  second  : number
}