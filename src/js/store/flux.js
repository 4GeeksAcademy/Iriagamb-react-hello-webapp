const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			apiUrl: "https://www.swapi.tech/api/",

			apiUrltwo: "https://swapi.dev/api/",

			People: [],

			Planets: [],

			Vehicles: [],

			Favorites: [],

			Details: [],

			Description: "",

			Id: "",

		},
		actions: {
			getPeople: async () =>{
				const store = getStore();
				const actions = getActions();
				try {
					const  response = await fetch(store.apiUrltwo + "people");
					if (!response.ok){
						console.log("getPeople error");
					}
					const data = await response.json();
					setStore({People: data.result,})
				} catch (error){
					console.log(error);
				}
			},
			getPlanets: async () =>{
				const store = getStore();
				const actions = getActions();
				try {
					const  response = await fetch(store.apiUrltwo + "planets");
					if (!response.ok){
						console.log("getPlanets error");
					}
					const data = await response.json();
					setStore({Planets: data.result,})
				} catch (error){
					console.log(error);
				}
			},
			getVehicles: async () =>{
				const store = getStore();
				const actions = getActions();
				try {
					const  response = await fetch(store.apiUrltwo + "vehicles");
					if (!response.ok){
						console.log("getVehicles error");
					}
					const data = await response.json();
					setStore({Vehicles: data.result,})
				} catch (error){
					console.log(error);
				}
			},
			addFavorite: async (favoriteToAdd) =>{
				const store = getStore();
				const actions = getActions();
				const newFavorite = store.favorites.find((favorite) => favorite.name === favoriteToAdd.name)
				if (favoriteToAdd == newFavorite){
						actions.removeFavorite(favoriteToAdd)
				}else {
					const newFavorites= store.favorites.filter((favorite) => favorite.name !== favoriteToAdd.name);
					setStore({favorites:[...newFavorites, favoriteToAdd]})
				}
			},

			removeFavorite: async (favoriteToRemove)=>{
				const store = getStore();
				const actions = getActions();
				const newFavorites= store.favorites.filter((favorite) => favorite.name !== favoriteToRemove.name);
				setStore({favorites: newFavorites})

			},
			getDetails: (element) => {
				const store = getStore();
				if (element.url.split("/")[4] === "people")
					store.People.find((character) => character.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
				if (element.url.split("/")[4] === "planets")
					store.Planets.find((planet) => planet.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
				if (element.url.split("/")[4] === "vehicles")
					store.Vehicles.find((vehicle) => vehicle.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
			},
			getDescription: (url) => {
				const store = getStore();
					setStore({
						Description: url,
					})
			},
		}
	}
}

export default getState;
