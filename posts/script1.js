(async function(){
    const id = window.location.search.substr(1).split('=')[1];
    console.log(id);
    let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let lines = await request.json();
    document.getElementById("sample").innerHTML = `<div> UserId: ${lines.userId}<br> Id: ${lines.id}<br> Title: ${lines.title}<br> Body: ${lines.body}<br></div>`;
    request = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    let details = await request.json();
    let list = "";
    var i;
    for(i=0;i<details.length;i++){
        list += `<div class="padding">
                  <div class="outline">
                    <h2 style="line-height: 0px"><u>${details[i].name}</u></h2><br>
                    Email : ${details[i].email}<br>
                    <h3 class="col-lg-8 col-12">${details[i].body}</h3>
                  </div>
                </div>`;
    }
    document.getElementById("sample").innerHTML = list;
})();