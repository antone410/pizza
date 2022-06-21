import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <h1>Альфредо</h1>
            <p className="banner_text">
                ВСТРЕЧАЕМ НЕЖНЫЙ ИТАЛЬЯНСКИЙ ВКУС С КУСОЧКАМИ СОЧНОЙ КУРИЦЫ НА ОСНОВЕ СОУСА ALFREDO И СЫРА ПАРМЕЗАНА.
                И КОНЕЧНО ЖЕ МНОГО-МНОГО СЫРА МОЦАРЕЛЛА ДЛЯ ПРИДАНИЯ ПИКАНТНОГО ВКУСА
            </p>
            <input type="button" value="Заказать пиццу"/>
        </div>
    );
}

export default Banner;