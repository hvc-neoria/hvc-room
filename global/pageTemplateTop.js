// 通常のページの上側のテンプレート（共通部分）
// mainタグから上側
; (_ => {
  document.write(`
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- jqueryをbootstrapの前に読み込むことで、ページを開いた初回のみ発生する、ハンバーガーメニューを開けない問題を回避する -->
  <!-- https://stackoverflow-com.translate.goog/questions/20606209/bootstrap-uncaught-typeerror-cannot-read-property-fn-of-undefined?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <!-- Material Design Bootstrap ------------------------------ -->
  <!-- Font Awesome, Bootstrap core CSS, Material Design Bootstrap -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/css/mdb.min.css" rel="stylesheet">

  <title>ひぶしの部屋</title>
</head>

<style>
  /* 見出しのスキン */
  :root {
    --base-size: 16px;
    --h1-rate: calc(var(--base-size) * 1.8);
    --h2-rate: calc(var(--base-size) * 1.7);
    --h3-rate: calc(var(--base-size) * 1.5);
    --h4-rate: calc(var(--base-size) * 1.3);
    --h5-rate: calc(var(--base-size) * 1.2);
    --h6-rate: calc(var(--base-size) * 1);
    --h1-lg-rate: calc(var(--base-size) * 2.5);
    --h2-lg-rate: calc(var(--base-size) * 1.8);
    --h3-lg-rate: calc(var(--base-size) * 1.6);
    --h4-lg-rate: calc(var(--base-size) * 1.4);
    --h5-lg-rate: calc(var(--base-size) * 1.2);
    --h6-lg-rate: calc(var(--base-size) * 1);
  }
  .container h1, .container h2, .container h3, .container h4, .container h5, .container h6 {
    font-weight: bold;
    margin-top: 1rem;
  }
  .container h2 {
    border-bottom: 1px solid #dee2e6;
  }
  .container h1 {
    font-size: var(--h1-rate);
  }
  .container h2 {
    font-size: var(--h2-rate);
  }
  .container h3 {
    font-size: var(--h3-rate);
  }
  .container h4 {
    font-size: var(--h4-rate);
  }
  .container h5 {
    font-size: var(--h5-rate);
  }
  .container h6 {
    font-size: var(--h6-rate);
  }
  /* PC */
  @media screen and (min-width: 992px) {
    .container h1 {
      font-size: var(--h1-lg-rate);
    }
    .container h2 {
      font-size: var(--h2-lg-rate);
    }
    .container h3 {
      font-size: var(--h3-lg-rate);
    }
    .container h4 {
      font-size: var(--h4-lg-rate);
    }
    .container h5 {
      font-size: var(--h5-lg-rate);
    }
    .container h6 {
      font-size: var(--h6-lg-rate);
    }
  }
  p {
    margin-bottom: 0
  }
</style>

<body class="blue-grey lighten-5">
  <div class="container white z-depth-1">
    <div class="row">

      <!-- navbar-outer  -->
      <div class="col-lg-3 p-0 pr-lg-3">
        <script src="/hvc-room/global/g-nav.js"></script>
      </div>

      <main class="col-lg-9 mt-0">
`);
})();
