const React = require("react");
const { useState, useEffect } = React;
const { Box, Text, Newline } = require("ink");
const cryptoData = require("../../mock/data.json");
const axios = require("axios");

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cetherum%2Clitecoin%2Csolana%2Ctether%2Ccardano%2Cdogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
const PriceTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((e) => console.error(e));
	}, []);

	return (
		<Box borderStyle="single" padding={2} flexDirection="column">
			<Box>
				<Box width="20%">
					<Text>COIN</Text>
				</Box>
				<Box width="20%">
					<Text>PRICE (USD)</Text>
				</Box>
				<Box width="20%">
					<Text>24 HOUR CHANGE</Text>
				</Box>
				<Box width="20%">
					<Text>ALL TIME HIGH</Text>
				</Box>
				<Box width="20%">
					<Text>LAST UPDATED</Text>
				</Box>
			</Box>
			<Newline />
			{data.map(
				({ id, name, current_price, price_change_percentage_24h, ath, last_updated }) => (
					<Box key={id}>
						<Box width="20%">
							<Text>{name}</Text>
						</Box>
						<Box width="20%">
							<Text color="cyan">{`$${current_price}`}</Text>
						</Box>
						<Box width="20%">
							<Text
								backgroundColor={
									Math.sign(price_change_percentage_24h) < 0 ? "red" : "green"
								}
								color="black"
							>
								{`${price_change_percentage_24h.toFixed(2)}%`}
							</Text>
						</Box>
						<Box width="20%">
							<Text color="green">{`$${ath.toLocaleString()}`}</Text>
						</Box>
						<Box width="20%">
							<Text color="cyan">{new Date(last_updated).toLocaleString()}</Text>
						</Box>
					</Box>
				)
			)}
		</Box>
	);
};

module.exports = PriceTable;
