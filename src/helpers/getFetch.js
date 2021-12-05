const products = [
    {id: 1, nombre:'moto1', foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 1',price: '$ 500', stock:''},
    {id: 2, nombre:'moto2',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 2',price: '$ 1200', stock:''},
    {id: 3, nombre:'moto3',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 3',price: '$ 300', stock:''},
    {id: 4, nombre:'moto4',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 4',price: '$ 240', stock:''},
    {id: 5, nombre:'moto5', foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 5',price: '$ 45700', stock:''},
    {id: 6, nombre:'moto6',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 6',price: '$ 53222', stock:''},
    {id: 7, nombre:'moto7',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 7',price: '$ 23000', stock:''},
    {id: 8, nombre:'moto8',  foto:'https://http2.mlstatic.com/D_NQ_NP_967879-MLA47132963322_082021-O.webp', description:'lorem ipsum 8',price: '$ 537889', stock:''}
]

export const getFetch = new Promise((res) =>{
    setTimeout(() => {
        res(products)
    }, 
    2000);
})