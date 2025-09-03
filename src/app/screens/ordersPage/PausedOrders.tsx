import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";

// ** REDUX SLICE & SELECTOR  **//
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  console.log(imagePath);
                  return (
                    <Box key={item._id} className={"order-name-price"}>
                      <img src={imagePath} className={"order-dish-img"} />
                      <Stack
                        sx={{
                          width: 650,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <p className={"title-dish"}>{product.productName}</p>
                        <Box className={"price-box"}>
                          <p>${item.itemPrice}</p>
                          <img src={"/icons/close.svg"} />
                          <p>{item.itemQuantity}</p>
                          <img src={"/icons/pause.svg"} />
                          <p style={{ marginLeft: "15px" }}>
                            ${item.itemQuantity * item.itemPrice}
                          </p>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  className={"cancel-button"}
                >
                  Cancel
                </Button>
                <Button variant="contained" className={"pay-button"}>
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justify-content={"center"}
            >
              <img
                src="/icons/noimage-list.svg"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
