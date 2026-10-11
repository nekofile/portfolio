画像の差し替えかた
=====================
同じファイル名・同じ場所に、実際の画像（jpg）を上書きするだけで差し替わります。
（ファイル名を変えたい場合は、WORKSは script.js の img、CASE STUDYとABOUTは index.html の src を書き換えてください）

■ WORKS（img/works/）　推奨サイズ 1600×1000px（横16：縦10）
  work-01.webp たまり木珈琲（詳細ページあり：works/work-01/）← works/work-01/img/mockup_hero.webp と同じ画像
  work-02.webp WSTRIP 沖縄観光情報サイト（詳細ページあり：works/work-02/）← works/work-02/img/mockup_hero.webp と同じ画像
  work-03.webp WSGreen 無農薬野菜の宅配サイト（詳細ページあり：works/work-03/）
  work-04.jpg  セール告知バナー
  work-05.jpg  季節メニュー バナー
  work-06.jpg  解説動画 サムネイル
  work-07.webp BizEnglish Pro バナー・LP（詳細ページあり：works/work-07/）
  work-08.webp フォレスタ バナー・LP（詳細ページあり：works/work-08/）
  work-09.jpg  WS Suit Closet 冬のセールバナー（詳細ページあり：works/work-09/）
  work-10.jpg  WS university オープンキャンパスバナー（詳細ページあり：works/work-10/）
  work-11.jpg  サムネイル制作実績（詳細ページあり：works/work-11/）
  ※縦横比が違う画像は、中央を基準に自動で切り抜かれます。

■ CASE STUDY
  works/work-01/img/mockup_hero.webp を使っています。
  文章は index.html の「02 CASE STUDY」を編集します。

■ ABOUT（img/about/）
  profile.jpg        プロフィール写真  800×800px（正方形・丸く切り抜かれます）

■ 作品を増やす・減らす
  script.js の WORKS の一覧に、1行追加（または削除）します。

■ 詳細ページ（works/）
  works/work-01/  たまり木珈琲の詳細ページ（index.html・css/・img/）
  works/work-02/  WSTRIPの詳細ページ（index.html・css/・img/）
  works/work-03/  WSGreenの詳細ページ（index.html・css/・img/）
  works/work-07/  BizEnglish Proの詳細ページ（index.html・css/・img/）
  works/work-08/  フォレスタの詳細ページ（index.html・css/・img/）
  works/work-09/  WS Suit Closetの詳細ページ（index.html・css/・img/）
  works/work-10/  WS universityの詳細ページ（index.html・css/・img/）
  works/work-11/  サムネイル制作実績の詳細ページ（index.html・css/・img/）
  WORKSの一覧から開くには、script.js の該当作品に  href:'works/work-02/index.html'  のように書きます。

■ 非表示中の作品（WORKS04〜06）
  script.js の WORKS で、04〜06 の行が // でコメントアウトされています。
  作品ができたら、行頭の // を外し、タイトル・説明・画像を書き換えると表示されます。
  カテゴリの絞り込みボタンは、表示中の作品があるカテゴリだけ自動で出ます。

■ 絞り込みボタンのカテゴリ
  script.js の CATS で決まります（現在：Webサイト／LP／バナー／サムネイル）。
  「表・グラフ」「SNS画像」は削除済みです。カテゴリを増やす場合は CATS に名前を足します。
