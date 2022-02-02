
 let findCheapest = [
     {name: 'samsung j3', price: 8000, ram: '1.5gb', camera: '8px'},
     {name: 'samsung j2', price: 7000, ram: '1.5gb', camera: '8px'},
     {name: 'samsung j6', price: 10000, ram: '2gb', camera: '10px'},
     {name: 'Oppo f5', price: 12000, ram: '2gb', camera: '12px'},
     {name: 'walton T40', price: 15000, ram: '4gb', camera: '20px'},
     {name: 'Iphone', price: 120000, ram: '32gb', camera: '80px'},
     {name: 'Sony', price: 14000, ram: '4gb', camera: '20px'},
 ]

 let cheap = findCheapest[0]
 for (const phone of findCheapest){
     if (phone.price < findCheapest.price){
         cheap = findCheapest
     }
 }
console.log(cheap)

 let sum=0; for( let i = 0; i<=3;i++){ sum = sum + i; }
 console.log(sum)