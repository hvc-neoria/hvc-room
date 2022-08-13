const button = document.getElementsByClassName("btn")[0];

let num = 1;
// 前のタイムスタンプ時点でのユニックスタイム
let prevUnixTime = 0;

const onclick = _ => {
    const tbody = document.getElementsByTagName("tbody")[0];
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const numElement = document.createElement("th");
    numElement.scope = "row";
    numElement.textContent = num++;
    tr.appendChild(numElement);

    const timestampTd = document.createElement("td");
    const currentDatetime = new Date();
    timestampTd.textContent = `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;
    tr.appendChild(timestampTd);

    const elapsedTimeTd = document.createElement("td");

    // 現在のユニックスタイム
    // JavaScriptの現在日時はミリ秒だが、当ツールでは秒以上で取扱いたいため、
    // 秒に変換している
    const currentUnixTime = Math.floor(currentDatetime.getTime() / 1000)
    if (prevUnixTime === 0) {
        elapsedTimeTd.textContent = `-`;
    } else {
        const diff = currentUnixTime - prevUnixTime;
        const seconds = Math.floor(diff % 60);
        const minutes = Math.floor(diff / 60 % 60);
        const hours = Math.floor(diff / (60 * 60) % 60);
        elapsedTimeTd.textContent = `${hours}h${minutes}m${seconds}s`;
    }
    tr.appendChild(elapsedTimeTd);
    prevUnixTime = currentUnixTime;

    // スクロールバーの位置を最下部にする
    const container = document.getElementsByClassName("table-container")[0];
    container.scrollTo(0, container.scrollHeight);
}

// const appendTimestamp = (currentDatetime, tr) => {
//     const timestampTd = document.createElement("td");
//     timestampTd.textContent = `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;
//     tr.appendChild(timestampTd);
// }

button.onclick = onclick;