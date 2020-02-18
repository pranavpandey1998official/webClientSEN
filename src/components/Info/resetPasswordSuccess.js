import React from 'react';
import { Icon } from 'antd';

const ResetPasswordSuccess = () => {
	return(
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Icon type="check-circle" style={{fontSize: 50, margin: "1em"}} />
			<h1>Your Password Has Been Successfully changed, Please login in With your new Password</h1>
		</div>
	)
}

export default ResetPasswordSuccess;