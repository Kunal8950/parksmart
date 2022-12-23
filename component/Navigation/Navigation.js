import React from "react";
import classes from './Navigation.module.css';

const Navigation = () => {
	return (
		<div className={classes.Navigation}>
			<div className={classes.Right}>Hello Walker!</div>
			<div className={classes.Left}>
				<div className={classes.Location}>
					<img src="../assets/parking.png"/>
					<span>Reserve Parking</span>
				</div>
				<div className={classes.Notification}>
					<img src="../assets/bell.png"/>
					<span>12</span>
				</div>
				<div className={classes.Profile}>
					<img src="../assets/avatar.png"/>
					<div className={classes.ProfileName}>
						<div>Brooklyn Simmons</div>
						<div>brooklyn@simmons.com</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation;