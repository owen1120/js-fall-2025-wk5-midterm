const cardWrapper = document.querySelector('.cards-wrapper');
const searchNum = document.getElementById('searchNum');

const formatter = new Intl.NumberFormat('en-US');

export function renderCards(data) {
    if (!cardWrapper) {
        console.error('Card wrapper element not found');
        return;
    }

    if (searchNum) {
        searchNum.textContent = `本次搜尋共 ${data.length} 筆資料`;
    }

    if (data.length === 0) {
        cardWrapper.innerHTML = '<p class="no-data">查無此關鍵字資料</p>';
        return;
    }

    const cardsHTML = data.map(item => {

        const formatPrice = formatter.format(item.price);

        return `
        <li class="cards">
            <a href="${item.linkUrl}" class="card">
                <div class="card-img">
                    <img src="${item.image}" alt="${item.name}" class="img">
                </div>
                <div class="card-contents">
                    <div class="contents-top">
                        <h2 class="title label-lg">${item.name}</h2>
                        <p class="para para-md">${item.description}</p>
                    </div>
                    <div class="contents-bottom">
                        <div class="remain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#00807E"/>
                            </svg>
                            <p class="label-sm">剩下最後 ${item.number} 組</p>
                         </div>
                        <div class="prices">
                            <p class="currency label-sm">TWD</p>
                            <p class="price label-xl">$${formatPrice}</p>
                        </div>
                    </div>
                    <div class="stars-tag">
                        <span class="para-md">${item.stars}</span>
                    </div>
                </div>
            </a>
            <div class="place-tag">
                <span class="label-md">${item.place}</span>
            </div>
        </li>
        `;
    }).join('');

    cardWrapper.innerHTML = cardsHTML;
}