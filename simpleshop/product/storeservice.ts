import { db } from "../firebase/credentials";
import { collection, getDocs, query, where } from "firebase/firestore";
import Product from "interfaces/Product";

const getProducts = async (): Promise<Product[]> => {
  let products = [];

  try {
    const q = query(
      collection(db, "products"),
      where("user", "==", "gegorycelularcelular@gmail.com")
    );
    const snapshot = await getDocs(q);
    products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    // alert(error.error_description || error.message);
  }
};

export default getProducts;
