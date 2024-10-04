let req = new XMLHttpRequest();
let tab = []
let tabDetail;

let contener = document.getElementById("contener")

// req.open('GET', 'https://api.github.com/users?per_page=8', false)
req.open('GET', 'http://10.11.97.3:3000/users', false)

req.addEventListener('load', () => {
    tab = JSON.parse(req.response)       
})
req.send();


for(i=0; i<tab.length; i++){   

    let detailReq = new XMLHttpRequest;
    detailReq.open('GET', tab[i].url, false)

    let login = tab[i].login
    let avatar_url = tab[i].avatar_url
    let gitUrl = tab[i].html_url
    // let index = i;

    detailReq.addEventListener('load', () => {

        tabDetail = JSON.parse(detailReq.response)

        contener.innerHTML +=
        "<div class='card'>" +
            "<a href='" + gitUrl + "'>" + 
                "<img class='photoProfil' src='" + avatar_url + "'>" +
            "</a>" +
                "<div class='card1'>" + 
                    "<h1> Login : " + login + "</h1>"
                
                    if(tabDetail.bio != null){
                        contener.innerHTML +=
                        "<div>"+ tabDetail.bio + "</div>"
                    }

                    contener.innerHTML +=
                "</div>" +
        "</div>"
    })

    detailReq.send()
}

