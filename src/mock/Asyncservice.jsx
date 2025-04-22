const products = [
    {
        id:'01',
        name:'Iphone 37',
        price:5000,
        description:'igual que el 18 pero queda mas lindo cuando se ve en las redes',
        stock:15,
        category:'Nuevos',
        img:'../IPhone.jpg'
    },
    {
        id:'02',
        name:'Nokia 1100',
        price:3000,
        description:'Indestructible ideal para trabjadores de la construccion ',
        stock:5,
        category:'ofertas',
        img:'../nokia1100.jpg'
    },
    {
        id:'03',
        name:'Samsung A20',
        price:2000,
        description:'El triple B de la tienda , Bueno Bonito Barato ',
        stock:25,
        category:'mas vendidos',
        img:'../samsung.jpeg'
    },
    {
        id:'04',
        name:'I-pad',
        price:8000,
        description:'Ideal para entretener a los niños ',
        stock:5,
        category:'Nuevos',
        img:'../ipad.jpg'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        let error= false
        setTimeout(()=>{
            if(error){
                reject('No hay data ')
            }else{
                resolve(products)
            }
        },3000)
    })
}
export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        let productFound= products.find((prod)=> prod.id === id)
        setTimeout(()=>{
           
            resolve(productFound)
        },1500)
    })
}