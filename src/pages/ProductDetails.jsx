import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";

const ProductDetails = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback } = data;
  const params = useParams();
  const [feedbackValue, setFeedbackValue] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      title: feedbackValue.trim(),
      user: feedbackUser.trim(),
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните поля");
        return;
      }
    }

    addFeedback(newFeedback, productDetails);
    setFeedbackUser("");
    setFeedbackValue("");
  };

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  if (!productDetails) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Container>
        <div className="product-details">
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <li>
                <strong>Цена:</strong>
                {productDetails.price}
              </li>

              <li>
                <strong>вес</strong>
                {productDetails.weight}
              </li>
              <li>
                <strong>Описание:</strong>
                {productDetails.compound}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-details-feedback">
          <h3>Отзывы</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              value={feedbackUser}
              onChange={(e) => setFeedbackUser(e.target.value)}
              type="text"
              variant="standard"
              label="Введите ваше имя"
              style={{ marginBottom: 15 }}
            />
            <TextField
              value={feedbackValue}
              label="Введите ваш отзыв"
              onChange={(e) => setFeedbackValue(e.target.value)}
              type="text"
              multiline
              maxRows={5}
              minRows={3}
              style={{ marginBottom: 15 }}
            />
            <Button type="submit" variant="outlined">
              Оставить отзыв
            </Button>
          </form>
          <div>
            {productDetails.feedbacks?.map((item, index) => (
              <div key={index} className="feedback">
                <h5>{item.user}</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
