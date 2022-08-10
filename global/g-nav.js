; (_ => {
    document.write(`
<style>
    /* PC */
    @media screen and (min-width: 992px) {
    #g-nav {
        font-size: 80%;
    }
    }
    /* 再帰的にスタイリングしたいため、スタイルシートを使用 */
    #g-nav ul {
    list-style: none;
    padding-left: 1rem;
    }
</style>

<nav class="navbar navbar-expand-lg navbar-light flex-lg-column h-lg-100">
    <a href="/hvc-room/" class="navbar-brand m-0">
    <img src="/hvc-room/neoria_icon_400.png" width="28">
    ひぶしの部屋
    </a>
    <button class="navbar-toggler" data-target="#g-nav" data-toggle="collapse" aria-controls="g-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <!-- g-navにd-flexとjustify-content-centerを付与すると、小画面の際に左右中央揃えができるが、
    ドロップダウンの開閉の挙動がバグるため、今は付与しない -->
    <div id="g-nav" class="collapse navbar-collapse align-items-lg-start">
    <div class="d-flex justify-content-ce
    nter">
        <ul class="mt-3 p-0">
            <li>
                ミニツール
            </li>
            <ul>
                <li>
                    <a href="/hvc-room/miniTools/msTime/index.html" class="text-wrap">ミリ秒時計</a>
                </li>
                <li>
                    <a href="/hvc-room/miniTools/progressbarTime/index.html" class="text-wrap">プログレスバー時計</a>
                </li>
            </ul>
        </ul>
    </div>
    </div>
</nav>
`);
})();