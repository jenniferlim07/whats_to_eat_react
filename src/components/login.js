import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory, Link } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import images from '../images/indulge-restaurant.jpg';
import '../App.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		user_name: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	// function getCurrentUser(id) {
	// 	const user = id;
	// 	console.log("*** USER ", user);
	// 	return user;
	// }

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);

		axiosInstance
			.post(`/api/token/`, {
				user_name: formData.user_name,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				localStorage.setItem('id', res.data.id);
				localStorage.setItem('user_name', res.data.user_name);

				localStorage.setItem('user', JSON.stringify(res.data));

				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/');
				// console.log(res);
				console.log(res.data);
				// console.log(res.data.id)
				// getCurrentUser(res.data.id)
			});
	};

	// const getCurrentUser = () => {
	// 	return JSON.parse(localStorage.getItem("user"));
	// }

	const classes = useStyles();

	// if (localStorage.getItem('access_token')) {
	// 	history.push('/homepage')
	// }

	return (
		// <Container component="main" maxWidth="xs">
		<Container>
			{/* <CssBaseline /> */}
			<div className="app">
				<div className="card-login">

			{/* <div className={classes.paper}> */}
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="user_name"
						label="User Name"
						name="user_name"
						autoComplete="user_name"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2" to="/register">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			{/* </div> */}
			</div>
			</div>
			{/* <div className="landing-wrapper"
			style={{ backgroundImage: `url(${images})`}}>
			</div>         */}
			{/* <img src={images} alt="Logo" /> */}
			{/* <div className="bg"></div> */}

		</Container>
	);
}