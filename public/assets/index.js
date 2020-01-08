const burgerInputEl = document.getElementById("burgerName")
const burgerButtonEl = document.getElementById("addBurger")


//add a burger
burgerButtonEl.addEventListener("click", function () {

    console.log(burgerButtonEl);
    
    if (burgerInputEl.value) {

        name = burgerInputEl.value
        axios.post('/api/burgers', {
            burger_name: name
        })
            .then(function (response) {
                displayBurgers();
                console.log(burgerInputEl)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});


//displays all burgers depending on devoured status

//Received help from Matt B and referred to his Github
function displayBurgers() {
    axios.get('/api/burgers')
        .then(function (response) {

            const nonDevouredBurgers = response.data.filter(function(value){

                return value.devoured === false;

            });

            const allBurgers = nonDevouredBurgers.map(burgers => `<div id="burgerList">${burgers.burger_name}</div><button onclick="eatBurger(${burgers.id})">Devour</button>`);
            const burgerListEl = document.getElementById("burgerList");
            const burgerListHTML = allBurgers.join("<br>");
            burgerListEl.innerHTML = burgerListHTML;

            const devouredBurgers = response.data.filter(function(value){

                return value.devoured === true;

            });

            const allDevouredBurgers = devouredBurgers.map(burgers => `<div id="burgerList">${burgers.burger_name}</div>`);
            const devouredBurgersIDEl = document.getElementById("devouredBurgersID");
            const devouredBurgerHTML = allDevouredBurgers.join("<br>");
            devouredBurgersIDEl.innerHTML = devouredBurgerHTML;

            console.log(allBurgers);

            console.log(response);
            console.log(burgerList);

        })
        .catch(function (error) {
            console.log(error);
        });
}

//update individual db entry from unDevoured to devoured and repopulate the unDevoured and devoured burger lists
function eatBurger(id) {
    console.log(id)
    axios.put(`/api/burgers/${id}`)
        .then(function (response) {
            console.log(response);
            displayBurgers();
        })
        .catch(function (error) {
            console.log(error);
        });
}

displayBurgers()