(async function(){
    const id = window.location.search.substr(1).split('=')[1];
    console.log(id);
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let lines = await response.json();
    document.getElementById("sample").innerHTML = ` UserId: ${lines.userId}<br> Id: ${lines.id}<br> Title: ${lines.title}<br> Body: ${lines.body}<br>`;
  })();