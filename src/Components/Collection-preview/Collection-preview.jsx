import React from 'react';
import './Collection-preview.scss';
import '../Collaction-item/Collection-item';
import CollectionItem from '../Collaction-item/Collection-item';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
    </div>
);

export default CollectionPreview;