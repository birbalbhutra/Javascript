(async function(){
    const id = window.location.search.substr(1).split('=')[1];
    console.log(id);
    let request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let lines = await request.json();
    // let comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    // let posts = await comments.json();
    // if(${posts.postId} === ${lines.id}){
    //     document.getElementById("sample").innerHTML = `${posts.name}<br> ${posts.email}<br> ${posts.body}<br>`;
    // }
    document.getElementById("sample").innerHTML = `<div> UserId: ${lines.userId}<br> Id: ${lines.id}<br> Title: ${lines.title}<br> Body: ${lines.body}<br></div>`;
    request = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    let details = await request.json();
    // let list = "";
    // var i;
    // for(i=0;i<details.length;i++){
    //   list += `<div>${details.name}<br>${details.email}<br>${details.body}</div>`;
    // }
    let list = details.reduce((initial , comment) => {
      return initial + `<div><h2>${comment.name}<br></h2>${comment.email}<br>
            <div>${comment.body}</div></div>`;
    });
    // list += '</div>';
    document.getElementById("sample").innerHTML = list;
})();