function home(){
    window.location.href="admin.html"
}

//Iterate through each ticket and print information to the screen
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
        <button type = "button" onclick="loadTix()">Load Tickets</button>

        ${printIt(tickets)}
        <br>
        <br>
        <br>
        <p>Enter Ticket Name To Remove</p><input type="text" id="search">
            <button type = "button" onclick="remove()">Confirm Removal</button>
            <br><br>
            <br>
            <p>Enter Ticket Name To Add</p><input type="text" id="addsearch">
            <p>Enter Ticket Cost</p><input type="text" id="addcost">
            <p>Enter Ticket Winnings</p><input type="text" id="addwinnings">
            <p>Enter Ticket Num1</p><input type="text" id="add1">
            <p>Enter Ticket Num2</p><input type="text" id="add2">
            <p>Enter Ticket Num3</p><input type="text" id="add3">
            <p>Enter Ticket Num4</p><input type="text" id="add4">
            <p>Enter Ticket Num5</p><input type="text" id="add5">
            <p>Enter Ticket Drawing Date</p><input type="text" id="adddate">
            <button type = "button" onclick="add()">Confirm Add</button>
            <br><br>
            <br>
        <p>Enter Ticket Name To Change Cost</p><input type="text" id="costSearch">
        <p>Enter The Changed Cost</p><input type="text" id="cost">
            <button type = "button" onclick="cost()">Confirm Cost Change</button>
            <br><br>
            <br>
        <p>Enter Ticket Name To Change Winnings</p><input type="text" id="winningSearch">
        <p>Enter The Changed Winnings</p><input type="text" id="winning">
            <button type = "button" onclick="winning()">Confirm Winning Change</button>

    `;
}

//Function that actually iterates through ticket list and converts to string html
function printIt(tickets){
    let html = ``;
    tickets.forEach(ticket =>{
        html +=`
            <h3>
            ${ticket.name}
            is
            ${ticket.cost} dollars each
            </h3>
        `
    })
    return html
}

//function to remove a desired ticket when instructed by admin
//Each function below this comment works like this:
//Iterate through list for desired objects
//Check if the object exists
//Perform task (remove,add,update)
function remove(){
    searched = document.getElementById("search").value;
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    console.log(tickets)
    found = false;
    for(i=tickets.length-1;i>-1;i--){
        if(searched == tickets[i].name){

            newArray = tickets.splice(i,1);
            found = true;
        
            
        }
    }

    console.log(tickets)
    if(!(found)){
        alert("Ticket does not exist");
    }
    localStorage.setItem("tickets",JSON.stringify(tickets));


}

//Adding a ticket to the site
function add(){
    searched = document.getElementById("addsearch").value;
    addcost = document.getElementById("addcost").value*1;
    add1 = document.getElementById("add1").value*1;
    add2 = document.getElementById("add2").value*1;
    add3 = document.getElementById("add3").value*1;
    add4 = document.getElementById("add4").value*1;
    add5 = document.getElementById("add5").value*1;
    addwinnings= document.getElementById("addwinnings").value*1;
    adddate = document.getElementById("adddate").value;
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    console.log(tickets)
    found = false;
    for(i=tickets.length-1;i>-1;i--){
        if(searched == tickets[i].name){

            found = true;
        
            
        }
    }

    console.log(tickets)
    if(!(found)){
        tickets.push({
            "name":searched,
            "cost":addcost,
            "winnings":addwinnings,
            "drawingDate":adddate,
            "winning1":add1,
            "winning2":add2,
            "winning3":add3,
            "winning4":add4,
            "winning5":add5
        })
    }
    else{
        alert("Ticket exists")
    }
    localStorage.setItem("tickets",JSON.stringify(tickets));


}

//Function to update the cost
function cost(){
    searched = document.getElementById("costSearch").value;
    costNew = document.getElementById("cost").value*1;
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    console.log(tickets)
    found = false;
    for(i=tickets.length-1;i>-1;i--){
        if(searched == tickets[i].name){

            tickets[i].cost = costNew;
            found = true;
        
            
        }
    }

    console.log(tickets)
    if(!(found)){
        alert("Ticket does not exist");
    }
    localStorage.setItem("tickets",JSON.stringify(tickets));


}

//Function to update winnings
function winning(){
    searched = document.getElementById("winningSearch").value;
    winningNew = document.getElementById("winning").value*1;
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    console.log(tickets)
    found = false;
    for(i=tickets.length-1;i>-1;i--){
        if(searched == tickets[i].name){

            tickets[i].winnings = winningNew;
            found = true;
        
            
        }
    }

    console.log(tickets)
    if(!(found)){
        alert("Ticket does not exist");
    }
    localStorage.setItem("tickets",JSON.stringify(tickets));


}