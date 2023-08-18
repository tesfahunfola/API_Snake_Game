#my api key
user_api = AIzaSyAX9FVOSR_4M_qn3PeozAGGNw3Rn_dkDbM

async function SnakeGameProject() {
	await fetch("https://covid-193.p.rapidapi.com/statistics", {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "2b1a2679a3msh2f05c5afba35dc2p1ed8c4jsnd91091012b68",
			"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			console.log("COVID 19 API object:")
			console.log(response)
			console.log("\n")

			// This code adds all countries to select element
			response.response.forEach((c) => {
				const option = document.createElement("option")
				option.innerHTML = c.country
				document.getElementById("countries").appendChild(option)
			})

			// This code saves covid data to global variable
			covid19data = response.response
		})
		.catch((err) => {
			console.log(err)
		})
}
