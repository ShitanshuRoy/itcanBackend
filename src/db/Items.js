import Mongoose from "mongoose";
import itemSchema from "../schema/items.schema";
const Item = Mongoose.model("item", itemSchema);
export async function listItems() {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    return error;
  }
}
export async function getItemById(id) {
  try {
    const item = await Item.findOne({ _id: id });
    return item;
  } catch (error) {
    return error;
  }
}

export async function getItemsById(ids) {
  try {
    const items = await Item.find({ _id: { $in: [...ids] } });
    return items;
  } catch (error) {
    return error;
  }
}
