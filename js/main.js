//created by Shane A.Proverbs with comments to help anyone who is trying to learn.


fetch("https://rickandmortyapi.com/api/character") //fetches the data from uri and returns a promise which allows us to add the .then()
	.then((response) => response.json()) //returns the data and transform it into a javascript object, it then return it in the next 'then' function
	.then((data) => display(data.results)); //calls the display function on line 10 and passes the [{},{},{}] array of objects to it

const symbols = {
	alien: "👽",
	human: "🧑",
}; //this is an object in javascript

function display(data) {
	console.log(data); //array of objects check google chrome with f12 in the browser
	let row = document.querySelector(".row");
	//on line 20 data.map is an array built in method call map which literally maps over each element in the array, ch now refers to each individual object
	//like so :
	//0:{name:"",image:"",status:""},
	//1:{name:"",image:"",status:""},
	//2:{name:"",image:"",status:""}, and so on rmr //0:,1:,2:,3: is called the array index
	// the map method expects a callback, which is just a function passed to a function...the argument passed in is each individual object
	//in other words this method map() which be executed on each array index, ch(can be named anything) it simply refers to object in that index
	data.map((ch) => {
		let isAlive = ch.status === "Alive" ? "alive" : "dead";
		let card = `
            <div class="card">
                <img class="card_img" src="${ch.image}" alt="${ch.name}" />
                <div class="card_description">
                     <h1 class="card_title"> ${ch.name}</h1>
                     <p class="card_status"> <span class="status ${isAlive}"></span>${
			ch.status
		}</p>
                     <p class="card_location"><span class="color">Last Character Location</span></p>
                     <p>${ch.location.name}</p>
                     <p>
                     <span class="color">Species:</span> 
                     <span class="symbol">${
												symbols[ch.species.toLowerCase()]
											}</span> </p>
                </div>
            </div>
        `;
		row.innerHTML += card;
	});
}
