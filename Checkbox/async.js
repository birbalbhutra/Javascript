// Start of IIFE
// For Reference "https://javascript.info/async-await"
// "https://jsonplaceholder.typicode.com/"
(async function(){
    let request = await fetch('https://jsonplaceholder.typicode.com/todos');
    let lines = await request.json();
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
    document.getElementById("sample").innerHTML = content;
    lines.map((post) => {
        document.getElementById(`${post.id}`).addEventListener("click" , () => {
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
                // If we select a checkbox it strikes through
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
                    /*remove strikeout from the post*/
                    document.getElementById(`new_${post.id}`).setAttribute("style" , "text-decoration: none;");
                })
            }
        });
    });
})();

