import React from "react";
import {Button} from "antd";
import styles from "./StartPage.module.css";
import image from "./../../assets/startImage.jpg";
import {useHistory} from "react-router";

const StartPage = () => {
	const history = useHistory();
	return (
		<>
			<img src={image} alt="shopping" className={styles.image}/>
			<div className={styles.textBlock}>
				<h1 className={styles.text}>Всё купить и ничего не забыть!</h1>
				<Button type="primary"
						size="large"
						onClick={() => history.push("/create-list")}>Начать</Button>
			</div>
		</>
	)
}

export default StartPage;