"use strict";
const React = require("react");
const { Text } = require("ink");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const importJsx = require("import-jsx");
const PriceTable = importJsx("./src/components/PriceTable");

const App = () => (
	<>
		<Gradient name="summer">
			<BigText text="crypto price cli" align="center" font="tiny" />
		</Gradient>
		<PriceTable />
	</>
);

module.exports = App;
