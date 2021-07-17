let blogContent = document.querySelector(".BlogContent")
// fetch("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@KrishnaKotni")
// fetch("https://medium.com/feed/@KrishnaKotni",{
//     mode : "no-cors"
// })
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KrishnaKotni")
.then(response =>  response.json())
.then((data) => {
    for(i of data.items){
        console.log(i.title,i.guid)
        let div = document.createElement("div")
        div.classList.add("BlogItem")
        let h2 = document.createElement("h2")
        h2.textContent = i.title
        let a = document.createElement("a")
        a.textContent = "Medium Article"
        a.href = i.guid
        a.target = "_blank"
        let p = document.createElement("p")
        temp = i.description.match("<.*>(.*)<.*>")
        p.textContent = temp[1]
        console.log(i.description.match("/<.*>/"))
        div.appendChild(h2)
        div.appendChild(a)
        div.appendChild(p)
        blogContent.appendChild(div)
    }
})
