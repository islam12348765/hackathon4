import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { adminContext } from "../contexts/AdminContext";

const Add = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    compound: "",
    image: "",
    price: "",
    weight: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setNewProduct({
      name: newProduct.name.trim(),
      description: newProduct.compound.trim(),
      image: newProduct.image.trim(),
      price: newProduct.price.trim(),
      weight: newProduct.weight.trim(),
    });

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      compound: "",
      image: "",
      price: "",
      weight: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, compound: e.target.value })
            }
            value={newProduct.compound}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите вес</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, weight: e.target.value })
              }
              value={newProduct.weight}
              label="Выберите вес"
              labelId="weight-select-label"
            >
              <MenuItem value="210 гр">210 гр</MenuItem>
              <MenuItem value="230 гр">230 гр</MenuItem>
              <MenuItem value="250 гр">250 гр</MenuItem>
              <MenuItem value="270 гр">270 гр</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="outlined">
            Добавить
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Add;
