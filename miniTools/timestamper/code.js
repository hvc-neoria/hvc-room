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
    // 表本体を取得する
    const tbody = document.getElementsByTagName("tbody")[0];
    // 表本体に行を追加する
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // レコード番号を内包した表の見出しを行に追加する
    tr.appendChild(createRecordNumTh());

    const currentDatetime = new Date();
    // タイムスタンプが記載された表のデータを行に追加する
    tr.appendChild(createTimestampTd(currentDatetime));
    // 1つ前のタイムスタンプから現在のタイムスタンプまでの経過時間が記載された表のデータを行に追加する
    tr.appendChild(createElapsedTimeTd(currentDatetime));

    // テキストボックスを内包した表のデータを行に追加する
    tr.appendChild(createTextboxTd());

    // スクロールバーの位置を最下部にする
    moveScrollbarToBottom();
}

const button = document.getElementsByClassName("btn")[0];
button.onclick = onclick;

/**
 * レコード番号を内包した表の見出しを返す
 * 生成する度にインクリメントする
 * @returns レコード番号を内包した表の見出し
 */
const createRecordNumTh = _ => {
    const recordNumTh = document.createElement("th");
    recordNumTh.scope = "row";
    recordNumTh.textContent = recordNum++;
    return recordNumTh;
}

/**
 * タイムスタンプが記載された表のデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns タイムスタンプが記載された表のデータ
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
 * 1つ前のタイムスタンプから現在のタイムスタンプまでの経過時間が記載された表のデータを返す
 * @param {string} currentDatetime new Date()で出力される現在日時を渡す
 * @returns 経過時間が記載された表のデータ
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
 * テキストボックスを内包した表のデータを生成する
 * @returns テキストボックスを内包した表のデータ
 */
const createTextboxTd = _ => {
    const td = document.createElement("td");
    const textInput = document.createElement("input");
    textInput.classList.add("form-control");
    textInput.classList.add("form-control-sm");
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
