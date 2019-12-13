// Start of IIFE
// For Reference "https://javascript.info/async-await"
// "https://jsonplaceholder.typicode.com/"
(async function(){
    let request = await fetch('https://jsonplaceholder.typicode.com/todos');
    // fetching all the lines in json format
    let lines = await request.json();
    // lines array is created
    console.log(lines);
    let content = "";
    lines.map((post) => {
    // post.id is unique
    content += `<input type='checkbox' name="${post.id}" id="${post.id}" >
                <span id="new_${post.id}">${post.title}
                </span>
                </input>
            <br>`
    });
    // transferring all the lines to div tag in HTML
    document.getElementById("sample").innerHTML = content;
    lines.map((post) => {
        // adding a event listener click
        document.getElementById(`${post.id}`).addEventListener("click" , () => {
            // If we select a checkbox it strikes through
            if(document.getElementById(`${post.id}`).checked){
                fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`, {
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
                fetch(`https://jsonplaceholder.typicode.com/todos/${post.id}`, {
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

