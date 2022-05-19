import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-left">
          <div className="menu">
            <span>Работаем с 10:00 до 02:00</span>
            <span>Бесплатная доставка от 700 сом</span>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-list">
            <a href="http://localhost:3000/">Меню</a>
            <a href="http://localhost:3000/o-nas">О нас</a>
            <a href="http://localhost:3000/admin-panel">Админ-панель</a>
            <a href="http://localhost:3000/admin-panel/add">Создать</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
