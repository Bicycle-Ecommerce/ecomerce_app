import React, { useContext, useState } from "react";
import { Breadcrumb, Button, Layout, Spin, theme } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
// import AppHeader from "./partials/header/Header";
import PageContent from "./pageContent";
import AppSider from "./partials/sider";
import { ProductsFromDataBaseContext } from "./store/products-from-database-context";
import ButtonForContact from "./partials/buttonForContacing/ButtonForContact";

const { Content, Footer } = Layout;

const UserPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { products } = useContext(ProductsFromDataBaseContext);

  return (
    <Layout className="min-h-screen">
      <div className="fixed z-50 w-full">
        <AppSider collapsed={collapsed} onCollapse={setCollapsed} />
      </div>
      {/* <AppHeader /> */}
      <Content
        style={{
          margin: "0 16px",
        }}
        className="mt-6"
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          {/* <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
            <Breadcrumb.Item>Xe đạp</Breadcrumb.Item> */}
        </Breadcrumb>
        {products.length === 0 ? (
          <Spin
            style={{
              display: "block",
              margin: "0 auto",
              padding: "70px 100px",
            }}
          />
        ) : (
          <PageContent color={colorBgContainer} />
        )}
      </Content>
      {/* this below button just for scrolling to top */}
      <Button
        // scroll to the top
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
            // i want to slow that//
          });
        }}
        className="fixed bottom-5 right-5 bg-white border-2 border-gray-300 rounded-xl h-auto"
      >
        <UpCircleOutlined className="text-3xl" />
      </Button>
      <div className="fixed bottom-3 left-2">
        <ButtonForContact />
      </div>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default UserPage;
