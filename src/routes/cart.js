import { createCart as create, getCartById } from "../db/Cart";
export const createCart = async (req, res) => {
  const itemIds = req.body.items;
  const id = req.body.id;
  const cart = await create(itemIds, id);
  res.send(cart);
};
export const getCart = async (req, res) => {
  const id = req.params.id;
  const cart = await getCartById(id);
  console.log("cart", cart);
  res.send(cart);
};
