import { Container, TextField } from "@mui/material";
import React from "react";

const Registration = () => {
  return (
    <div>
      <Container>
        <div className="oform">
          <h2>Оформление заказа</h2>
        </div>
        <h3>Ваши контактные данные</h3>
        <div className="form">
          <div className="form-sername">
            <TextField id="outlined-basic" label="Фамилия" variant="outlined" />
            <TextField id="outlined-basic" label="Имя" variant="outlined" />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="мобильный телефон:996555555555"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
