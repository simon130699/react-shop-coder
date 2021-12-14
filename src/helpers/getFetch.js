const products = [
    {id: 1, nombre:'S20 FF', foto:'http://medias.musimundo.com/medias/00367048-142839-142839-01-142839-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0MjM4OHxpbWFnZS9qcGVnfGg3Ni9oMmQvMTAzMjEyMTgzMDYwNzgvMDAzNjcwNDgtMTQyODM5LTE0MjgzOV8wMS0xNDI4MzlfMDEuanBnX3NpemUzMDB8NDU0NWIxMzIzOWJiNTljNzYzY2Q2NjBkYjYxNDE3ODJiM2M3YTdjMDdjYTlmY2ExNTk3NTg1YjExNWNiMGM4Mg', categorias:'celulares',  description:'lorem ipsum 1',price: '$ 500', stock:'', sku:'SKU: BST-498'},
    {id: 2, nombre:'A20 S',  foto:'https://http2.mlstatic.com/D_Q_NP_852458-MLA48270995220_112021-AB.jpg', categorias:'celulares', description:'lorem ipsum 2',price: '$ 1200', stock:'', sku:'BST-497'},
    {id: 3, nombre:'Iphone',  foto:'https://www.macstation.com.ar/img/productos/small/2187-1.jpg', categorias:'celulares', description:'lorem ipsum 3',price: '$ 300', stock:'', sku:'BST-496'},
    {id: 4, nombre:'RCA',  foto:'https://www.estilonet.com.ar/wp-content/uploads/DM50X7500-300x300.jpg', categorias:'televisores', description:'lorem ipsum 4',price: '$ 240', stock:'', sku:'BST-495'},
    {id: 5, nombre:'Samsung', foto:'https://m.media-amazon.com/images/I/A1LBkD12AHL._AC_SS300_.jpg', categorias:'televisores', description:'lorem ipsum 5',price: '$ 45700', stock:'', sku:'BST-494'},
    {id: 6, nombre:'Patrick',  foto:'https://images.fravega.com/f300/bd02cd78c0aca876c15ef9b6a7befef1.jpg.webp', categorias:'heladeras', description:'lorem ipsum 6',price: '$ 53222', stock:'', sku:'BST-493'},
    {id: 7, nombre:'Samsung',  foto:'https://http2.mlstatic.com/D_Q_NP_982390-MLA41134716603_032020-AB.jpg', categorias:'heladeras', description:'lorem ipsum 7',price: '$ 23000', stock:'', sku:'BST-492'},
    {id: 8, nombre:'Tophouse',  foto:'https://miliffi.com.ar/wp-content/uploads/2021/11/Heladera-Ciclica-kanji-dk108f-silver-125lt-miliffi-300x300.png', categorias:'heladeras', description:'lorem ipsum 8',price: '$ 537889', stock:'', sku:'BST-491'}
]

export const getFetch = new Promise((res) =>{
    setTimeout(() => {
        res(products)
    }, 
    );
})