#my api key
user_api = AIzaSyAX9FVOSR_4M_qn3PeozAGGNw3Rn_dkDbM

async function SnakeGameProject() {
	await fetch("https://snakegame.p.rapidapi.com/statistic", {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "2b1a2679a3msh2f05c5afba35dc2p1ed8c4jsnd91091012b68",
			"X-RapidAPI-Host": "snakegame.p.rapidapi.com",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			console.log("SNAKE GAME API object:")
			console.log(response)
			console.log("\n")
		})
		.catch((err) => {
			console.log(err)
		})
}
