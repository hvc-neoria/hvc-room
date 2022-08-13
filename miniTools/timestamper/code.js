// テーブルのレコード番号
let recordNum = 1;
// prevUnixTime変数の初期値
const initialPrevUnixTime = 0;
// 1つ前のレコードで発行したユニックスタイム
let prevUnixTime = initialPrevUnixTime;

/**
 * クリック時のメソッド
 */
const onclick = _ => {
    const tbody = document.getElementsByTagName("tbody")[0];
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    tr.appendChild(createRecordNumTh());
    const currentDatetime = new Date();
    tr.appendChild(createTimestampTd(currentDatetime));
    tr.appendChild(createElapsedTimeTd(currentDatetime));

    moveScrollbarToBottom();
}

const button = document.getElementsByClassName("btn")[0];
button.onclick = onclick;

/**
 * レコード番号テーブルヘッダーを返す
 * 生成する度にインクリメントする
 * @returns レコード番号テーブルヘッダー
 */
const createRecordNumTh = _ => {
    const recordNumTh = document.createElement("th");
    recordNumTh.scope = "row";
    recordNumTh.textContent = recordNum++;
    return recordNumTh;
}

/**
 * タイムスタンプテーブルデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns タイムスタンプテーブルデータ
 */
const createTimestampTd = currentDatetime => {
    const timestampTd = document.createElement("td");
    timestampTd.textContent = `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;
    return timestampTd;
}

/**
 * 1つ前のタイムスタンプから現在のタイムスタンプまでの経過時間が記載されたテーブルデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns 経過時間テーブルデータ
 */
const createElapsedTimeTd = currentDatetime => {
    const elapsedTimeTd = document.createElement("td");

    // 現在のユニックスタイム
    // JavaScriptの現在日時はミリ秒だが、当ツールでは秒以上で取扱いたいため、
    // 秒に変換している
    const currentUnixTime = Math.floor(currentDatetime.getTime() / 1000)

    if (prevUnixTime === initialPrevUnixTime) {
        elapsedTimeTd.textContent = `-`;
    } else {
        const diff = currentUnixTime - prevUnixTime;
        const seconds = Math.floor(diff % 60);
        const minutes = Math.floor(diff / 60 % 60);
        const hours = Math.floor(diff / (60 * 60) % 60);
        elapsedTimeTd.textContent = `${hours}h${minutes}m${seconds}s`;
    }
    
    prevUnixTime = currentUnixTime;
    return elapsedTimeTd;
}

/**
 * スクロールバーの位置を最下部にする
 */
const moveScrollbarToBottom = _ => {
    const container = document.getElementsByClassName("table-container")[0];
    container.scrollTo(0, container.scrollHeight);
}
