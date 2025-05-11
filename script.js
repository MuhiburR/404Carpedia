const cars = [
	{
		make: "Honda",
		model: "Civic",
		year: 2023,
		price: 28000,
		imageUrl: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/Family-Pages/Civic-Family/Civic-Hatchback/MY25_Civic_Family_Card_Jelly_2x.png?sc_lang=en"
	},
	{
		make: "Toyota",
		model: "Corolla",
		year: 2023,
		price: 25000,
		imageUrl: "https://crdms.images.consumerreports.org/c_lfill,w_1126,q_auto,f_auto/prod/cars/cr/model-years/15214-2023-toyota-corolla"
	},
	{
		make: "Ford",
		model: "Mustang",
		year: 2023,
		price: 45000,
		imageUrl: "https://www.vdm.ford.com/content/dam/na/ford/en_us/images/mustang/2025/jellybeans/Ford_Mustang_2025_400A_PJS_889_89W_13R_COU_64V_99F_44X_GT_YZTAC_DEFAULT_EXT_4.png"
	},
	{
		make: "Chevrolet",
		model: "Camaro",
		year: 2023,
		price: 35000,
		imageUrl: "https://di-uploads-pod29.dealerinspire.com/sewellfamilyofcompanies/uploads/2020/09/2020-chevrolet-camaro-zl1-coupe-angular-front-1.png"
	}
];

const carsContainer = document.getElementById("cars-container");

function createCarCard(car) {
	const carCard = document.createElement("div");
	carCard.classList.add("car-card");

	const carImage = document.createElement("img");
	carImage.src = car.imageUrl;
	carImage.alt = `${car.make} ${car.model}`;
	carCard.appendChild(carImage);

	const carDetails = document.createElement("div");
	carDetails.classList.add("car-details");

	const carTitle = document.createElement("h3");
	carTitle.textContent = `${car.make} ${car.model} (${car.year})`;
	carDetails.appendChild(carTitle);

	const carPrice = document.createElement("p");
	carPrice.textContent = `$${car.price}`;
	carDetails.appendChild(carPrice);

	carCard.appendChild(carDetails);
	return carCard;
}

function displayCars(carList) {
	carsContainer.innerHTML = "";
	carList.forEach(car => {
		const carCard = createCarCard(car);
		carsContainer.appendChild(carCard);
	});
}

// Initial display
displayCars(cars);

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const searchTerm = searchInput.value.toLowerCase().trim();

	const filteredCars = searchTerm === ""
		? cars
		: cars.filter(car =>
			car.make.toLowerCase().includes(searchTerm) ||
			car.model.toLowerCase().includes(searchTerm) ||
			String(car.year).includes(searchTerm) ||
			String(car.price).includes(searchTerm)
		);

	displayCars(filteredCars);
});
