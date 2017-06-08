var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About","tags":"misc"},{"text":"齒輪組的囓合協同繪圖","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-wu-zhou-zuo-ye.html","title":"協同產品設計實習 第十五周作業","tags":"HW"},{"text":"","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-si-zhou-zuo-ye.html","title":"協同產品設計實習 第十四周作業","tags":"HW"},{"text":"電腦組裝 此週讓我們自行學習電腦組裝","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-san-zhou-zuo-ye.html","title":"協同產品設計實習 第十三周作業","tags":"HW"},{"text":"2D 正齒輪繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 17 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() count = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") if each[1] != \"出席\": count = count + 1 #print(count) div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = window.Cobj.new creategeartooth = window.createGearTooth.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path cx = canvas.width/2 cy = canvas.height/2 gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear)","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-er-zhou-zuo-ye.html","title":"協同產品設計實習 第十二周作業","tags":"HW"},{"text":"","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-zhou-zuo-ye.html","title":"協同產品設計實習 第十周作業","tags":"HW"},{"text":"window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值 上述按鈕取值程式碼: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-jiu-zhou-zuo-ye.html","title":"協同產品設計實習 第九周作業","tags":"HW"},{"text":"期中考週 期中考週","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-ba-zhou-zuo-ye.html","title":"協同產品設計實習 第八周作業","tags":"HW"},{"text":"備考週 作業心得:這周老師讓我們有較多時間將之前的作業補上!!!","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-qi-zhou-zuo-ye.html","title":"協同產品設計實習 第七周作業","tags":"HW"},{"text":"利用onshape畫出四連桿 四連桿零件繪製 四連桿零件組合 八連桿零件繪製 八連桿零件組合 作業心得: 需利用onshape畫出四連桿以及八連桿 將畫好的零件利用v-rep做連桿動作模擬 利用onshape畫出四連桿","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-liu-zhou-zuo-ye.html","title":"協同產品設計實習 第六周作業","tags":"HW"},{"text":"v-rep設定單連桿運動 1 v-rep設定單連桿運動影片 四連桿 四連桿2 心得:","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-wu-zhou-zuo-ye.html","title":"協同產品設計實習  第五周作業","tags":"HW"},{"text":"第四週作業 各班各組在 https://mde2a2.kmol.info 主機上建立 cdbg1(完成後可直接連結至 cdbg1 倉儲, 交由組長管理) ~ cdbg8, 以及 cdag1 ~ cdag8 等線上 Fossil SCM 倉儲, 用來管理各組協同產品設計實習過程中的純文件檔案 作業心得 Fossil SCM 是一套軟體配置管理 (Software Configuration Management) 系統, 其中包含分散式版次控管 (DVC, Distributed Version Control) 、Wiki 、Bug Tracking 與 Technote 等功能, 可以用來控制及追蹤軟體開發專案, 並且紀錄專案開發歷程, 在協同產品設計實習課程中, 我們除了使用 git、github 與 bitbucket 之外, 將要在區域網路與系上主幹中, 配置每班兩台的 Fossil SCM 實習主機","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-si-zhou-zuo-ye.html","title":"協同產品設計實習 第四周作業","tags":"HW"},{"text":"翻譯影片(影片2) hyperworks2 from 虎尾科大機械設計工程 on Vimeo . 內容: 內容: The 2017 HyperWorks release has a lot 在2017年HyperWorks發行很多版本 of enhancements to the modeling and assembly capabilities 對軟件的建模和組裝能力的增強 So we put in a new parts browser with a built-in part library 所以我們在一個新的零件瀏覽器與一個內置零件庫 The part library is a great tool for storing and loading work in progress 零件庫是用於存儲和加載正在進行工作的一個很好的工具 So you can store a catalog of all the common parts 因此，您可以存儲所有公共部分的目錄 that a workgroup needs to use,so they can download their models from their PLM system 工作組需要使用，因此他們可以從他們的PLM系統下載他們的模型 and store them locally in a parts library for a work in progress 並將它們本地存儲在正在進行的工作的零件庫中 And it keeps revision control on them, 他保持對它們的修訂控制 so they can back up to the different versions and reload. 所以他們可以備份到不同的版本並重新加載。 And they can also build different configurations now of their models. 他們也可以建立不同的配置到他們現在的的模型。 In the configuration modeler now 現在在配置建模器 they can import parts from part library and then group 他們可以從零件庫導入零件然後分組 them into what we call part sets,which are 他們變成我們所說的部分集 convenient groupings of parts. 即零件方便分組 And then they can drag those parts together into assemblies, 然後他們可以將這些部分一起拖入組件 and configure them for different load 並為不同負載配置它們的 cases or different variations of their models. 情況或他們的模型的不同變化 the other feature of haveing parts in the software 硬件部分的軟件中的另一個特點 is we do part instancing now,too. 我們現在也做實例化 So if you load in a part that has 所以如果你加載在一個部分 multiple instances through the model,we support that. 我們支持多個實例通過模型 We don't have to create multiple copies of it. 我們不必創建它的多個副本 We can actually do the instancing,which is very memory efficient. 我們可以做實際，這是非常有效的記憶。 Also in the model building assembly 也在模型建築組裝 tool set is enhanced ID management as well. 工具集也是增強的ID管理 So not only can we assign IDs based on different rules 因此，我們不僅可以根據不同的規則分配ID that you define in the software,but you can import ID systems 您可以在軟件中定義，但可以導入ID系統 form spreadsheets,XML files,databases, 形式電子表格，XML文件，數據庫， and so forth,that are then used when 等等，然後在使用 it does the renumbering or the assembly of the model. 它進行重新編號或模型的組裝 it has to resolve part collisions. 它必須解決部分碰撞。 Really important part of doing model assembly 做模型組裝重要的部分 is connecting all those parts together. 將所有這些部分連接在一起 Connectors are really vital to the overall assembly process. 連接器對整個裝配過程至關重要。 The quality of the connector that you create really 您真正創建的連接器的質量 determines the outcome of the quality 確定質量的結果 of the overall assembled model as well. 對整體組裝模型 So for us to get a good high fidelity solution, 所以為我們得到一個良好的高保真度解決方案 you have to have a really good connection generation as well. 你必須有一個非常好的連接生成 翻譯心得:這是由英文很強的組員翻的,是有嘗試去聽但聽不是很懂","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-san-zhou-zuo-ye.html","title":"協同產品設計實習 第三周作業","tags":"HW"},{"text":"更改stunnel設定檔ip位址 利用solvespace組立及v-rep應用 solvespace組裝影片 四連桿 零件1 零件2和3 零件組立 v-rep 作業心得 第二個禮拜增加了v-rep,將畫好的圖轉成stl格式,匯入v-rep,製作動畫,又可以學到新的東西","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-er-zhou-zuo-ye.html","title":"協同產品設計實習 第二周作業","tags":"HW"},{"text":"設計二甲座位表 seet","url":"./she-ji-er-jia-zuo-wei-biao.html","title":"設計二甲座位表","tags":"seat table"},{"text":"利用solvespace及onshape組裝四連桿機構 solvespace組裝影片 零件1 零件2 零件3 組裝 作業心得 第一個禮拜的作業我複習了上學期的基本操作，及繪圖程式","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-yi-zhou-zuo-ye.html","title":"協同產品設計實習 第一周作業","tags":"HW"},{"text":"上課筆記","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-yi-zhou-jian-bao.html","title":"協同產品設計實習 第一周簡報","tags":"PPT"}]};