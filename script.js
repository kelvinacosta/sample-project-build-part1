
const renderCards = (dataArr) => {
    const cardContainer = document.getElementById("card-container")
    
    dataArr.forEach(cardInfo => {
        
        const img = document.createElement('img')
        img.src = cardInfo.image

        cardContainer.appendChild(img)
        

    })
}


fetch("https://botw-compendium.herokuapp.com/api/v2")
.then(res => res.json())
.then(info => renderCards(info.data.monsters))