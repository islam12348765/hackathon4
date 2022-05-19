import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../contexts/AdminContext";

const Edit = () => {
  const data = React.useContext(adminContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductToEdit(params.id);
  }, [getProductToEdit, params.id]);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Редактировать товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                compound: e.target.value,
              })
            }
            value={editedProduct.compound}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            value={editedProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="weight-select-label">Выберите вес</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, weight: e.target.value })
              }
              value={editedProduct.weight}
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
            Сохранить изменения
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Edit;
