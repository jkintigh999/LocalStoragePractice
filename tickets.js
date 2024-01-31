function home(){
    window.location.href="homepage.html"
}

//This function allows for a dynamic "shopping catalog" that pulls each ticket from the local storage and updates the webpage accordingly
function loadTix(){
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);

    document.getElementById('container').innerHTML = `
        <div class="card">
            <h2>Browse</h2>

            <h3>Welcome</h3>
            <h3>
                <script>
                    document.write(localStorage.getItem("currentUsername"));
                </script>
            </h3>
            <button type = "button" onclick="home()">Back to Home</button>
        </div>
        <br>
        <br>
        <button type = "button" onclick="load()">Load Tickets</button>

        ${printIt(tickets)}
        <br>
        <br>
        <br>
        <button type = "button" onclick="cart()">Add Tickets to Cart</button>

    `;
}

//This function is called by loadTix() to iterate through the ticket list and return an html string for each ticket
function printIt(tickets){
    let html = ``;
    tickets.forEach(ticket =>{
        html +=`
            <h3>
            ${ticket.name}
            is
            ${ticket.cost} dollars each
            </h3>
            <label for="quantity">Quantity (between 1 and 10):</label>
                <input type="number" id="quantity${ticket.name}" name="quantity" min="1" max="10">
        `
    })
    return html
}

//Grab the tickets selected to be purchased, if < 10 total then we add them to a cart object and move the user to the checkout page
function cart(){
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    console.log("cart");
    console.log(document.getElementById("quantityPowerball").value)
    let sum = 0;
    let weighted =0;
    let current = 0;
    tickets.forEach(ticket =>{
        sum += document.getElementById(`quantity${ticket.name}`).value * 1;
        weighted += document.getElementById(`quantity${ticket.name}`).value * ticket.cost;
    })
    console.log(sum);
    console.log(weighted);

    if( sum > 10){
        alert("Error, you can only purchase 10 tickets");
    }
    else if( sum < 1){
        alert("Error, you have no tickets selected");
    }
    else{
        let cart = new Array();
        tickets.forEach(ticket =>{
            current =  document.getElementById(`quantity${ticket.name}`).value * 1;
            for(i=0; i<current; i++){
                cart.push({
                    "name":`${ticket.name}`,
                    "cost":ticket.cost
                })
            }
        })
        localStorage.setItem("cart",JSON.stringify(cart));
        localStorage.setItem("cartCost",weighted);
        window.location.href="cart.html";

    }
}