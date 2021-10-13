import React, { Fragment } from 'react';

const ButtonComponent = ({ icon, onClick, align, cssClass }) => {
	return (
		<Fragment>
			<button
				className={cssClass}
				style={{ float: align }}
				onClick={() => onClick()}
			>
				<i className={icon}></i>
			</button>
			{/* <button className='btn btn-success  history'>
				<i className='fa fa-history'></i>
			</button> */}
		</Fragment>
	);
};
export default ButtonComponent;
