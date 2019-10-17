import { listItems as list, getItemById } from "../db/Items";
export const listItems = async (req, res) => {
  const items = await list();
  res.send(items);
};
export const getItem = async (req, res) => {
  const id = req.params.id;
  const item = await getItemById(id);
  res.send(item);
};
