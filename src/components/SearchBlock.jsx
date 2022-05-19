import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Logout } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { clientContext } from "../contexts/ClientContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SearchBlock = () => {
  const data = useContext(clientContext);

  const { getProducts } = data;
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [weightValue, setWeightValue] = useState(filter.get("weight") || "");
  // const [sizeValue, setSizeValue] = useState(filter.get("size") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setWeightValue(filter.get("color") || "");
    // setSizeValue(filter.get("size") || "");
    getProducts();
  };
  const resetFilter = () => {
    setSearchValue("");

    setWeightValue("");
    navigate("/");
    getProducts();
  };

  const newData = React.useContext(clientContext);
  const { authWithGoogle, user, logout, cartCount } = newData;
  return (
    <div className="container">
      <div className="search-block">
        <div className="search-left">
          <Link to="/">
            <img
              width={150}
              src="https://wasabi.kg/wp-content/uploads/2021/06/cropped-logo-1-200x61.png"
              alt="logo"
            />
          </Link>

          <input
            value={searchValue}
            onChange={(e) => handleFilters("q", e.target.value)}
            placeholder="Поиск"
            type="text"
          />
          <FormControl variant="standard">
            <InputLabel className="filter" id="weigth-label">
              вес
            </InputLabel>
            <Select
              className="filter"
              id="demo-simple-select-autowidth"
              value={weightValue}
              onChange={(e) => handleFilters("weight", e.target.value)}
              label="Выберите вес"
              labelId="color-label"
            >
              <MenuItem value="210 гр">210 гр</MenuItem>
              <MenuItem value="230 гр">230 гр</MenuItem>
              <MenuItem value="250 гр">250 гр</MenuItem>
              <MenuItem value="270 гр">270 гр</MenuItem>
            </Select>
          </FormControl>

          <Button className="sbros" variant="outlined" onClick={resetFilter}>
            Сбросить
          </Button>
        </div>

        <div className="search-block-leftside-item">
          <span className="bold">+996 (555) 802 000</span>
          <span className="bold">+996 (505) 802 000</span>
        </div>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {user ? (
            <>
              <Avatar
                src={user.photoURL}
                alt={user.displayName}
                style={{ marginLeft: 10 }}
              />

              <Button>
                <Logout color="error" onClick={logout} />
              </Button>
            </>
          ) : (
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls=""
              aria-haspopup="true"
              color="inherit"
              onClick={authWithGoogle}
            >
              <AccountCircle />
              <div className="auth">Вход / регистрация</div>
            </IconButton>
          )}
        </Box>

        <Box sx={{ display: { md: "flex" }, alignItems: "center" }}>
          <Link to="/cart" style={{ marginLeft: 20 }}>
            <Badge badgeContent={cartCount} color="error">
              <FavoriteIcon />
            </Badge>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default SearchBlock;
