const sign_up_btn = document.getElementById("signup");

sign_up_btn.addEventListener("click", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;

    let data = new FormData();
    data.append("username", username);
    data.append("password", password);

    let url = "http://localhost/facebook/signup.php";

    axios({
      method: "POST",
      url: url,
      data:data,
      
    }).then(function (response) {
      console.log(response);
      if (response.data.success === true) {
        document.body.style.backgroundColor = "lightgreen";
      } else {
        console.log("please try again :(");
      }
    });
})  

// for (var key of data.entries()) {
//       console.log(key[0] + ", " + key[1]); // || You can not log formdata, but this method works! :)
//       }