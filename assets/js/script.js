/* 
   1 - capturar o valor da textarea para criar o tweet
   2 - construir o tweet
   3 - imprimir o tweet
*/

const textarea = document.querySelector("textarea")
const tweetar = document.querySelector("button")
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event) {

    event.preventDefault()  // previnindo o comportamento default
    const tweetTextarea = textarea.value // capturando o valor da textarea através do event "click"
    criarTweet(tweetTextarea)

}

// capturando o evento "click" na tag button
tweetar.addEventListener("click", pegarTweet)


function criarTweet(tweetTextarea) {
/* function para:
   - criar o tweet
   - texto do tweet
   - nome
   - foto
   - nome usuário
   - horário
*/
    let data = moment()
    let hora = data.format('HH:mm')

    const tweet = {
        nome: "Gabriel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@gabzdev",
        texto: tweetTextarea,
        tempo: hora
    }

    listarTemplateTweet(tweet)
}

function listarTemplateTweet(tweet) {

    const {nome, foto, usuario, texto, tempo} = tweet

    // criando elementos para listar o template
    let li = document.createElement("li")
        li.classList.add("conteudoPrincipal__tweet")
    let img = document.createElement("img")
        img.src = foto
        img.classList.add("tweet__fotoPerfil")
    let div = document.createElement("div")
        div.classList.add("tweet__conteudo")
    let h2 = document.createElement("h2")
        h2.innerText = nome
    let span = document.createElement("span")
        span.innerText = `${usuario} - ${tempo}`
    let p = document.createElement("p")
        p.innerText = texto

    // elementos dentro da div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    // elementos dentro da li
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.value= " "

}
