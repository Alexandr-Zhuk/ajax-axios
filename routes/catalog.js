const express = require('express');

const router = express.Router();

const products = [
    {
        id: 1, 
        name: 'Мобільний телефон Samsung Galaxy S23 Ultra 12/256GB Phantom Black',
        brand: 'Samsung',
        sku: 'SM-S918BZKGSEK',
        price: 57999,
        ram: '12GB',
        rom: '256GB',
        display: 'AMOLED',
        displaySize: '6.8"'
    },
    {
        id: 2, 
        name: 'Мобільний телефон Apple iPhone 14 128GB Midnight',
        brand: 'Apple',
        sku: 'MPUF3RX/A',
        price: 35999,
        ram: '8GB',
        rom: '128GB',
        display: 'OLED',
        displaySize: '6.1"'
    },
    {
        id: 3, 
        name: 'Мобільний телефон Apple iPhone 14 Pro 128GB Space Black',
        brand: 'Apple',
        sku: 'MPXV3RX/A',
        price: 46999,
        ram: '8GB',
        rom: '128GB',
        display: 'OLED',
        displaySize: '6.1"'
    },
    {
        id: 4, 
        name: 'Мобільний телефон Apple iPhone 14 Pro Max 128GB Deep Purple',
        brand: 'Apple',
        sku: 'MQ9T3RX/A',
        price: 50999,
        ram: '10GB',
        rom: '128GB',
        display: 'OLED',
        displaySize: '6.7"'
    },
    {
        id: 5, 
        name: 'Мобільний телефон Samsung Galaxy S23 8/128GB Phantom Black',
        brand: 'Samsung',
        sku: 'SM-S911BZKDSEK',
        price: 39999,
        ram: '8GB',
        rom: '128GB',
        display: 'AMOLED',
        displaySize: '6.1"'
    },
    {
        id: 6, 
        name: 'Мобільний телефон Samsung Galaxy S22 8/128 GB Green',
        brand: 'Samsung',
        sku: 'SM-S901BZGDSEK',
        price: 27899,
        ram: '8GB',
        rom: '128GB',
        display: 'AMOLED',
        displaySize: '6.1"'
    },
    {
        id: 7, 
        name: 'Смартфон Xiaomi 12 12/256GB Pink',
        brand: 'Xiaomi',
        sku: '370084698',
        price: 29552,
        ram: '12GB',
        rom: '256GB',
        display: 'AMOLED',
        displaySize: '6.28"'
    },
    {
        id: 8, 
        name: 'Мобільний телефон Xiaomi 12T 8/256GB Black',
        brand: 'Xiaomi',
        sku: '355762332',
        price: 21999,
        ram: '8GB',
        rom: '256GB',
        display: 'AMOLED',
        displaySize: '6.67"'
    },
    {
        id: 9, 
        name: 'Смартфон Realme GT2 Pro 8/128GB Steel Black Europe',
        brand: 'Realme',
        sku: '375078426',
        price: 26206,
        ram: '8GB',
        rom: '128GB',
        display: 'AMOLED',
        displaySize: '6.7"'
    },
    {
        id: 10, 
        name: 'Смартфон realme GT Neo3 12/256GB 150W Black',
        brand: 'Realme',
        sku: '371938029',
        price: 26116,
        ram: '12GB',
        rom: '256GB',
        display: 'AMOLED',
        displaySize: '6.7"'
    }
];

router.get('/', (req, res) => {
    res.render('catalog');
    
});

router.get('/list', (req, res) => {
    console.log(req.query.ram);

    
    let filteredData = products;
    if(req.query.ram){
        filteredData = filteredData.filter(item => (item.ram === req.query.ram));
    }

    if(req.query.brand){
        filteredData = filteredData.filter(item => (item.brand === req.query.brand));
    }
    
    res.json(filteredData);
    
});


module.exports = router;