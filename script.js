const cardDetails = {
    // 國內一般消費
    "dawho": {
        name: "永豐DAWHO現金回饋卡",
        bank: "永豐銀行",
        perks: ["大戶等級：國內一般消費 2%、國外 3%", "指定通路再加碼 5% (國內最高 7%、國外最高 8%)", "新戶加碼，綁定指定行動支付享最高 20% 回饋"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/7EVa11"
    },
    "gogo": {
        name: "台新 Richart 卡",
        bank: "台新銀行",
        perks: ["整合原GoGo等卡片，七大方案自由切換", "指定通路最高 3.8% 回饋 (2026年重新納入LINE Pay)"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/Z2NmKA"
    },
    "cashback_visa": {
        name: "滙豐現金回饋御璽卡",
        bank: "滙豐銀行",
        perks: ["國內消費：1.22% 現金回饋，無上限", "國外消費：2.22% 現金回饋，無上限"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/18O96X"
    },
    "line_bank": {
        name: "聯邦LINE Bank聯名卡",
        bank: "聯邦銀行",
        perks: ["國內消費： 1% 現金回饋無上限", "國外消費： 2.5% 現金回饋無上限"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/7EVagy"
    },
    "cube": {
        name: "國泰 CUBE 卡",
        bank: "國泰世華",
        perks: ["權益天天切換", "權益分級制：LEVEL 1 享 2%、LEVEL 2 享 3%", "尊榮會員最高享 3.3% 回饋"],
        fee: "首年免年費，次年消費滿額免年費",
        applyUrl: "https://www.cathaybk.com.tw/..."
    },

    // 出國旅遊(旅日首選)
    "fubon_j": {
        name: "富邦J卡",
        bank: "台北富邦銀行",
        perks: ["日韓實體消費最高 10% (需登錄)", "日韓地區基本回饋 3% 無上限"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/6Gq81d"
    },
    "giho": {
        name: "聯邦吉鶴卡",
        bank: "聯邦銀行",
        perks: ["日本實體消費最高 4% (含Apple Pay加碼)", "日本實體消費 2.5% 無上限", "國內一般消費 1% 無上限 (綁定帳戶扣繳最高 1.3%)"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/V2W9k5"
    },
    "kumamon": {
        name: "日本熊本熊卡",
        bank: "玉山銀行",
        perks: ["日本地區消費最高 8.5% 回饋", "日本PayPay 最高 5% 回饋"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/8e9kdj"
    },
    "sinopac_jcb": {
        name: "永豐現金回饋JCB卡",
        bank: "永豐銀行",
        perks: ["國外消費： 2% 現金回饋無上限", "國內消費： 1% 現金回饋無上限"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/X2Qz70"
    },
    "flygo": {
        name: "台新 FlyGo 卡",
        bank: "台新銀行",
        perks: ["海外消費最高 3% 無上限", "精選通路最高 5% 回饋： 包含航空公司、交通、訂房/訂票通路"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/R2kNA6"
    },

    // 網購&行動支付
    "ubear": {
        name: "玉山U Bear卡",
        bank: "玉山銀行",
        perks: ["網購/行動支付最高 3% (加碼上限調降至150元)", "數位訂閱平台（Netflix、Disney+、Spotify...等）享最高 10% 現金回饋"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/4lNxEK"
    },
    "momo": {
        name: "台北富邦momo聯名卡",
        bank: "台北富邦銀行",
        perks: ["momo購物網： 筆筆5% momo幣回饋無上限，指定品牌最高享10%以上回饋", "一般消費： 國內1% / 國外2% 回饋無上限"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/N2xWz6"
    },
    "sport": {
        name: "永豐Sport卡",
        bank: "永豐銀行",
        perks: ["最高回饋 5% 豐點", "新戶加碼最高 20%"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/N2xWzQ"
    },
    "magi": {
        name: "凱基魔BUY卡",
        bank: "凱基銀行",
        perks: ["行動支付最高 4% 回饋", "新戶加碼再+2%"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/npYKWl"
    },
    "shopee": {
        name: "國泰世華蝦皮購物聯名卡",
        bank: "國泰世華",
        perks: ["蝦皮站內最高 5.5% 蝦幣", "月月 0 元免運券", "指定通路加碼最高 7%"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/dpaYKM"
    },

    // 生活風格/分期
    "sinopac_baby": {
        name: "永豐銀行 保倍卡",
        bank: "永豐銀行",
        perks: ["1.2% 現金回饋無上限", "最高 12 期分期 0 利率 0 手續費"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/xW3RYe"
    },
    "hsbc_diamond": {
        name: "匯豐銀行 匯鑽卡",
        bank: "匯豐銀行",
        perks: ["指定通路 3% 起", "回饋翻倍 6%"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/53Rm7n"
    },
    "first_ileo": {
        name: "第一銀行 iLeo卡",
        bank: "第一銀行",
        perks: ["新戶限定高回饋:定行動支付及海外消費享 10% 回饋（行動支付上限500元、海外上限2000元）", "海外實體消費： 享最高 13% 回饋", "分期優惠： 綠色消費單筆滿額享3期0利率"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/O6mZ7v"
    },
    "taishin_shinkong": {
        name: "台新銀行 新光三越聯名卡",
        bank: "台新銀行",
        perks: ["新光三越店內回饋：平時享店內購物正品 9 折起", "分期優惠： 聯名卡於館內單筆消費滿 3,000 元享 3 期 0 利率", "點數折抵： 刷卡消費可現場折抵新光三越skm points，最高可折抵 50%-100%"],
        fee: "無限卡/世界卡： 正卡 NT$4,500，附卡 NT$4,500",
        applyUrl: "https://reurl.cc/aXxO03"
    },
    "yuantadabest_share": {
        name: "享黑啤卡",
        bank: "元大銀行",
        perks: ["自動分期回饋：國內指定商店，12期免利息0利率。國內非指定商店：8期免利息0利率", "海外消費：8期免利息0利率，再享1.5%現金回饋"],
        fee: "使用電子帳單期間免年費",
        applyUrl: "https://reurl.cc/aXxOl3"
    },
};

// 2. 開啟彈窗的功能
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

// 3. 關閉彈窗的功能
function closeModal() {
    document.getElementById('card-modal').style.display = "none";
}

// 4. 點擊彈窗外部也可關閉
window.onclick = function (event) {
    const modal = document.getElementById('card-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// 5. 輪播圖功能
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

    // 複製第一張和最後一張圖片來製作無縫循環
    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[totalOriginalSlides - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slideContainer.appendChild(firstClone);
    slideContainer.insertBefore(lastClone, originalSlides[0]);

    slides = document.querySelectorAll('.carousel-item');

    // 初始化位置，不需要過場動畫
    slideContainer.style.transition = 'none';
    slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // 監聽過場動畫結束事件
    slideContainer.addEventListener('transitionend', handleTransitionEnd);

    startSlideShow();
}

function handleTransitionEnd() {
    isTransitioning = false;

    // 如果滑到了複製的第一張 (到了最尾端)
    if (slides[currentSlideIndex].id === 'first-clone') {
        slideContainer.style.transition = 'none';
        currentSlideIndex = 1;
        slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    // 如果滑到了複製的最後一張 (到了最前端)
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
    }, 3000); // 每3秒自動切換
}

function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

// 6. 智能卡片推薦功能
const cardScoring = {
    "dawho": { domestic: 3.5, overseas: 4.5, japan: 4.5, online: 3.5, momo_shop: 3.5, shopee_shop: 3.5, mobile_pay: 3.5, convenience: 0, gas: 0, restaurant: 3.5 },
    "gogo": { domestic: 0.5, overseas: 0.5, japan: 0.5, online: 3.8, momo_shop: 3.8, shopee_shop: 3.8, mobile_pay: 3.8, convenience: 3.8, gas: 0, restaurant: 0.5 },
    "cashback_visa": { domestic: 1.22, overseas: 2.22, japan: 2.22, online: 1.22, momo_shop: 1.22, shopee_shop: 1.22, mobile_pay: 1.22, convenience: 1.22, gas: 1.22, restaurant: 1.22 },
    "line_bank": { domestic: 1, overseas: 2.5, japan: 2.5, online: 1, momo_shop: 1, shopee_shop: 1, mobile_pay: 1, convenience: 1, gas: 1, restaurant: 1 },
    "cube": { domestic: 3, overseas: 3, japan: 3, online: 3, momo_shop: 3, shopee_shop: 3, mobile_pay: 0.3, convenience: 0.3, gas: 3.3, restaurant: 3 },
    "fubon_j": { domestic: 1, overseas: 3, japan: 6, online: 1, momo_shop: 1, shopee_shop: 1, mobile_pay: 1, convenience: 1, gas: 1, restaurant: 1 },
    "giho": { domestic: 1.3, overseas: 1.3, japan: 4.5, online: 1.3, momo_shop: 1.3, shopee_shop: 1.3, mobile_pay: 1.3, convenience: 1.3, gas: 1.3, restaurant: 4 },
    "kumamon": { domestic: 1, overseas: 1, japan: 8.5, online: 1, momo_shop: 1, shopee_shop: 1, mobile_pay: 1, convenience: 1, gas: 1, restaurant: 1 },
    "sinopac_jcb": { domestic: 1, overseas: 2, japan: 5, online: 1, momo_shop: 1, shopee_shop: 1, mobile_pay: 1, convenience: 1, gas: 1, restaurant: 1 },
    "flygo": { domestic: 0.5, overseas: 3, japan: 3, online: 0.5, momo_shop: 0.5, shopee_shop: 0.5, mobile_pay: 0.5, convenience: 0.5, gas: 0.5, restaurant: 0.5 },
    "ubear": { domestic: 1, overseas: 1, japan: 1, online: 3, momo_shop: 3, shopee_shop: 3, mobile_pay: 3, convenience: 3, gas: 1, restaurant: 1 },
    "momo": { domestic: 1, overseas: 2, japan: 2, online: 1, momo_shop: 4, shopee_shop: 1, mobile_pay: 1, convenience: 1, gas: 1, restaurant: 1 },
    "sport": { domestic: 1, overseas: 1, japan: 1, online: 1, momo_shop: 1, shopee_shop: 1, mobile_pay: 5, convenience: 5, gas: 1, restaurant: 1 },
    "magi": { domestic: 0.5, overseas: 0.5, japan: 0.5, online: 0.5, momo_shop: 0.5, shopee_shop: 0.5, mobile_pay: 4, convenience: 4, gas: 0.5, restaurant: 0.5 },
    "shopee": { domestic: 0.5, overseas: 0.5, japan: 0.5, online: 0.5, momo_shop: 0.5, shopee_shop: 5.5, mobile_pay: 0.5, convenience: 0.5, gas: 0.5, restaurant: 0.5 },
    "sinopac_baby": { domestic: 1.2, overseas: 1.2, japan: 1.2, online: 1.2, momo_shop: 1.2, shopee_shop: 1.2, mobile_pay: 1.2, convenience: 1.2, gas: 1.2, restaurant: 1.2 },
    "hsbc_diamond": { domestic: 1, overseas: 1, japan: 1, online: 3, momo_shop: 3, shopee_shop: 3, mobile_pay: 3, convenience: 1, gas: 1, restaurant: 1 },
    "first_ileo": { domestic: 0.5, overseas: 2, japan: 2, online: 0.5, momo_shop: 0.5, shopee_shop: 0.5, mobile_pay: 10, convenience: 10, gas: 0.5, restaurant: 0.5 },
    "taishin_shinkong": { domestic: 0.5, overseas: 0.5, japan: 0.5, online: 0.5, momo_shop: 0.5, shopee_shop: 0.5, mobile_pay: 0.5, convenience: 0.5, gas: 0.5, restaurant: 0.5 },
    "yuantadabest_share": { domestic: 0.5, overseas: 1.5, japan: 1.5, online: 0.5, momo_shop: 0.5, shopee_shop: 0.5, mobile_pay: 0.5, convenience: 0.5, gas: 0.5, restaurant: 0.5 },
};

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

    // 依分數從高到低排序
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

// 7. 顯示最後更新時間
function initUpdateTime() {
    const updateTimeElement = document.getElementById('last-update-time');
    if (updateTimeElement) {
        // 使用 document.lastModified 取得最後修改時間
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        updateTimeElement.textContent = formattedDate;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSuggestPage();
    initUpdateTime();
});