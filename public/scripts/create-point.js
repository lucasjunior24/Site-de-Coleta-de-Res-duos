
function populeteUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populeteUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufvalue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {


            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta
// pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {

    const itemLi = event.target

    // adcionar ou remover uma classe com javascript

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // console.log("Item id: ", itemId)

    // verificar se existe itens selecionados 
    // pegar itens selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso sera true ou false
        return itemFound
    })

    // se ja estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não tiver selecionado
        // adicionar a da seleção
        selectedItems.push(itemId)
    }
    // console.log("selectedItems: ", selectedItems)

    // atualizar campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}