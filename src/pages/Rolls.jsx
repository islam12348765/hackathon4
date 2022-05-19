import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";

const Rolls = () => {
  const data = useContext(clientContext);
  const { rolls, getRolls } = data;

  useEffect(() => {
    getRolls();
  }, []);

  return (
    <Container>
      <div className="products-page">
        <h2>Роллы</h2>
      </div>
      <div className="products-list">
        {rolls.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default Rolls;
