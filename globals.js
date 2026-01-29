
import { getIdToLocate } from "./Functions/getIdToLocate.js"
import { getInfoData } from "./Functions/getInfoData.js"

const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchButton")

const id = document.querySelector("#id")
const nome = document.querySelector("#nome")
const filmList = document.querySelector("#filmList")
const gameList = document.querySelector("#gameList")
const image = document.querySelector("#image")
const listRight = document.querySelector("#listRight")
const listLeft = document.querySelector("#listLeft")

searchButton.addEventListener("click", () => {
    getInfoData(searchInput.value, id, nome, filmList, gameList, image, listLeft, listRight)
    searchInput.value = ""
})