import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block-leftside">
        <div className="footer-block-leftside-item">
          <img
            width={200}
            src="https://wasabi.kg/wp-content/uploads/2021/06/cropped-logo-1-200x61.png"
            alt="logo-footer"
          />
        </div>
      </div>

      <div className="footer-block-rightside">
        <div className="footer-block-rightside-item">
          <span className="bold">Меню</span>
          <Link>
            <span>Роллы </span>
          </Link>
          <Link>
            <span>Суши</span>
          </Link>
          <Link>
            <span>Теплые роллы</span>
          </Link>
          <Link>
            <span>Сеты</span>
          </Link>
          <Link>
            <span>Салаты</span>
          </Link>
          <Link>
            <span>Лапша</span>
          </Link>
          <Link>
            <span>Супы</span>
          </Link>
          <Link>
            <span>Горячая закуска</span>
          </Link>
          <Link>
            <span>Добавки и соусы</span>
          </Link>
        </div>
        <div className="footer-block-rightside-item">
          <span className="bold">Покупателям</span>
          <Link>
            <span>О нас</span>
          </Link>
          <Link>
            <span>Меню</span>
          </Link>
          <Link>
            <span>Услуги</span>
          </Link>
          <Link>
            <span>Корзина</span>
          </Link>
        </div>
        <div className="footer-block-rightside-item">
          <span className="bold">Контакты</span>
          <span>0 505 41 07 07</span>

          <span className="bold">Адрес</span>
          <span>Бишкек, ул. Московская, 51</span>

          <span className="bold">Режим работы</span>
          <span>Ежедневно с 10:00 до 02:00</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
