// Start of IIFE
// For Reference "https://javascript.info/async-await"
// "https://jsonplaceholder.typicode.com/"
// http://localhost:3000
(async function(){
    // let request = await fetch('https://jsonplaceholder.typicode.com/todos');
    let request = await fetch('http://localhost:3000');
    // fetching all the lines in json format
    let lines = await request.json();
    // lines array is created
    console.log(lines);
    let content = "";
    lines.map((post,index) => {
    // post.id is unique
    if(index<=10){
    content += `<input type='checkbox' name="${post.id}" id="${post.id}" >
                <span id="new_${post.id}">${post.title}
                </span>
                </input><br>`
    }
    });
    // transferring all the lines to div tag in HTML
    document.getElementById("sample").innerHTML = content;
    // document.getElementById("forms").innerHTML = content;
    // var e = document.getElementById(`${post.id}`);
    lines.map((post) => {
        // adding a event listener click
        document.getElementById(post.id).addEventListener("click" , () => {
            // If we select a checkbox it strikes through
            if(document.getElementById(`${post.id}`).checked){
                // fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`, {
                fetch(`http://localhost:3000`, {
                method: 'PUT',
                body: JSON.stringify({
                    completed: true
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })
                .then(request => {
                    document.getElementById(`new_${post.id}`).setAttribute("style" , "text-decoration: line-through;");
                })
            }
            else
            {
                // fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`, {
                fetch(`http://localhost:3000`, {
                method: 'PUT',
                body: JSON.stringify({
                    completed: false
                    }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(request => {
                    // If we unselect a checkbox it becomes normal
                    document.getElementById(`new_${post.id}`).setAttribute("style" , "text-decoration: none;");
                })
            }
        });
    });
})();

function todo_form(form){
    if(form.title.value.length > 0 ){
        var temp = document.getElementById("sample");
        temp.innerHTML +=`<input type='checkbox' name="${form.id.value}" id="${form.id.value}" ><span id="new_${form.id.value}">${form.title.value}</span></input><br>`
        // fetch(`https://jsonplaceholder.typicode.com/todos/${form.id.value}`, {
            fetch(`http://localhost:3000`, {
            method: 'POST',
            body: JSON.stringify({
                userId: form.userId.value,
                title: form.title.value,
                id: form.id.value,
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    else{
        console.log("wrong details");
    }
}

