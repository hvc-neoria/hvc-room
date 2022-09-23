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

    tr.appendChild(createTextboxTd());

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
 * タイムスタンプが記載されたテーブルデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns タイムスタンプが記載されたテーブルデータ
 */
const createTimestampTd = currentDatetime => {
    const timestampTd = document.createElement("td");
    // 先頭に0を付与した後、後方から2文字取得
    const zeroPaddedH = `0${currentDatetime.getHours()}`.slice(-2);
    const zeroPaddedM = `0${currentDatetime.getMinutes()}`.slice(-2);
    const zeroPaddedS = `0${currentDatetime.getSeconds()}`.slice(-2);
    timestampTd.textContent = `${zeroPaddedH}:${zeroPaddedM}:${zeroPaddedS}`;
    return timestampTd;
}

/**
 * 1つ前のタイムスタンプから現在のタイムスタンプまでの経過時間が記載されたテーブルデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns 経過時間が記載されたテーブルデータ
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
        const s = Math.floor(diff % 60);
        const m = Math.floor(diff / 60 % 60);
        const h = Math.floor(diff / (60 * 60) % 60);
        // 先頭に0を付与した後、後方から2文字取得
        const zeroPaddedS = `0${s}`.slice(-2);
        const zeroPaddedM = `0${m}`.slice(-2);
        const zeroPaddedH = `0${h}`.slice(-2);
        elapsedTimeTd.textContent = `${zeroPaddedH}h${zeroPaddedM}m${zeroPaddedS}s`;
    }

    prevUnixTime = currentUnixTime;
    return elapsedTimeTd;
}

/**
 * テキストボックスを包括したテーブルデータを生成する
 * @returns テキストボックスを包括したテーブルデータ
 */
const createTextboxTd = _ => {
    const td = document.createElement("td");
    const textInput = document.createElement("input");
    textInput.className = "form-control";
    textInput.type = "text";
    td.appendChild(textInput);
    return td;
}

/**
 * スクロールバーの位置を最下部にする
 */
const moveScrollbarToBottom = _ => {
    const container = document.getElementsByClassName("table-container")[0];
    container.scrollTo(0, container.scrollHeight);
}
