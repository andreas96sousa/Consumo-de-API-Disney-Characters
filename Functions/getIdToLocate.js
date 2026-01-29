export async function getIdToLocate(param, id, nome, films, games, imgUrl, listLeft, listRight) {
    const dataFetch = await fetch(`https://api.disneyapi.dev/character/${param}`)
    const data = await dataFetch.json()

    id.innerHTML = data.data._id
    nome.innerHTML = data.data.name

    listLeft.innerHTML = `Lista de Filmes`
    listRight.innerHTML = `Lista de Jogos`

    films.innerHTML = ``
    for (let i = 0; i < data.data.films.length; i++) {
        films.innerHTML += `<li>${data.data.films[i]}</li>`
    }
    games.innerHTML = ``
    for (let i = 0; i < data.data.videoGames.length; i++) {
        games.innerHTML += `<li>${data.data.videoGames[i]}</li>`
    }
    imgUrl.innerHTML = `
            <img src=${data.data.imageUrl} 
                alt="${data.data.name}"
                class="w-full max-h-full">
        `
}