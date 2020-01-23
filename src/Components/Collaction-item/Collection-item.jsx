import React from 'react';
import './Collection-item.scss';

const CollectionItem = ({name, price, imgUrl}) => (
    <div className="collection-item">
        <div className="image" 
            style={{backgroundImage: `url(${imgUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
);

export default CollectionItem;