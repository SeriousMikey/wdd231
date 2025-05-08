let linksURL = "https://seriousmikey.github.io/wdd231/chamber/data/members.json";

let spotlightContainer = document.querySelector("#spotlightContainer")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    makeSpotlight(data.members);
}


function makeSpotlight(members) {
    // Get the unique member
    let member0 = 10
    let member1 = 11
    let member2 = 12

    for (i = 0; i < 3; i++) {
        let k = 0
        while (k == 0) {
            let randomNumber = Math.floor(Math.random() * 4);
            if (member0 != randomNumber && member1 != randomNumber && member2 != randomNumber) {
                member = members[randomNumber]
                k += 1
            }
            
            if (i == 0) {
                member0 = randomNumber
            }
            else if (i == 1) {
                member1 = randomNumber
            }
            else if (i == 2) {
                member2 = randomNumber
            }
        }

        // Create the elements
        let spotlight = document.createElement("div");
        spotlight.setAttribute("class", "spotlight");
        spotlight.innerHTML = `
        <h3>${member.name}</h3>
        <p>Membership Level: ${member.level}</p>
        <hr/>
        <div class="spotlightInfo">
        <img src="${member.logo}" alt="${member.name}">
        <div class="spotlightText">
        <p><strong>ADDRESS: </strong>${member.address}</p>
        <p><strong>PHONE: </strong>${member.address}</p>
        <a href=${member.url} target="_blank">Website</a>
        </div>
        </div>
        </div>
        `

        spotlightContainer.appendChild(spotlight);
    }
}

getLinks()