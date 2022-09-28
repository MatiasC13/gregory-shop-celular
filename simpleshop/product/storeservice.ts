import Product from "interfaces/Product";
import { supabase } from "../client/supabase";

const getProducts = async (): Promise<Product []> => {
  // const user = supabase.auth.user();

  try {
    const { error, data } = await supabase
      .from("products")
      .select("id, title,description,price,category, image, boost")

      .eq("userId", "329fd310-d492-43ea-a85a-3d92df8ceafd");

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
