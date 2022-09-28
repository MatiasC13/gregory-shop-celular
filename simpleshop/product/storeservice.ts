import Product from "interfaces/Product";
import { supabase } from "../client/supabase";

const getProducts = async (): Promise<Product []> => {
  // const user = supabase.auth.user();

  try {
    const { error, data } = await supabase
      .from("products")
      .select("id, title,description,price,category, image, boost")

      .eq("userId", "a90c2200-e86f-4654-8aad-a342e5d31b63");

    // .order("id", { ascending: false });

    if (error) {
      throw error;
    }
    console.log("data: ", data);
    return data;
  } catch (error) {
    // alert(error.error_description || error.message);
  }
};

export default getProducts;
