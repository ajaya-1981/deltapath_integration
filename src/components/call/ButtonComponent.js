import React, { Fragment } from 'react';

const ButtonComponent = ({ icon, onClick, align, cssClass }) => {
	// const onClick = () => {
	// 	console.log('hi clicked');
	// };
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
// ButtonComponent.defaultProps = { color: 'green' };
export default ButtonComponent;
