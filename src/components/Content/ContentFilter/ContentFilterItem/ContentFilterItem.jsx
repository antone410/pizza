import * as React from 'react';
import './ContentFilterItem.css'



function ContentFilterItem({ingredient,selectYes,selectNo}) {
    return (
        <div className="filter-item">
            <div className="yes-no-menu">
                <span onClick={selectYes} className={ingredient.yes ? 'asd' : null}>yes</span>
                <span onClick={selectNo} className={ingredient.no ? 'asd' : null}>no</span>
            </div>
            <div>{ingredient.ingredientName}</div>
        </div>
    );
}

export default ContentFilterItem;