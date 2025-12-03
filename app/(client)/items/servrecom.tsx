'use server';
import { getItemsAndCategories, addItem, updateItem, deleteItem, addCategory, updateCategory, deleteCategory } from "./actions";
import ItemsClient from "./cliento";
// import ItemsClient from "./clientconponent";
export default async function ItemsServer() {
  // fetch data on server
  const { items, categories } = await getItemsAndCategories();

  return (
    // pass data + server actions as props so client component can call them
    <ItemsClient
      items={items}
      categories={categories}
      actions={{
        addItem,
        updateItem,
        deleteItem,
        addCategory,
        updateCategory,
        deleteCategory
      //  updateall: async () => await getItemsAndCategories()
      }}
    />
  );
}
