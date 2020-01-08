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

function condimentSelect(burgers){
    console.log(burgers)
    if (burgers%2 == 0){
        if (burgers%4 == 0){
            return "1"
        } else {
            return "2"
        }
        
    }
    else {
        if ((--burgers)%4 == 0){
            return "3"
        } else {
            return "4"
        }
        
    }
}


//displays all burgers depending on eaten status
function displayBurgers() {
    axios.get('/api/burgers')
        .then(function (response) {

            const allBurgers = response.data.map(burgers => `<div id="burgerList">${burgers.burger_name}</div><button onclick="eatBurger(${burgers.id})">Devour</button>`);
            const burgerListEl = document.getElementById("burgerList");
            const burgerListHTML = allBurgers.join("<br>");
            burgerListEl.innerHTML = burgerListHTML;

            console.log(allBurgers);

            console.log(response)
            console.log(burgerList)
            
            const burgerListStr = burgerList.burgers.map(burgers => `<div class="condiment${condimentSelect(burgers.id)}">${burgers.burger_name}<button onclick="eatBurger(${burgers.id}) "id="${burgers.id}" class="eatbutton${condimentSelect(burgers.id)}">&nbsp;Eat This Burger&nbsp;</button></div>`)
            console.log(burgerListStr)
            const burgersAndButtonsHTML = burgerListStr.join("<br>")
            burgerListEl.innerHTML = burgersAndButtonsHTML;

            const eaten = response.data.filter(function (valueObject) {
                return valueObject.eaten == true
            })

            console.log("hello 48");
            console.log(eaten)
            const eatenBurgersEl = document.getElementById("eaten")
            const eatenBurgersStr = eaten.map(burger => `<div class="condiment${condimentSelect(burger.id)}">${burger.burgerName}</div>`)
            const eatenBurgersHTML = eatenBurgersStr.join("<br>")
            eatenBurgersEl.innerHTML = eatenBurgersHTML
        })
        .catch(function (error) {
            console.log(error);
        });
}

//update individual db entry from uneaten to eaten and repopulate the uneaten and eaten burger lists
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