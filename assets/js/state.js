const packageDataList = [
    {
        id: 1,
        name: '綠島自由行套裝行程',
        image: 'https://cdn.pixabay.com/photo/2017/08/07/08/22/sea-2601368_1280.jpg',
        place: '台東',
        price: 1280,
        number: 8,
        stars: 8.6,
        description: '嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。',
    },
    {
        id: 2,
        name: '清境高空觀景步道二日遊',
        image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        place: '南投',
        price: 2580,
        number: 12,
        stars: 8.2,
        description: '清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。',
    },
    {
        id: 3,
        name: '南庄度假村露營車二日遊',
        image: 'https://images.unsplash.com/photo-1598954467835-3b0b6fe3be70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        place: '台中', 
        price: 1280,
        number: 2,
        stars: 9.6,
        description: '南庄雲水豪華露營車，擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。',
    },
    {
        id: 4,
        name: '山林悠遊雙人套票',
        image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        place: '台中',
        price: 880,
        number: 10,
        stars: 8.6,
        description: '山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。<br>（含雙龍瀑布入場券 x2）',
    },
    {
        id: 5,
        name: '漁樂碼頭釣魚體驗套票',
        image: 'https://images.unsplash.com/photo-1490556505947-f833c3a09659?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        place: '台中',
        price: 1280,
        number: 5,
        stars: 8.6,
        description: '中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！',
    },
    {
        id: 6,
        name: '熊森公園親子二日遊套票',
        image: 'https://images.unsplash.com/photo-1535726858289-9ffe2dff6f52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
        place: '高雄',
        price: 2480,
        number: 3,
        stars: 8.6,
        description: '來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！',
    },
];

let allPackages = [];

function transformApiData(apiItem) {
    return {
        id: apiItem.id,
        name: apiItem.name,
        image: apiItem.imgUrl,
        place: apiItem.area,
        price: apiItem.price,
        number: apiItem.group,
        stars: apiItem.rate,
        description: apiItem.description,
    };
}

export function transformFormData(data) {
    return {
        name: data.packageName,
        image: data.packageWebsite,
        place: data.packagePlace,
        price: parseFloat(data.packagePrice) || 0,
        number: parseInt(data.packageNum) || 0,
        stars: parseFloat(data.packageStar) || 0,
        description: data.packageDesc,
    };
}

export async function fetchRemotePackage() {
    const apiUrl = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json';

    try {
        const response = await axios.get(apiUrl);   
        if (response.data && Array.isArray(response.data.data)) {
            const remoteData = response.data.data.map(transformApiData);
            allPackages = [...packageDataList, ...remoteData];

            console.log('Remote package data fetched and merged successfully.');
        } else {
            allPackages = [...packageDataList];
        }
    } catch (error) {
        console.error('Error fetching remote package data:', error);

        allPackages = [...packageDataList];
    }
}

export function getAllPackages() {
    return allPackages;
}

export function getFilteredPackages(place) {
    if (place === "" || place === "全部地區" || place === "地區搜尋") {
        return allPackages;
    }

    return allPackages.filter(item => item.place === place);
}

export function addPackage(newPackageData) {
    let newId;
    if (allPackages.length > 0) {
        const idArray = allPackages.map(item => item.id);
        const maxId = Math.max(...idArray);
        newId = maxId + 1;
    } else {
        newId = 0;
    }

    newPackageData.id = newId;
    
    allPackages.push(newPackageData);
    console.log('New package added:', newPackageData);
}