const products = [
    {id: 1, nombre:'moto1', foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 1',price: '$ 500', stock:'', sku:'SKU: BST-498'},
    {id: 2, nombre:'moto2',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 2',price: '$ 1200', stock:'', sku:'BST-497'},
    {id: 3, nombre:'moto3',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 3',price: '$ 300', stock:'', sku:'BST-496'},
    {id: 4, nombre:'moto4',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 4',price: '$ 240', stock:'', sku:'BST-495'},
    {id: 5, nombre:'moto5', foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 5',price: '$ 45700', stock:'', sku:'BST-494'},
    {id: 6, nombre:'moto6',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 6',price: '$ 53222', stock:'', sku:'BST-493'},
    {id: 7, nombre:'moto7',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 7',price: '$ 23000', stock:'', sku:'BST-492'},
    {id: 8, nombre:'moto8',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 8',price: '$ 537889', stock:'', sku:'BST-491'}
]

export const getFetch = new Promise((res) =>{
    setTimeout(() => {
        res(products)
    }, 
    3000);
})