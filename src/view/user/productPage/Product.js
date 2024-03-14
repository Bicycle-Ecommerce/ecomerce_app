import React from "react";
import { Badge, Card, Image, Button } from "antd";
import { numberToVND } from "../../../services/utils/common";
import { Link } from "react-router-dom";

const Product = ({ product, index, url }) => {
  const BadgeHiddenOrNot = {
    display: product.discountPercentage > 0 ? "block" : "none",
  };
  return (
    <div className="max-w-sm m-2">
      <Link
        to={`/san-pham/${url}/${product.id}`}
        state={product.id}
        style={{ textDecoration: "none" }}
      >
        <Badge.Ribbon
          className="p-2 px-3 text-md font-semibold"
          text={`Giảm ${product.discountPercentage}%`}
          color="red"
          style={BadgeHiddenOrNot}
        >
          <Card
            className="group block"
            key={index}
            cover={
              <Image
                preview={false}
                className="md: h-3/4 transition-all group-hover:cursor-pointer group-hover:transform duration-300 group-hover:scale-105"
                src={product.thumbnail}
              />
            }
          >
            <Card.Meta
              title={
                <div className="text-center">
                  {/* i want to align size of this text when screen is small */}
                  <p>{product?.title}</p>
                  <br />
                  <div className="flex gap-2 justify-center">
                    {product.discountPercentage > 0 && (
                      <p className="font-normal self-center line-through">
                        {numberToVND(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        )}
                      </p>
                    )}
                    <p className="text-red-500 text-2xl">
                      {numberToVND(product.price)}
                    </p>
                  </div>
                  <Button className="bg-primary text-white font-semibold hover:bg-blue-500 hover:text-dark-7">
                    Xem chi tiết
                  </Button>
                </div>
              }
              style={{ height: "20%" }}
            ></Card.Meta>
          </Card>
        </Badge.Ribbon>
      </Link>
    </div>
  );
};
export default Product;
