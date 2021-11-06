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
		let isAlive = ch.status === "Alive" ? "alive" : "dead"; //research ternary operator in javascript same thing as an if condition
		//we simply check to see what is inside the string `ch.status` if it is the string "Alive" then add the class name alive
		//to the variable isAlive, like so  let isAlive = "alive"; in the css file we have a class called .alive
		//which turns the background color green and we have the class .dead which turns the background color red.
		//if the ch.status property is not equal to "Alive" then the string "dead" is stored in the isAlive variable on line 21
		//this (isAlive variable) can then be used as a class name on line 32. which is dynamic, the value can be either "dead" or "alive" check the css for those class names
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
												symbols[ch.species.toLowerCase()] //another way to access an objects property by passing a string which matches the key of the object
												//same as this -> symbols.alien or symbols.human
												//symbols[ch.species.toLowerCase()] will be resolved to either this -> symbols["alien"] or symbols["human"]
												//this allows the value to be changed according to the data in that property its not hardcoded!!!!!!
												//the toLowerCase() is a function built in javascript attached to all strings which simply coverts the "Alien" or "Human"
												//to be "alien" or "human" so that it matches the definition of the keys in the symbols object on line 5 which are alien and human
											}</span> </p>
                </div>
            </div>
        `;
		row.innerHTML += card;
	});
}
