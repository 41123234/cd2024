var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"w10 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w10 34","url":"./2024-cd-2b-w10 34.html"},{"title":"w9 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w9 34","url":"./2024-cd-2b-w9 34.html"},{"title":"w8 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w8 34","url":"./2024-cd-2b-w8 34.html"},{"title":"w7 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w7 34","url":"./2024-cd-2b-w7 34.html"},{"title":"w6 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w6 34","url":"./2024-cd-2b-w6 34.html"},{"title":"w5 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引.","tags":"w5 34","url":"./2024-cd-2b-w5 34.html"},{"title":"w4 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 1.Odoo 參考文章中英並列 教學影片: 連結至 以第六組為例, 利用 Codespaces 維護倉儲內 以第六組為例, 利用 Codespaces 維護倉儲內容 教學影片: 連結至 如何利用 Github Actions 編譯 LaTeX 得到分組 pdf 報告 如何利用 Github Actions 編譯 LaTeX 得到分組 pdf 報告 教學影片: 連結至 如何利用 Gitpod 加上 token 取得分組倉儲權限 如何利用 Gitpod 加上 token 取得分組倉儲權限 2.Replit 靜態網站檢視","tags":"w4 34","url":"./2024-cd-2b-w4 34.html"},{"title":"w3 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 1.將組員的個人倉儲納為分組倉儲的子模組 cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: git submodule add 組員的個人倉儲網址 組員的學號 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: git submodule add https://github.com/scrum-1/cd2024.git 41123299 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: git clone --recurse-submodules 加上各組的倉儲 URL 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. 2.公告期中報告 教學範例: 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 說明 如何在 Replit 維護分組倉儲 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 3.使用 Gitpod 維護倉儲與網站 Gitpod 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 https://gitpod.io 進入. 說明 使用 Gitpod 維護個人網站 說明 使用 Gitpod 維護分組網站","tags":"w3 34","url":"./2024-cd-2b-w3 34.html"},{"title":"w2 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 1.利用 Github Classroom 指定分組倉儲 各分組網站從 Github Classroom 執行配置, 該倉儲位於 mdecd2024 帳號下, 各組組員具備倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲 2.利用 Codespaces 維護倉儲與網站 說明 如何利用 Github Codespaces 維護網站內容 3.設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 4.簡介 Odoo PLM 功能 簡介 Odoo PLM 用法","tags":"w2 34","url":"./2024-cd-2b-w2 34.html"},{"title":"w1 34","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 1.建個人課程倉儲(cd2024) 登入 github.com, 連結到 github.com/mdecycu/cmsimde_site , 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. github.com/mdecycu/cmsimde_site 與 github.com/mdecycu/cmsite 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. 上述 建立個人課程 cd2024 倉儲與網站的操作影片 , 建立的範例網站為: scrum-1.github.io/cd2024/ 2.將個人倉儲 import 至 Replit 從 Replit 帳號下方的 Account, Connected Services(連線服務區) 點選 Connect 後, 讓 Github 授權 Replit, 將在 Replit 中的倉儲改版後, 有權限推回 Github. 設定 Replit 與 Github 應用授權的說明影片 在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo 在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo 3.如何 import 倉儲至 Replit 進行改版 說明如何利用 Replit 對 cd2024 改版 第一周網誌 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1 34","url":"./2024-cd-2b-w1 34.html"}]};