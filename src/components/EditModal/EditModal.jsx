import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditModal = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    productToEdit,
    saveProduct,
    setProductToEdit,
  } = props;

  const [name, setName] = useState(productToEdit.name);
  const [compound, setCompound] = useState(productToEdit.compound);
  const [price, setPrice] = useState(productToEdit.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedProduct = {
      name: name.trim(),
      compound: compound.trim(),
      price,
      id: productToEdit.id,
    };
    saveProduct(editedProduct);
  };

  return (
    <div>
      <Modal
        show={isModalOpen}
        onHide={() => {
          setProductToEdit(null);
          setIsModalOpen(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Редактировать товар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Название</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Введите название"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
                typr="text"
                placeholder="Введите описание"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Цена</Form.Label>
              <Form.Control
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                type="text"
                placeholder="Введите цену"
              />
            </Form.Group>
            <Button type="submit">Сохранить изменения</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditModal;
