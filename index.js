
const loginbtn = document.getElementById("login");

loginbtn.addEventListener("click", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;

    let data = new FormData();
    data.append("username", username);
    data.append("password", password);
    let url = "http://localhost/facebook/login.php"
    let id = localStorage.getItem("idUsers");
    url += "?idUsers="+id;

    axios({
        method: 'POST',
        url: url,
        data: data,
    })
    .then(function(response){ 
        console.log(response.data)
        if(response.data.response == "Logged in!"){
            console.log("Logged in");
            var get_id = response.data.user_id;
            console.log("id",get_id)
        }else{
            console.log("user not found");
        }
    })
})    

// for (var key of data.entries()) {
//     console.log(key[0] + ", " + key[1]); || You can not log formdata, but this method works! :)
//     }