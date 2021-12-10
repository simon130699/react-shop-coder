const OneProduct = {id: 11, nombre:'moto8',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 8',price: '$ 537889', stock:'', sku:'SKU: BST-490'}


export const getOneProduct = new Promise((res) =>{
    setTimeout(() => {
        res(OneProduct)
    }, 
    2000);
})
