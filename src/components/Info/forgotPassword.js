import React from 'react';
import { Icon } from 'antd';

const ForgotPassword = () => {
	return(
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Icon type="link" style={{fontSize: 50, margin: "1em"}} />
			<h1>Reset Password Link Has Been Send To Yor Email </h1>
		</div>
	);
}

export default ForgotPassword