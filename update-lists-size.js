console.log("file loaded")

const getCards = (listElement) => listElement.querySelectorAll(".list-cards a")

const updateListsSize = () => {
  console.log("parent", parent.document.querySelectorAll(".list"))
  console.log("document", document.querySelectorAll(".list"))

  parent.document.querySelectorAll(".list")
    .forEach((list) => {
      const cards = getCards(list)
      const limitBadge = list.querySelector(".js-list-limit-badge")
      limitBadge.classList.remove("hide")
      limitBadge.innerHTML = cards.length
    })
}

setInterval(() => updateListsSize(), 500)