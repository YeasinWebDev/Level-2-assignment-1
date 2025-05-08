function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {

  let item: { title: string; rating: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      item.push(items[i]);
    }
  }
  return item
}




function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result:T[] =[]

    for(let i =0 ;i<arrays.length;i++){
        let current = arrays[i]
        
        for(let j = 0; j<current.length;j++){
            result.push(current[j])
        }
    }

    return result
}






class Vehicle {
    constructor(private make:string , private year:number){}
    getInfo(){
        return console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(make:string,year:number, private model:string){
        super(make,year)
    }

    getModel(){
        return console.log(`Model: ${this.model}`)
    }
}




function processValue(value: string | number): number{
    let ans:number=0
    if(typeof value === 'string'){
       ans= value.length
    }else if(typeof value ==='number'){
       ans= value * 2
    }

    return ans
}





interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length<=0){
        return null
    }else{
        let highestPrice:Product ={
            name:'',
            price:0
        }

        for(let i =0 ;i<products.length;i++){
            if(products[i].price > highestPrice?.price){
                highestPrice = products[i]
            }
        }

        return highestPrice
    }
  }





  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    let ans =''
    if(day === 5 || day === 6){
        ans='Weekend'
    }else{
        ans='Weekday'
    }
    return ans
  }




  async function squareAsync(n: number): Promise<number>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(n<0){
                rej('Error: Negative number not allowed')
            }else{
                res(n*n)
            }
        },1000)
    })
  }