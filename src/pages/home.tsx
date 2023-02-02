import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<div className="page">
				<Head>
					<title>Tic Tac Toe - Game</title>
					<meta name="description" content="Play Tic Tac Toe with friends." />
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
		</React.Fragment>
	);
};

export default Home;
