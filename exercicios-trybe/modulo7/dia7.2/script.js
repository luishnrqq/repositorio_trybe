const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const entregador = order.order.delivery.deliveryPerson;
    const entregarPara = order.name;
    const telefone = order.phoneNumber;
    const endereco = order.address.street;
    const nro = order.address.number;
    const ape = order.address.apartment;
    return console.log(`Olá ${entregador}, entrega para: ${entregarPara}, Telefone: ${telefone}, R.${endereco}, Nº:${nro},AP:${ape}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoEntregarPara = order.name = 'Luis Silva';
    const saborPizza = Object.keys(order.order.pizza);
    const bebida = Object.values(order.order.drinks.coke);
    const total = order.payment.total = '50,00';
    return console.log(`Olá ${novoEntregarPara}, o total do seu pedido de ${saborPizza[0]},${saborPizza[1]} e ${bebida[0]} é R$ ${total}`);
  }
  
  orderModifier(order);