import React from 'react';
import './Menu-item.scss';

const MenuItem = ({ title, subtitle, imgUrl, size }) => (
	<div className={`${size} menu-item`}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imgUrl})`
			}}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">{subtitle.toUpperCase()}</span>
		</div>
	</div>
);

export default MenuItem;
