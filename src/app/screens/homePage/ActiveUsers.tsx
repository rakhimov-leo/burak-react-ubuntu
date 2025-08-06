import React from "react";
import { Box, Stack, Container } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";

const activeUsers = [
  { memberNick: "Martin", imagePath: "/img/martin.webp" },
  { memberNick: "Justin", imagePath: "/img/justin.webp" },
  { memberNick: "Rose", imagePath: "/img/rose.webp" },
  { memberNick: "Nusret", imagePath: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="homepage">
      <div className="active-users-frame">
        <Container>
          <Stack className="main">
            <Box className="category-title">Active User</Box>
            <Stack className="cards-frame">
              <CssVarsProvider>
                {activeUsers.length !== 0 ? (
                  activeUsers.map((ele, index) => (
                    <Card key={index} variant="outlined" className="user-card">
                      <CardOverflow>
                        <img
                          className="user-image"
                          src={ele.imagePath}
                          alt={ele.memberNick}
                        />
                      </CardOverflow>
                      <CardContent className="user-card-desc">
                        <Typography level="body-md">
                          {ele.memberNick}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Box className="no-data">No Active Users!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
