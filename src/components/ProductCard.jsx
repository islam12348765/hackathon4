import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ShoppingCart } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
import "./ProductCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);

  const data = React.useContext(clientContext);
  const { addProductToCart, checkProductInCart, deleteProductInCart } = data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="cardd" sx={{ maxWidth: 330 }}>
      <Link to={`/details/${item.id}`}>
        <CardHeader className="productCard" title={item.name} />
      </Link>
      <CardMedia
        className="product-card-image"
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography
          className="product-card-compound"
          variant="body2"
          color="text.secondary"
        >
          {item.compound}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {checkProductInCart(item.id) ? (
          <IconButton onClick={() => deleteProductInCart(item.id)}>
            <FavoriteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <FavoriteIcon color="inherit" />
          </IconButton>
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        className="product-card-collapse"
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Typography paragraph>{item.compound}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
