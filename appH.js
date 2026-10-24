'use strict'

//Pegando API de todas as casas
async function buscarTodos() {
    const url = `https://hp-api.onrender.com/api/characters`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function buscarRepositorioGrifinoria() {
    const grifinoria = `https://hp-api.onrender.com/api/characters/house/gryffindor`
    const response = await fetch(grifinoria)
    const data = await response.json()
    return data
}

async function buscarRepositorioSonserina() {
    const sonserina = `https://hp-api.onrender.com/api/characters/house/slytherin`
    const response = await fetch(sonserina)
    const data = await response.json()
    return data
}

async function buscarRepositorioCorvinal() {
    const corvinal = `https://hp-api.onrender.com/api/characters/house/ravenclaw`
    const response = await fetch(corvinal)
    const data = await response.json()
    return data
}

async function buscarRepositorioLufalufa() {
    const lufalufa = `https://hp-api.onrender.com/api/characters/house/hufflepuff`
    const response = await fetch(lufalufa)
    const data = await response.json()
    return data
}

// Criacao dos cards e mostrando no site
function criarCard(url){
    const card = document.createElement('div')
    card.className = 'card'
    const foto = document.createElement('img')
    foto.className = 'imgPersonagem1'
    foto.src = url.image

    if(url.image === ""){
        foto.src = 'https://i.pinimg.com/736x/d2/ce/5a/d2ce5a8ce12a5dbe3b9f579b7bdd71b3.jpg'
    }

    const nome = document.createElement('h2')
    nome.textContent = url.name

    const informacoes = document.createElement('ul')
    const especie = document.createElement('li')
    especie.textContent = url.species
    const genero = document.createElement('li')
    genero.textContent = url.gender
    const casa = document.createElement('li')
    casa.textContent = url.house
    const dataNasc = document.createElement('li')
    dataNasc.textContent = url.dateOfBirth

    informacoes.replaceChildren(especie, genero, casa, dataNasc)
    card.replaceChildren(foto, nome, informacoes)
    return card
}

// Criando const com base no id, esperando resposta da API e fornecendo dados para a criacao dos cards
async function preencherGaleriaGrifinoria() {
    const galeria = document.getElementById("personagens")
    const repositorio = await buscarRepositorioGrifinoria()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

async function preencherGaleriaSonserina() {
    const galeria = document.getElementById("personagens")
    const repositorio = await buscarRepositorioSonserina()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

async function preencherGaleriaCorvinal() {
    const galeria = document.getElementById("personagens")
    const repositorio = await buscarRepositorioCorvinal()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

async function preencherGaleriaLufalufa() {
    const galeria = document.getElementById("personagens")
    const repositorio = await buscarRepositorioLufalufa()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

async function preencherGaleriaDeTodas() {
    const galeria = document.getElementById("personagens")
    const repositorio = await buscarTodos()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

// Pegando elementos a partir do id
const grifinoriaButton = document.getElementById('grifinoria')
const sonserinaButton = document.getElementById('sonserina')
const corvinalButton = document.getElementById('corvinal')
const lufalufaButton = document.getElementById('lufalufa')
const todasAsCasasButton = document.getElementById('todasAsCasas')

// Atribuindo a atividade onclick para visualizacao dos personagens atraves das funcoes
grifinoriaButton.onclick = () => preencherGaleriaGrifinoria()
sonserinaButton.onclick = () => preencherGaleriaSonserina()
corvinalButton.onclick = () => preencherGaleriaCorvinal()
lufalufaButton.onclick = () => preencherGaleriaLufalufa()
todasAsCasas.onclick = () => preencherGaleriaDeTodas()
