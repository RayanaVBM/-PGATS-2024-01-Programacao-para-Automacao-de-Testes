const {calcularTotal} = require("./compras/compras")


const ferramentas = calcularTotal
 [
{ nome: "UFT", preco: 100, fabricante: "OpenText" },
{ nome: "TestComplete", preco: 200, fabricante: "Smartbear" },
{ nome: "TOSCA", preco: 300, fabricante: "Tricents" }
];

const comprar = [ "UFT", "TOSCA" ];

const resultado = calcularTotal(ferramentas, comprar);