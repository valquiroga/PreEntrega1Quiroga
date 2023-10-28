const products = [
    {
        id:'1',
        name:'White Tee',
        price: '100',
        category: 'top',
        img:'https://img.freepik.com/foto-gratis/,vista-posterior-hombre-ropa-casual_23-2148542671.jpg',
        stock: 25,
        description: 'Descripcion de White Tee'
    },
    {
        id:'2',
        name:'Beige pants',
        price: '200',
        category: 'bottom',
        img:'https://img.freepik.com/foto-gratis/hombre-vestido-pantalones-marrones-cerca_53876-102239.jpg',
        stock: 20,
        description: 'Descripcion de Beige pants'
    },
    {
        id:'3',
        name:'White hat',
        price: '50',
        category: 'accesory',
        img:'https://img.freepik.com/foto-gratis/hombre-llevando-camisa-blanco_23-2149347484.jpg',
        stock: 50,
        description: 'Descripcion de White hat'
    },

]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 100)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}
