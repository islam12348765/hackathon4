import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../contexts/ClientContext";
import "./Main.css";

const MainPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <section className="card-list">
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/06/%D1%81%D1%83%D1%88%D0%B8-%D0%B8-%D0%B3%D1%83%D0%BD%D0%BA%D0%B0%D0%BD%D1%8B-120x120.jpg"
              alt=""
            />
            <span>суши </span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <Link to="/rolls">
              <img
                src="https://wasabi.kg/wp-content/uploads/2021/07/kanada-premium-2-120x120.jpg"
                alt=""
              />
              <span>роллы</span>
            </Link>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <Link to="/hotRolls">
              <img
                src="https://wasabi.kg/wp-content/uploads/2021/07/hot-krab-120x120.jpg"
                alt=""
              />
            </Link>
            <span>теплые роллы</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/06/%D1%81%D0%B5%D1%82%D1%8B-120x120.jpg"
              alt=""
            />
            <span>сеты</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/07/rukkola-s-krevetkami-120x120.jpg"
              alt=""
            />
            <span>салаты</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/07/soba-krevetka-120x120.jpg"
              alt=""
            />
            <span>лапша</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/07/krylyshki-buffalo-120x120.jpg"
              alt=""
            />
            <span>салаты</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/07/klab-kurica-120x120.jpg"
              alt=""
            />
            <span>закуски</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/06/%D1%81%D0%BE%D1%83%D1%81%D1%8B-120x120.jpg"
              alt=""
            />
            <span>соусы</span>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <img
              src="https://wasabi.kg/wp-content/uploads/2021/06/%D0%BD%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8-120x120.jpg"
              alt=""
            />
            <span>напитки</span>
          </header>
        </article>
      </section>

      <Container>
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination />
      </Container>
      <div className="article-content">
        <span>
          Суши – это универсальная международная еда, которую понимают и любят
          многие народы. Японская кухня давно перешла из разряда экзотики и
          чего-то экстраординарного в категорию повседневного обыденного. Но и
          здесь нельзя останавливаться на достигнутом. Поэтому у нас можно часто
          увидеть новое меню и необычные кулинарные деликатесы.
        </span>
        <br />
        <span>
          Среди наших новинок – вегетарианские суши, роллы с авокадо, запеченный
          лосось и многое другое. Меню постоянно обновляется, так что следите за
          ассортиментом и текущими трендами.
        </span>
        <br />
        <span>
          Для больших компаний есть отличные разнообразные сеты. Корпоративная
          посиделка в офисе, вечеринка дома, день рождения (для именинников есть
          скидки), торжественное мероприятие, праздник в школе – есть масса
          повод заказать наши суши-сеты. Интересные комбинации роллов подойдут
          на любой вкус: запеченные, вегетарианские, острые, с лососем, в
          темпуре и многое другое.
        </span>
        <br />
        <span>
          Выбирайте свои суши и наслаждайтесь изысканными блюдами от Wasabi.
        </span>
      </div>
    </>
  );
};

export default MainPage;
