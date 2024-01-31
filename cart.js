function home(){
    window.location.href="homepage.html"
}
function browse(){
    localStorage.removeItem("cart");
    localStorage.removeItem("cartCost");
    window.location.href="browse.html"
}

//Load ticket function to print to screen.
function loadTix(){
    const data = localStorage.getItem("cart");
    const cart = JSON.parse(data);
    const total = localStorage.getItem("cartCost");

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
        <button type = "button" onclick="browse()">Back to Browse</button>
        <br>
        <br>
        <button type = "button" onclick="load()">Load Tickets</button>

        ${printIt(cart)}
        <br>
        <br>
        <br>
        <h2>THE TOTAL IS ${total}</h2>
        <button type = "button" onclick="checkOut()">CheckOut</button>

    `;
}

//convert each ticket to html string
function printIt(cart){
    let html = ``;
    for(i=0;i< cart.length; i++){
        html +=`
            <h3>
            Ticket ${i+1}:${cart[i].name}
            </h3>
            <label for="quantity">Quantity (between 1 and 50, leave at 0 for random):</label>
                <input type="number" id="quantity1${i}" name="quantity" min="0" max="50"><br>
            <label for="quantity">Quantity (between 1 and 50, leave at 0 for random):</label>
                <input type="number" id="quantity2${i}" name="quantity" min="0" max="50"><br>
            <label for="quantity">Quantity (between 1 and 50, leave at 0 for random):</label>
                <input type="number" id="quantity3${i}" name="quantity" min="0" max="50"><br>
            <label for="quantity">Quantity (between 1 and 50, leave at 0 for random):</label>
                <input type="number" id="quantity4${i}" name="quantity" min="0" max="50"><br>
            <label for="quantity">Quantity (between 1 and 50, leave at 0 for random):</label>
                <input type="number" id="quantity5${i}" name="quantity" min="0" max="50"><br>
        `;
    }
    return html
}

//When checkout is pressed it will add each item in the cart to the purchased array
function checkOut(){
    console.log("Check out");
    let purchase = new Array();
    oldData = localStorage.getItem("purchased");
    if(oldData != null){
        old = JSON.parse(oldData);
        for(i=0;i<old.length;i++){
            purchase.push({
                "user":old[i].user,
                "name":old[i].name,
                "num1":old[i].num1,
                "num2":old[i].num2,
                "num3":old[i].num3,
                "num4":old[i].num4,
                "num5":old[i].num5,
                "cost":old[i].cost
            })
    
        }
    }

    const data = localStorage.getItem("cart");
    const cart = JSON.parse(data);
    //If numbers are already chosen by the customer, use them. If not, add random numbers
    for(i=0;i< cart.length; i++){
        num1 =  document.getElementById(`quantity1${i}`).value * 1;
        num2 = document.getElementById(`quantity1${i}`).value * 1;
        num3 = document.getElementById(`quantity1${i}`).value * 1;
        num4 = document.getElementById(`quantity1${i}`).value * 1;
        num5 = document.getElementById(`quantity1${i}`).value * 1;
        if(num1 == 0){
            num1 = parseInt(Math.random() * (50 - 1) + 1);
        }
        if(num2 == 0){
            num2 = parseInt(Math.random() * (50 - 1) + 1);
        }
        if(num3 == 0){
            num3 = parseInt(Math.random() * (50 - 1) + 1);
        }
        if(num4 == 0){
            num4 = parseInt(Math.random() * (50 - 1) + 1);
        }
        if(num5 == 0){
            num5 = parseInt(Math.random() * (50 - 1) + 1);
        }

        purchase.push({
            "user":localStorage.getItem("currentUsername"),
            "name":cart[i].name,
            "num1":num1,
            "num2":num2,
            "num3":num3,
            "num4":num4,
            "num5":num5,
            "cost":cart[i].cost

        })
        
    }

    console.log(oldData)
    localStorage.setItem("purchased",(JSON.stringify(purchase)));
    alert("Purchase was successful (this is where the paypal popup would appear)");
    window.location.href="homepage.html";
}