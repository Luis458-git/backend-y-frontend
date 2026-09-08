const products = [
  { id: 1, name: 'Camiseta básica', category: 'Camisetas', price: 15, stock: 30 },
  { id: 2, name: 'Pantalón de mezclilla', category: 'Pantalones', price: 40, stock: 20 },
  { id: 3, name: 'Sudadera', category: 'Sudaderas', price: 35, stock: 15 },
  { id: 4, name: 'Vestido casual', category: 'Vestidos', price: 45, stock: 12 },
  { id: 5, name: 'Zapatillas deportivas', category: 'Calzado', price: 60, stock: 25 },
];

export const getProducts = (req, res) => {
  res.json(products);
};
