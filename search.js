function homePage(){
    window.location.href="homepage.html"
}

//Search the list of tickets for the inputted string
function search(){
    searched = document.getElementById("search").value;
    const data = localStorage.getItem("tickets");
    const tickets = JSON.parse(data);
    found = false;
    for(i=0;i<tickets.length;i++){
        //If it's found, update the webpage with the ticket's info
        if(searched == tickets[i].name){
            found = true;
            document.getElementById('container').innerHTML = `
                <div class="card">
                <h2>Lottery Purchase System</h2>

                <h3>Welcome</h3>
                <h3>Name:
                    <script>
                        document.write(localStorage.getItem("currentUsername"));
                    </script>
                </h3>
                <button type = "button" onclick="homePage()">Back To Homepage</button>
                <br>
                <h2>Search For A Ticket</h2>
                <p>Enter Ticket Name</p><input type="text" id="search">
                <button type = "button" onclick="search()">Confirm Search</button>
                
                <br>
                <h2>Searched Ticket Details:</h2>
                <p>
                    ${tickets[i].name}</p>
                    <p>Cost: ${tickets[i].cost}</p>
                    <p>Winnings: ${tickets[i].winnings}</p>
                    <p>Drawing Date: ${tickets[i].drawingDate}</p>
                    <p> Winning Numbers : ${tickets[i].winning1}
                    ${tickets[i].winning2}
                    ${tickets[i].winning3}
                    ${tickets[i].winning4}
                    ${tickets[i].winning5}
                </p>
            </div>

            `;
            
        }
    }

    if(!(found)){
        alert("Ticket does not exist");
    }


    console.log(searched);
}