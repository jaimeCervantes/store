var products = [
  {
    name: 'Batman playera',
    description: 'Playera Gris con estampado de batman( en color negro)',
    provider: 'Mascara de Latex',
    category: { _id: 'playeras', ancestors: ['Ropa'] },
    price: {
      amount: 200,
      currency: 'MXN'
    },
    pictures: ['/imgs/store/playeras/batman-gray.jpg']
  },
  {
    name: 'Batman playera',
    description: 'Playera Gris con estampado de batman( en color negro)',
    provider: 'Mascara de Latex',
    category: { _id: 'Playeras', ancestors: ['Ropa'] },
    price: {
      amount: 200,
      currency: 'MXN'
    },
    pictures: ['/imgs/store/playeras/batman-gray.jpg']
  },
  {
    name: 'Batman playera',
    description: 'Playera Gris con estampado de batman( en color negro)',
    provider: 'Mascara de Latex',
    category: { _id: 'Playeras', ancestors: ['Ropa'] },
    price: {
      amount: 200,
      currency: 'MXN'
    },
    pictures: ['/imgs/store/playeras/batman-gray.jpg']
  }
];

models.Product.remove({}, function(err, res){
  if(!err){
    models.Product.create(products, function(error, res){
      if(error){
        console.log(error);
      }

      if(res){
        console.log(res);
      }
      
    });
  }

  if(res){
    console.log(res);
  }
});