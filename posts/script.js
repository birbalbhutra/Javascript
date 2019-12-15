(async function(){
    let request = await fetch('https://jsonplaceholder.typicode.com/posts');
    let lines = await request.json();
    console.log(lines);
    var i;
    var list = "<div class='firstPg'>";
    for(i=0;i<lines.length;i++){
        list += `<a href="next.html?id=${lines[i].id}" style='text-decoration :none'>${lines[i].title}</a><br>`;
        console.log(lines[i].id);
    }
    list += "</div>"
    document.getElementById("sample").innerHTML = list;
})();