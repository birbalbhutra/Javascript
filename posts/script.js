(async function(){
    let request = await fetch('https://jsonplaceholder.typicode.com/posts');
    // let comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    let lines = await request.json();
    // let comments_lines = await comments.json();
    console.log(lines);
    var i;
    var list = "";
    for(i=0;i<lines.length;i++){
        list += `<a href="next.html?id=${lines[i].id}" style='text-decoration :none'>${lines[i].title}</a><br>`;
        console.log(lines[i].id);
    }
    document.getElementById("sample").innerHTML = list;
})();