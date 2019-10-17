import Mongoose from "mongoose";
import cartSchema from "../schema/cart.schema";
import { getItemsById } from "./Items";
const Cart = Mongoose.model("carts", cartSchema);

export async function createCart(items, id) {
  try {
    const itemsDetail = await getItemsById(items);
    const totalPrice = itemsDetail
      .map(val => val.price)
      .reduce((a, b) => a + b);
    const totalDiscountPrice = itemsDetail
      .map(val => val.discountPrice)
      .reduce((a, b) => a + b);
    const cart = new Cart({
      items,
      price: totalPrice,
      discountPrice: totalDiscountPrice,
      savings: totalPrice - totalDiscountPrice
    });

    if (id) {
      const result = await Cart.findByIdAndUpdate(
        id,
        {
          $set: {
            items: cart.items,
            discountPrice: cart.discountPrice,
            price: cart.price
          }
        },
        { new: true }
      );
      return result;
    } else {
      const result2 = cart.save();
      return result2;
    }
  } catch (error) {
    return error;
  }
}

export async function getCartById(id) {
  const cart = await Cart.findOne({ _id: id });
  const itemsDetail = await getItemsById(cart.items);
  return { ...cart._doc, itemDetails: itemsDetail };
}
