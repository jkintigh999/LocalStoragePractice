function home(){
    window.location.href="homepage.html"
}

//Iterate through tickets
function loadTix(){
    const data = localStorage.getItem("purchased");
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
        <button type = "button" onclick="redeem()">Redeem Prizes</button>
        <button type = "button" onclick="print()">Print or Email Tickets</button>
        <br>

    `;
}

//Convert tickets to html
function printIt(tickets){
    let html = ``;
    const data = localStorage.getItem("tickets");
    const winnings = JSON.parse(data);
    for(i=0;i<tickets.length;i++){
        if(localStorage.getItem("currentUsername") == tickets[i].user){
            html +=`
                <h3>
                Ticket ${i}
                ${tickets[i].name}
                <br>
                <p>Numbers: ${tickets[i].num1} ${tickets[i].num2} ${tickets[i].num3} ${tickets[i].num4} ${tickets[i].num5}</p>
                </h3>
            `;
        
        
    }}
    
    return html
}

function redeem(){
    alert("Prizes Redeemed");
}


