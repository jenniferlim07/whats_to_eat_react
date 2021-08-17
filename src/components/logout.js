import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		axiosInstance.post('/api/user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');


		localStorage.removeItem('id');
		localStorage.removeItem('user_name');
		localStorage.removeItem("user");
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});

	return <div>Logout</div>;
}