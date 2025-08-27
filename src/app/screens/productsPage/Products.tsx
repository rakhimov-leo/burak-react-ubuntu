import React from "react";
import {
  Box,
  Button,
  Container,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";



// ** REDUX SLICE & SELECTOR  **//
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({ products, })
);


const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp", size: "Large Size" },
  {
    productName: "Kebab",
    imagePath: "/img/kebab-fresh.webp",
    size: "Large Size",
  },
  { productName: "Kebab", imagePath: "/img/kebab.webp", size: "Large Size" },
  { productName: "Lavash", imagePath: "/img/lavash.webp", size: "Large Size" },
  { productName: "Lavash", imagePath: "/img/lavash.webp", size: "Large Size" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp", size: "Large Size" },
  {
    productName: "Kebab",
    imagePath: "/img/kebab-fresh.webp",
    size: "Large Size",
  },
  { productName: "Kebab", imagePath: "/img/kebab.webp", size: "Large Size" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"} direction={"row"}>
            <Box className={"title-txt"}>Burak Restaurant</Box>
            <Stack direction="row" className="search-container">
              <Box
                component="input"
                placeholder="Type here"
                className="search-input"
              />
              <Button
                variant="contained"
                className="search-button"
                disableRipple
                endIcon={<SearchIcon />}
              >
                SEARCH
              </Button>
            </Stack>
          </Stack>
          <Stack className={"dishes-filter-section"}></Stack>
          <Stack className={"list-category-section"}></Stack>
          <Stack className={"pagination-section"}></Stack>
        </Stack>

        <Stack className={"dishes-filter-section"}>
          <Stack className={"dishes-filter-box"}>
            <Button variant={"contained"} color={"primary"} className={"order"}>
              New
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Price
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Views
            </Button>
          </Stack>
        </Stack>

        <Stack className={"list-category-section"}>
          <Stack className={"product-category"}>
            <div className={"second-button"}>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order-2"
              >
                Other
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order-2"
              >
                Dessert
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order-2"
              >
                Drink
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order-2"
              >
                Salad
              </Button>
              <Button
                variant={"contained"}
                color={"primary"}
                className="order-2"
              >
                Dish
              </Button>
            </div>
          </Stack>

          <Stack className="product-wrapper">
            {products.length !== 0 ? (
              products.map((product, index) => {
                return (
                  <Stack key={index} className={"product-card"}>
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: ` url(${product.imagePath}) ` }}
                    >
                      <div className="product-sale">${product.size}</div>
                      <Button className="shop-btn">
                        <img
                          src={"/icons/shopping-cart.svg"}
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button className="view-btn" sx={{ right: "36px" }}>
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{
                              color: "gray",
                            }}
                          />
                        </Badge>
                      </Button>
                    </Stack>
                    <Box className="product-desc">
                      <span className="product-title">
                        {product.productName}
                      </span>
                      <div className="product-desc2">
                        <MonetizationOnIcon />
                        12
                      </div>
                    </Box>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Product are not available</Box>
            )}
          </Stack>
        </Stack>

        <Stack className={"pagination-section"}>
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color={"secondary"}
              />
            )}
          />
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container>
          <Stack className="logo-frame">
            <Box className="logo-text">Our Family Brands</Box>
            <Stack className="image-frame" direction={"row"}>
              <Box className="image-shadow">
                <img src="/img/gurme.webp" alt="Gurme" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/seafood.webp" alt="Seafood" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/sweets.webp" alt="Sweets" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/doner.webp" alt="Doner" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"adress-area"}>
            <Box className={"title"}>Our adress</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2412.000914375899!2d71.78244634472276!3d40.38823166536772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb834350f7164d%3A0x72d1aebea1fa66ca!2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3QsNGPINCo0LrQvtC70LAg4oSWMg!5e0!3m2!1sru!2s!4v1753939840441!5m2!1sru!2s"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
