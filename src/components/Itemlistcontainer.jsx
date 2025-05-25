
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoader(true);
        const productsCollection = categoryId
          ? query(collection(db, "productos"), where("category", "==", categoryId))
          : collection(db, "productos");

        const res = await getDocs(productsCollection);

        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(list);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      {loader ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1>
            {greeting}{" "}
            {categoryId && <span style={{ textTransform: "capitalize" }}>{categoryId}</span>}
          </h1>
          {data.length > 0 ? (
            <ItemList data={data} />
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>
              No se encontraron productos en esta categoría.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
