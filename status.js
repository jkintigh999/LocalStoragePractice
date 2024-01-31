function home(){
    window.location.href="admin.html"
}

//Grab info from local storage and print it to screen for admin
function loadStatus(){
    const data = localStorage.getItem("purchased");
    const purchased = JSON.parse(data);
    weighted = 0;
    len =0;
    console.log(purchased)
    if(purchased != null){
        for(i=0; i<purchased.length;i++){
            weighted += purchased[i].cost *1;
        }
        len =purchased.length;
    }

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
        <button type = "button" on  click="loadStatus()">Load Status</button>

        <h2>Current Status</h2>
        <h3> Tickets Sold: ${len} </h3>
        <h3> Total Money Made: ${weighted}</h3>

    `;
}

