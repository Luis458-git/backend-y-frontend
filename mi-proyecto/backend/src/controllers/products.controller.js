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

export const createProduct = (req, res) => {
  const { name, category, price, stock } = req.body ?? {};

  if (
    typeof name !== 'string' ||
    name.trim() === '' ||
    typeof category !== 'string' ||
    category.trim() === '' ||
    typeof price !== 'number' ||
    !Number.isFinite(price) ||
    price < 0 ||
    !Number.isInteger(stock) ||
    stock < 0
  ) {
    return res.status(400).json({
      message: 'Envía nombre y categoría, precio válido y stock entero no negativo.',
    });
  }

  const newProduct = {
    id: Math.max(0, ...products.map((product) => product.id)) + 1,
    name: name.trim(),
    category: category.trim(),
    price,
    stock,
  };

  products.push(newProduct);

  return res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado.',
    });
  }

  const { name, category, price, stock } = req.body ?? {};

  if (
    typeof name !== 'string' ||
    name.trim() === '' ||
    typeof category !== 'string' ||
    category.trim() === '' ||
    typeof price !== 'number' ||
    !Number.isFinite(price) ||
    price < 0 ||
    !Number.isInteger(stock) ||
    stock < 0
  ) {
    return res.status(400).json({
      message: 'Envía nombre y categoría, precio válido y stock entero no negativo.',
    });
  }

  product.name = name.trim();
  product.category = category.trim();
  product.price = price;
  product.stock = stock;

  return res.json(product);
};

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: 'Producto no encontrado.',
    });
  }

  const [product] = products.splice(index, 1);

  return res.json({
    message: 'Producto eliminado correctamente.',
    product,
  });
};
