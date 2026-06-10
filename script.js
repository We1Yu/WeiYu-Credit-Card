let cardDetails = {};
let cardScoring = {};

async function loadCardData() {
    try {
        const res = await fetch('cards.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        cardDetails = data.cardDetails;
        cardScoring = data.cardScoring;
    } catch (e) {
        console.error('無法載入卡片資料：', e);
        document.querySelector('main')?.insertAdjacentHTML('afterbegin',
            `<p style="text-align:center;color:#e74c3c;padding:20px;">
                ⚠️ 卡片資料載入失敗，請確認已透過本機伺服器開啟網頁（不可直接雙擊 .html）。
            </p>`
        );
    }
}

// 開啟彈窗
function openModal(id) {
    const data = cardDetails[id];
    const modal = document.getElementById('card-modal');
    const body = document.getElementById('modal-body');

    if (data) {
        body.innerHTML = `
            <h2 class="modal-detail-title">${data.name}</h2>
            <p><strong>所屬銀行：</strong>${data.bank}</p>
            <div class="modal-detail-item">
                <strong>核心優惠：</strong>
                <ul>
                    ${data.perks.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            <p class="modal-detail-item"><strong>年費資訊：</strong>${data.fee}</p>
            <br>
            <a href="${data.applyUrl}" target="_blank" style="display:inline-block; background:#e74c3c; color:white; padding:10px 20px; border-radius:5px; text-decoration:none;">立即申請</a>
        `;
        modal.style.display = "block";
    }
}

// 關閉彈窗
function closeModal() {
    document.getElementById('card-modal').style.display = "none";
}

// 點擊彈窗外部關閉
window.onclick = function (event) {
    const modal = document.getElementById('card-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// 輪播圖
let currentSlideIndex = 1;
let slideInterval;
let isTransitioning = false;
let slideContainer;
let slides;
let dots;
let totalOriginalSlides;

function initCarousel() {
    slideContainer = document.querySelector('.carousel-slide');
    const originalSlides = document.querySelectorAll('.carousel-item');
    dots = document.querySelectorAll('.dot');
    totalOriginalSlides = originalSlides.length;

    if (totalOriginalSlides === 0) return;

    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[totalOriginalSlides - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slideContainer.appendChild(firstClone);
    slideContainer.insertBefore(lastClone, originalSlides[0]);

    slides = document.querySelectorAll('.carousel-item');

    slideContainer.style.transition = 'none';
    slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    slideContainer.addEventListener('transitionend', handleTransitionEnd);

    startSlideShow();
}

function handleTransitionEnd() {
    isTransitioning = false;

    if (slides[currentSlideIndex].id === 'first-clone') {
        slideContainer.style.transition = 'none';
        currentSlideIndex = 1;
        slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    if (slides[currentSlideIndex].id === 'last-clone') {
        slideContainer.style.transition = 'none';
        currentSlideIndex = totalOriginalSlides;
        slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
}

function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    slideContainer.style.transition = 'transform 0.5s ease-in-out';
    currentSlideIndex = index;
    slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    let dotIndex = currentSlideIndex - 1;
    if (currentSlideIndex === totalOriginalSlides + 1) {
        dotIndex = 0;
    } else if (currentSlideIndex === 0) {
        dotIndex = totalOriginalSlides - 1;
    }

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[dotIndex]) {
        dots[dotIndex].classList.add('active');
    }
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
    resetSlideShow();
}

function goToSlide(dotIndex) {
    showSlide(dotIndex + 1);
    resetSlideShow();
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

// 智能推薦：關鍵字對應情境
const keywordDictionary = {
    "7-11": "convenience", "711": "convenience", "全家": "convenience", "萊爾富": "convenience", "ok": "convenience", "超商": "convenience", "便利商店": "convenience",
    "中油": "gas", "全國加油站": "gas", "台亞": "gas", "加油": "gas",
    "餐廳": "restaurant", "美食": "restaurant", "麥當勞": "restaurant", "星巴克": "restaurant", "王品": "restaurant",
    "pchome": "online", "網購": "online", "網路購物": "online", "淘寶": "online", "博客來": "online",
    "momo": "momo_shop", "蝦皮": "shopee_shop", "shopee": "shopee_shop",
    "line pay": "mobile_pay", "linepay": "mobile_pay", "街口": "mobile_pay", "apple pay": "mobile_pay", "行動支付": "mobile_pay", "台灣pay": "mobile_pay",
    "日本": "japan", "日韓": "japan", "出國": "overseas", "海外": "overseas", "國外": "overseas"
};

function getScenarioFromInput(inputText) {
    if (!inputText) return null;
    const lowerInput = inputText.toLowerCase().trim();
    for (const [keyword, scenario] of Object.entries(keywordDictionary)) {
        if (lowerInput.includes(keyword)) {
            return scenario;
        }
    }
    return null;
}

function initSuggestPage() {
    const grid = document.getElementById('owned-cards-grid');
    if (!grid) return;

    for (const [id, data] of Object.entries(cardDetails)) {
        const label = document.createElement('label');
        label.className = 'card-checkbox-label';
        label.innerHTML = `<input type="checkbox" value="${id}"> ${data.name}`;
        grid.appendChild(label);
    }
}

function recommendCard() {
    const checkboxes = document.querySelectorAll('#owned-cards-grid input:checked');
    const selectedCards = Array.from(checkboxes).map(cb => cb.value);
    const selectScenario = document.getElementById('scenario-select').value;
    const searchInput = document.getElementById('store-search') ? document.getElementById('store-search').value : '';
    const resultDiv = document.getElementById('recommendation-result');
    const infoDiv = document.getElementById('recommended-card-info');

    if (selectedCards.length === 0) {
        alert('請先選擇您擁有的信用卡！');
        return;
    }

    let scenario = null;
    let scenarioText = "";

    if (searchInput.trim() !== '') {
        scenario = getScenarioFromInput(searchInput);
        if (scenario) {
            scenarioText = `根據您的搜尋「${searchInput}」`;
        } else {
            scenario = "domestic";
            scenarioText = `找不到「${searchInput}」的特定加碼，將以「國內一般消費」計算`;
        }
    } else if (selectScenario) {
        scenario = selectScenario;
        scenarioText = `根據您選擇的情境`;
    } else {
        alert('請搜尋商店或從清單選擇消費情境！');
        return;
    }

    const scoredCards = [];
    for (const cardId of selectedCards) {
        const score = cardScoring[cardId]?.[scenario] || 0;
        if (score > 0) {
            scoredCards.push({ cardId, score });
        }
    }

    scoredCards.sort((a, b) => b.score - a.score);
    const topCards = scoredCards.slice(0, 3);

    if (topCards.length > 0) {
        let cardsHtml = topCards.map((item, index) => {
            const card = cardDetails[item.cardId];
            const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉";
            return `
                <div class="recommended-card-box" style="margin: 10px; flex: 1; min-width: 200px; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <h4 style="font-size: 1.3rem; margin: 0 0 10px 0; color: #d35400;">${medal} ${card.name}</h4>
                        <p style="font-size: 1.1rem; margin: 0 0 15px 0;">預估最高回饋：<strong>${item.score}%</strong></p>
                    </div>
                    <button class="detail-btn" style="width: 100%;" onclick="openModal('${item.cardId}')">查看詳情</button>
                </div>
            `;
        }).join('');

        infoDiv.innerHTML = `
            <p style="color: #666; margin-bottom: 10px;">${scenarioText}</p>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: stretch;">
                ${cardsHtml}
            </div>
        `;
        resultDiv.style.display = 'block';
    } else {
        infoDiv.innerHTML = `
            <p style="color: #666; margin-bottom: 10px;">${scenarioText}</p>
            <p>在您擁有的卡片中，目前沒有特別推薦用於此情境的卡片。</p>`;
        resultDiv.style.display = 'block';
    }
}

// 顯示最後更新時間
function initUpdateTime() {
    const updateTimeElement = document.getElementById('last-update-time');
    if (updateTimeElement) {
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        updateTimeElement.textContent = formattedDate;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadCardData();
    initCarousel();
    initSuggestPage();
    initUpdateTime();
});
