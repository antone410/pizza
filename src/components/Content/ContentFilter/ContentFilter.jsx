import React, {useState} from 'react';
import ContentFilterItem from "./ContentFilterItem/ContentFilterItem";
import './ContentFilter.css'

function ContentFilter(props) {
    const [openFilter, setOpenFilter] = useState(false)
    const[ingredients, setIngredients] = useState([
        {ingredientName: 'грибы', yes: null, no: null},
        {ingredientName: 'лук', yes: null, no: null},
        {ingredientName: 'томаты', yes: null, no: null},
        {ingredientName: 'ананасы', yes: null, no: null},
    ])
    const selectYes = (index) => {
        setIngredients(
            ingredients.map((el,i) => {
                if (i === index) return {...el, yes: true, no: false};
                return el;
            })
        )
    }
    const selectNo = (index) => {
        setIngredients(
            ingredients.map((el,i) => {
                if (i === index) return {...el, yes: false, no: true};
                return el;
            })
        )
    }

    return (
        <div>

            <div className="title" onClick={() => setOpenFilter(!openFilter)}>
                {ingredients.filter(el => el.yes || el.no).map(el => {
                    return <span>{el.ingredientName}</span>
                })}
                Фильтр пиццы по ингридиентам
            </div>

            {openFilter &&  <div className="open">
                <div>Отметьте ингредиенты которые вам нужны и которые не нужны</div>
                <div className='ingredients'>
                    {ingredients.map((ingredient, index) => {
                        return (
                            <ContentFilterItem
                                selectYes={() => selectYes(index)}
                                selectNo={() => selectNo(index)}
                                key={index}
                                ingredient={ingredient}
                            />
                        )
                    })}
                </div>

            </div>}

        </div>

    );
}

export default ContentFilter;