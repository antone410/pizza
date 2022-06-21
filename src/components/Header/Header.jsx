import React from "react";
import './Header.css';

function Header() {


    return <header>
        <div className="main_info">
            <div className="main_item">
                Первая квадратная пицца в России! <br/>
                На четыре куска больше!
            </div>
            <div className="main_item">
                Вс–Чт 10:00 – 22:00 <br/>
                Пт–Сб 10:00 – 00:00
            </div>
            <div className="main_item">
                +7 831 260-10-60 <br/>
                Выбрать: Н. Новгород
            </div>
            <div className="main_item">корзина</div>
        </div>

        <nav className="nav">
            <span>Пицца</span>
            <span>Акции</span>
            <span>Отзывы</span>
            <span>Область доставки</span>
            <span>Наши приемущества</span>
            <span>Добрые дела</span>
            <span>Контакты</span>
            <span>Вакансии</span>
        </nav>
    </header>;
}

export default Header;