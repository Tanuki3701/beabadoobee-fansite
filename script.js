// 目標日期(new建立JS日期物件 get回傳時間)
const targetDate = new Date("2025-08-09T20:00:00").getTime();

// 顯示倒數計時區塊
const timerElement = document.getElementById("timer");

// 每秒更新倒數計時
setInterval(() => {
    const now = new Date().getTime(); 
    const distance = targetDate - now;

    // 計算天、時、分、秒
    // Math.floor()去除小數取整數
    // %取餘數(整天後剩餘的時間換算成時、分、秒)
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // 1000毫秒 = 1秒 / 1000 * 60 = 1分 / 1000 * 60 * 60 = 1小時 / 1000 * 60 * 60 * 24 = 1天

    // 更新顯示內容(倒數結果更新至畫面上)
    timerElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    
    //目標日期已到
    if (distance < 0) {
        timerElement.textContent = "The Concert Has Started!";
    }
}, 1000);