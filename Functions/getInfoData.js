
import { getIdToLocate } from "./getIdToLocate.js"

export async function getInfoData(param, id, nome, films, games, imgUrl, listLeft, listRight) {
    const verifyIsNumber = param / param

    const dataFetch = await fetch(`https://api.disneyapi.dev/character?name=${param}&page=1&pageSize=9992`)
    const data = await dataFetch.json()
    let totalCount = data.info.count

    if (totalCount < 10) {
        totalCount = 10
    }


    //Pesquisa por Personagem (Se for Strings)
    if (verifyIsNumber !== 1) {
        const dataFetch1 = await fetch(`https://api.disneyapi.dev/character?name=${param}&page=1&pageSize=${Math.ceil(totalCount / 2)}`)
        const data1 = await dataFetch1.json()

        const dataFetch2 = await fetch(`https://api.disneyapi.dev/character?name=${param}&page=2&pageSize=${Math.ceil(totalCount / 2)}`)
        const data2 = await dataFetch2.json()

        listLeft.innerHTML = `Lista 01`
        listRight.innerHTML = `Lista 02`

        id.innerHTML = ``
        nome.innerHTML = ``

        imgUrl.innerHTML = `
            <img src="" 
                alt=""
                class="w-full max-h-full">
        `

        films.innerHTML = ``
        games.innerHTML = ``
        for (let i = 0; i < data1.data.length; i++) {
            films.innerHTML += `
            <li type="${data1.data[i]._id}" id="id-${data1.data[i]._id}" class="cursor-pointer">${data1.data[i]._id} | ${data1.data[i].name}</li>
            `
        }

        for (let i = 0; i < data1.data.length; i++) {
            let idGeted = document.querySelector(`#id-${data1.data[i]._id}`)
            idGeted.addEventListener("click", () => {
                getIdToLocate(idGeted.type, id, nome, films, games, imgUrl, listLeft, listRight)
            })
        }



        for (let i = 0; i < data2.data.length; i++) {
            games.innerHTML += `
            <li type="${data2.data[i]._id}" id="id-${data2.data[i]._id}" class="cursor-pointer">${data2.data[i]._id} | ${data2.data[i].name}</li>
            `
        }

        for (let i = 0; i < data2.data.length; i++) {
            let idGeted = document.querySelector(`#id-${data2.data[i]._id}`)
            idGeted.addEventListener("click", () => {
                getIdToLocate(idGeted.type, id, nome, films, games, imgUrl, listLeft, listRight)
            })
        }

















        //Pesquisa por ID (Se for Number)
    } else if (verifyIsNumber === 1) {
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




}