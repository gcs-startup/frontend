// TODO: 서버로부터 item 개수와 id + 데이터 받아서 createItem 하기.

function createItem (enteredId, enteredImageUri, enteredTitle, enteredMainMessage, enteredSubMessage) {
    /*
    <div class="p-4 rounded-lg shadow-lg bg-gray-300">
        <div class="w-full h-64 my-4 rounded-lg flex items-center justify-center">
            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/919e1ba0-e13e-49ae-a660-181817e3970d-profile_image-300x300.png">
        </div>
        <h3 class="text-lg font-bold">Title</h3>
        <p class="font-semibold">디지털 보부상 주목,노트북+태블릿 한 방에 해결!</p>
        <p>N사 아이패드 파우치 1위에 새로운 신작! 아이패드/노트북 파우치&가방</p>
        <p>현재 투자 금액: 000 원</p>
        <div class="hover-button w-5/6">
            <form class="w-full">
                <div class="w-full h-12 my-4 rounded-lg flex items-center justify-center bg-red-500 text-white">매수하기</div>
                <div></div>
                <div class="w-full h-12 my-4 rounded-lg flex items-center justify-center bg-blue-500 text-white">매도하기</div>
            </form>
        </div>
    </div>
     */
    // item container 생성
    const item = document.createElement('div');
    item.className = 'item p-4 rounded-lg shadow-lg';

    // item Image
    const itemImage = document.createElement('div');
    itemImage.className = "w-full h-64 my-4 rounded-lg flex items-center justify-center";
    const imageUri = document.createElement('img');
    imageUri.src = enteredImageUri;
    imageUri.alt = '아이디어 이미지';
    itemImage.appendChild(imageUri);
    item.appendChild(itemImage);

    // 아이디어 제목
    const title = document.createElement('h3');
    title.className = 'text-lg font-bold';
    title.textContent = enteredTitle;
    item.appendChild(title);

    // 아이디어 메인 설명
    const mainMessage = document.createElement('p');
    mainMessage.className = 'font-semibold';
    mainMessage.textContent = enteredMainMessage;
    item.appendChild(mainMessage);

    // 아이디어 서브 설명
    const subMessage = document.createElement('p');
    subMessage.textContent = enteredSubMessage;
    item.appendChild(subMessage);

    // 내가 지금까지 이 아이템에 투자한 금액
    const paidMoney = document.createElement('p');
    paidMoney.className = 'paid-money text-red';
    paidMoney.textContent = `현재 투자 금액: 000 원`; // 투자금액란 수정 요망
    item.appendChild(paidMoney);

    // 아이템 매수 매도 버튼. hover시 나타남
    const hoverButtons = document.createElement('div');
    hoverButtons.className = 'hover-button w-5/6';
    // form
    const form = document.createElement('form');
    form.className = 'w-full';
    form.action = './trading.html';
    form.method = 'get';
    // 매수버튼
    const buyingButton = document.createElement('button');
    buyingButton.className = 'w-full h-12 my-4 rounded-lg flex items-center justify-center bg-red-500 text-white';
    buyingButton.name = 'tradingButton';
    buyingButton.value = 'buy';
    buyingButton.textContent = '매수하기';
    // 매도버튼
    const sellingButton = document.createElement('button');
    sellingButton.className = 'w-full h-12 my-4 rounded-lg flex items-center justify-center bg-blue-500 text-white';
    sellingButton.name = 'tradingButton';
    sellingButton.value = 'sell';
    sellingButton.textContent = '매도하기';
    form.appendChild(buyingButton);
    form.appendChild(document.createElement('div'));
    form.appendChild(sellingButton);
    // item ID값. 다음 페이지에서 아이템 정보를 서버에서 가져오기 위한 값. hidden type
    const id = document.createElement('input');
    id.type = 'hidden';
    id.name = 'itemId';
    id.value = enteredId;
    form.appendChild(id);

    hoverButtons.appendChild(form);
    item.appendChild(hoverButtons);

    // itemTable에 생성한 item 추가
    let itemTable = document.querySelector('.item-table');
    if (itemTable) {
        itemTable.appendChild(item);
    } else {
        console.error('아이템을 테이블에 넣을 수 없습니다.');
    }
}

createItem('123', "https://static-cdn.jtvnw.net/jtv_user_pictures/919e1ba0-e13e-49ae-a660-181817e3970d-profile_image-300x300.png", '타이틀 1', '세부정보1', '세부정보2');
// https://image.fmkorea.com/files/attach/new3/20230517/494354581/5422195760/5777684863/b5edceb05a174e368d1c465805e06684.png
// https://img.hankyung.com/photo/202309/ZK.34399539.1-1200x.jpg

// 노란색 내 정보 창에서 우측 화살표를 누르면 마이페이지 이동하는 리스너
document.getElementById('myPageButton').addEventListener('click', () => {
    window.location.href = 'mypage.html';
});