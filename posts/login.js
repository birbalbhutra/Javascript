(async function(){
    console.log(document.getElementById('loginForm'))
    document.getElementById('loginForm').addEventListener("submit", async (temp) => {
        temp.preventDefault();
        let userId = +document.forms['loginForm']['userId'].value;
        let password = (document.forms['loginForm']['password'].value);
        try {
            let response = await fetch(`http://localhost:3000/verifyUser/${userId}/${password}`);
            let authenticationToken = await response.json();
            localStorage.setItem("key", authenticationToken.token);
            localStorage.setItem("value", userId);
            console.log("logged in");
            window.location.replace('../Checkbox/index.html');
        } catch (e) {
            console.log("login failed");
            
        }
    })
})()