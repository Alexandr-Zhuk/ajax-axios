const productList = document.querySelector('.product-list');

const showProducts = async () => {

    let params = window.location.search.replace('?','').split('&');

    const fullUrl = () =>{
        let baseUrl = '/catalog/list'
        if(params){
            baseUrl += '?';
            params.forEach(item => baseUrl += item + '&');
            baseUrl = baseUrl.slice(0, -1);
            return baseUrl;
        }

        
    };
 
    const products = await axios.get(fullUrl());
    

    for(let i = 0; i < products.data.length; i++){

        
        let html = `<div class="prod-item">
            <div class="prod-name">Product: ${products.data[i].name}</div>
            <div class="prod-brand">Brand: ${products.data[i].brand}</div>
            <div class="prod-price">Price: ${products.data[i].price} UAH</div>
        </div>`;
        
        productList.innerHTML += html;
    };
};

showProducts();

