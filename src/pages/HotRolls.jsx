import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const HotRolls = () => {
  const data = useContext(clientContext);
  const { hotRolls, getHotRolls } = data;

  useEffect(() => {
    getHotRolls();
  }, []);

  return (
    <Container>
      <div className="products-page">
        <h2>Теплые роллы</h2>
      </div>
      <div className="products-list">
        {hotRolls.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default HotRolls;
