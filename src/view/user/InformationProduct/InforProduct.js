import { useLocation } from "react-router-dom";
import { Button, notification, Spin } from "antd";
import { numberToVND } from "../../../services/utils/common";
import { ProductsCartContext } from "../store/products-cart-context";
import React, { useEffect, useState, useContext } from "react";
import ProductDetailCard from "./ProductDetailCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";

const InforProduct = () => {
  const { addToCart, items } = useContext(ProductsCartContext);
  const [stateOfProduct, setStateOfProduct] = useState({
    product: null,
    url: "",
  });
  let { pathname } = useLocation();
  useEffect(() => {
    let productId = pathname.split("/")[3];
    const getProduct = async (productId) => {
      const q = query(collection(db, "products"), where("id", "==", productId));
      const querySnapShot = await getDocs(q);
      const data = querySnapShot.docs.map((doc) => doc.data());
      return data;
    };
    getProduct(productId).then((data) => {
      setStateOfProduct({
        product: data[0],
        url: pathname.split("/")[2],
      });
    });
  }, [pathname]);

  const openNotification = (title, message) => {
    notification.open({
      message: title,
      description: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(stateOfProduct.product, e.target[0].value, stateOfProduct.url);
    openNotification("Thông Báo", "Thêm vào giỏ hàng thành công");
    console.log(items);
  };

  return !stateOfProduct.product ? (
    <Spin
      style={{
        display: "block",
        margin: "0 auto",
        padding: "70px 100px",
      }}
    />
  ) : (
    <div className="">
      <div className="flex flex-col md:flex sm:flex-row">
        <div className="w-auto flex justify-center ">
          <ProductDetailCard
            Images={stateOfProduct?.product.thumbnail}
            DiscountPercentage={stateOfProduct?.product.discountPercentage}
          />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col bg-[#cfcfcf2b] p-4">
          <div className="">
            <div className="min-h-5 font-bold text-2xl text-[#262626] ">
              <p className="font-mono">{stateOfProduct?.product.title}</p>
            </div>
            <p className="w-1/3 block text-2xl font-semibold overflow-visible ">
              Hãng: {stateOfProduct?.product.brand}
            </p>
            {stateOfProduct?.product.discountPercentage > 0 && (
              <p className="w-1/3 block font-semibold line-through text-gray-500 text-3xl md:text-2xl ">
                {numberToVND(
                  stateOfProduct?.product.price +
                    (stateOfProduct?.product.price *
                      stateOfProduct?.product.discountPercentage) /
                      100
                )}
              </p>
            )}
            <p className="w-1/3 block font-bold text-red-500 text-3xl md:text-2xl">
              {numberToVND(stateOfProduct?.product.price)}
            </p>{" "}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-1 items-center">
              <input
                type="number"
                min={1}
                step={1}
                name="quantity"
                defaultValue={1}
                className="w-1/3 block border border-gray-300 p-2 rounded-md"
              />
              <Button
                type="primary"
                htmlType="submit"
                className="bg-primary text-white hover:bg-blue-700 hover:text-dark-7"
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
