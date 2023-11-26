function createItem (enteredImageUri, enteredTitle, enteredMainMessage, enteredSubMessage) {
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
    const item = document.createElement('div');
    item.className = 'item p-4 rounded-lg shadow-lg';

    const itemImage = document.createElement('div');
    itemImage.className = "w-full h-64 my-4 rounded-lg flex items-center justify-center";
    const imageUri = document.createElement('img');
    imageUri.src = enteredImageUri;
    imageUri.alt = '아이디어 이미지';
    itemImage.appendChild(imageUri);
    item.appendChild(itemImage);

    const title = document.createElement('h3');
    title.className = 'text-lg font-bold';
    title.textContent = enteredTitle;
    item.appendChild(title);

    const mainMessage = document.createElement('p');
    mainMessage.className = 'font-semibold';
    mainMessage.textContent = enteredMainMessage;
    item.appendChild(mainMessage);

    const subMessage = document.createElement('p');
    subMessage.textContent = enteredSubMessage;
    item.appendChild(subMessage);

    const paidMoney = document.createElement('p');
    paidMoney.className = 'paid-money text-red';
    paidMoney.textContent = `현재 투자 금액: 000 원`;
    item.appendChild(paidMoney);

    const hoverButtons = document.createElement('div');
    hoverButtons.className = 'hover-button w-5/6';
    const form = document.createElement('form');
    form.className = 'w-full';
    form.action = './trading.html';
    form.method = 'post';
    hoverButtons.appendChild(form);
    const buyingButton = document.createElement('button');
    buyingButton.className = 'w-full h-12 my-4 rounded-lg flex items-center justify-center bg-red-500 text-white';
    buyingButton.textContent = '매수하기';
    const sellingButton = document.createElement('button');
    sellingButton.className = 'w-full h-12 my-4 rounded-lg flex items-center justify-center bg-blue-500 text-white';
    sellingButton.textContent = '매도하기';
    form.appendChild(buyingButton);
    form.appendChild(document.createElement('div'));
    form.appendChild(sellingButton);
    item.appendChild(hoverButtons);

    let itemTable = document.querySelector('.item-table');
    if (itemTable) {
        itemTable.appendChild(item);
    } else {
        console.error('아이템을 테이블에 넣을 수 없습니다.');
    }
}

createItem("https://static-cdn.jtvnw.net/jtv_user_pictures/919e1ba0-e13e-49ae-a660-181817e3970d-profile_image-300x300.png", '타이틀 1', '세부정보1', '세부정보2');
// https://image.fmkorea.com/files/attach/new3/20230517/494354581/5422195760/5777684863/b5edceb05a174e368d1c465805e06684.png
// https://img.hankyung.com/photo/202309/ZK.34399539.1-1200x.jpg
