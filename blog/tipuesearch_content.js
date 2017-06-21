var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2016Fall 修課成員網誌","url":"./pages/about/"},{"title":"協同產品設計實習 第十八周作業","tags":"HW","text":"期末作業週","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-ba-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十七周作業","tags":"HW","text":"行走機構 2D 靜態繪圖 ##利用ONSHAPE 2D走機構影片_1 上傳程式1: 上傳程式2:","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-qi-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十五周作業","tags":"HW","text":"齒輪組的囓合協同繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"black\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 250 # 齒數 n = 16 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"orange\") ctx.beginPath() ctx.fillStyle = \" #ffdb72\" ctx.font = \"40px ScriptS\" ctx.fillText(\"40423120 \",300,300) ctx.stroke() 作業心得: 畫製自己的齒輪，我是40423120 齒數為16齒，顏色 橘色。","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-wu-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十四周作業","tags":"HW","text":"","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-si-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十三周作業","tags":"HW","text":"電腦自行組裝 此週讓我們自行學習電腦組裝，給兩台實體電腦, 一開始裝Ubuntu 16.04 , 配置正齒輪 齒面寬輔助設計程式, 然後 配置 Fossil SCM server、v-rep、Leo Editor 加上以 uwsgi 配置 Python3 網際程式等系統. - 由 WCM 課程學員負責配置好硬體與操作系統, 然後逐步放入網際內容管理系統","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-san-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十二周作業","tags":"HW","text":"2D 正齒輪繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } Set Number of Gears from browser import document as doc from browser import html import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") # 以 button 驅動的事件函式 def setgearnumber(e): ctx.clearRect(0, 0, canvas.width, canvas.height) x = (canvas.width)/2 y = (canvas.height)/2 if doc[\"n1\"].value.isdigit(): n17 = int(doc[\"n1\"].value) else: n17 = 17 if doc[\"n2\"].value.isdigit(): n11 = int(doc[\"n2\"].value) else: n11 = 11 if doc[\"n3\"].value.isdigit(): n13 = int(doc[\"n3\"].value) else: n13 = 13 # 只使用畫布高度的 80% canvas_size = canvas.height*0.4 r17 = canvas_size*n17/(n17+n11+n13) r11 = canvas_size*n11/(n17+n11+n13) r13 = canvas_size*n13/(n17+n11+n13) # 計算各齒輪中心座標 x17 = x - r17-r11 y17 = y x11 = x y11 = y x13 = x + r11+r13 y13 = y pa = 20 # 開始繪製齒輪 # 儲存原有的座標系統 ctx.save() # 平移到齒輪圓心 ctx.translate(x17, y17) # 以齒輪圓心旋轉 90 度, 讓紅色標線在齒輪右側保持水平 ctx.rotate(90*deg) # 平移回原來的座標原點 ctx.translate(-x17, -y17) gear17 = Spur(ctx).Gear(x17, y17, r17, n17, pa, \"blue\") # 回復原有的座標系統 ctx.restore() ctx.save() ctx.translate(x11, y11) # 中間齒輪轉動 -90 度加上一齒, 可以與左側齒輪囓合 ctx.rotate(-90*deg-math.pi/n11) ctx.translate(-x11, -y11) gear11 = Spur(ctx).Gear(x11, y11, r11, n11, pa, \"blue\") ctx.restore() ctx.save() ctx.translate(x13, y13) # 右側齒輪轉動 -90 度加上一齒, 可以與原來標線在左側水平的中間齒輪囓合, 但是目前中間齒輪的標線已經轉了 180 度加或減一次 # 必須配合兩齒的速比轉換旋轉角, 以便讓中間齒輪與右側齒輪囓合 ctx.rotate(-90*deg-math.pi/n13+(180*deg+math.pi/n11)*n11/n13) ctx.translate(-x13, -y13) gear13 = Spur(ctx).Gear(x13, y13, r13, n13, pa, \"blue\") ctx.restore() setgearnumber(True) ''' div = doc[\"onegear_div\"] form = html.FORM() input1 = html.INPUT(type=\"text\", id=\"n1\", name=\"n1\", value=\"13\") input2 = html.INPUT(type=\"text\", id=\"n2\", name=\"n2\", value=\"11\") input3 = html.INPUT(type=\"text\", id=\"n3\", name=\"n3\", value=\"19\") div <= input1 + html.BR() + input2 + html.BR() + input3 ''' doc['button'].bind('click',setgearnumber)","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-er-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十一周作業","tags":"HW","text":"Cango 程式庫 結合 Brython 3.3.1 與 Cango-9v05.js 繪圖, 將 Cango Canvas 繪圖範例 轉為 Brython. Cango 程式庫 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new # 利用 browser 中的 document 擷取 id = \"cango_div\" 的標註 cango_div = doc[\"cango_div\"] def sayHullo(cvsID): # create a graphics context cgo = cango(cvsID) # use RH Cartesian on full canvas cgo.setGridboxRHC() # Different X and Y scale cgo.setWorldCoords(-10, -5, 20, 10) cgo.drawText(\"以 Cango 顯示中文\", { 'fillColor': \"blue\", 'fontSize': 58, 'lorg':5 }) sayHullo(\"cango_canvas\") cango_div <= \"以 Brython 顯示中文\" 上述 Cango 與 Brython 文字列印程式碼: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new # 利用 browser 中的 document 擷取 id = \"cango_div\" 的標註 cango_div = doc[\"cango_div\"] def sayHullo(cvsID): # create a graphics context cgo = cango(cvsID) # use RH Cartesian on full canvas cgo.setGridboxRHC() # Different X and Y scale cgo.setWorldCoords(-10, -5, 20, 10) cgo.drawText(\"以 Cango 顯示中文\", { 'fillColor': \"blue\", 'fontSize': 58, 'lorg':5 }) sayHullo(\"cango_canvas\") cango_div <= \"以 Brython 顯示中文\" Cango drawPath 範例: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new def plotSine(cvsID): data = [] g = cango(cvsID) g.setGridboxRHC(10, 10, 80, 60) g.setWorldCoords(0, -50, 2*math.pi, 100) g.drawAxes(0, 6.5, -50, 50, { 'xOrigin':0, 'yOrigin':0, 'fontSize':10, 'strokeColor':'gray'}) for i in range(int(2*math.pi/0.03)): #[0, 0.03, 0.06 ... 3.14159] i = i * 0.03 # 特別注意在 Javascript 採用 data.push(i, 50*math.sin(i)), 但是 Python 必須分為兩段 append data.append(i) data.append(50*math.sin(i)) g.drawPath(data, {'strokeColor':'red'}) plotSine(\"cango_canvas1\") 以上繪圖程式碼: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new def plotSine(cvsID): data = [] g = cango(cvsID) g.setGridboxRHC(10, 10, 80, 60) g.setWorldCoords(0, -50, 2*math.pi, 100) g.drawAxes(0, 6.5, -50, 50, { 'xOrigin':0, 'yOrigin':0, 'fontSize':10, 'strokeColor':'gray'}) for i in range(int(2*math.pi/0.03)): #[0, 0.03, 0.06 ... 3.14159] i = i * 0.03 # 特別注意在 Javascript 採用 data.push(i, 50*math.sin(i)), 但是 Python 必須分為兩段 append data.append(i) data.append(50*math.sin(i)) g.drawPath(data, {'strokeColor':'red'}) plotSine(\"cango_canvas1\") 重用 Cango 繪圖物件: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new shape = window.Shape.new shapedefs = window.shapeDefs def drawSpiral(cvsID): g = cango(cvsID) chamber = ['M',289.16,447.14, 'C',233.33,399.03, 267.47,290.34, 364.53,265.28, 408.88,269.91, 448.14,282.58, 483.22,303.79, 391.79,287.12, 292.99,369.50, 331.90,451.11, 318.79,447.43, 302.35,446.61, 289.16,447.14, 'z'] cobj = shape(chamber, { 'fillColor':\"lightyellow\", 'strokeColor':\"tan\", 'lineWidthWC':4, 'border':True }) cobj.translate(-287, -536) g.setGridboxSVG() g.setWorldCoords(-250, -320, 500) # draw the spiral center dot g.drawShape(shapedefs.circle(8), {'fillColor':\"tan\"}) # draw the 50 spiral segments scale = 1 for i in range(50): scale = scale/1.08 g.render(cobj, {'scl':scale, 'degs':i*24.5}) drawSpiral(\"cango_canvas2\") 上述繪圖程式碼: from browser import document as doc from browser import window import math # 利用 window 擷取 Cango 物件, 然後以 new 方法轉為 Brython 物件 cango = window.Cango.new shape = window.Shape.new shapedefs = window.shapeDefs def drawSpiral(cvsID): g = cango(cvsID) chamber = ['M',289.16,447.14, 'C',233.33,399.03, 267.47,290.34, 364.53,265.28, 408.88,269.91, 448.14,282.58, 483.22,303.79, 391.79,287.12, 292.99,369.50, 331.90,451.11, 318.79,447.43, 302.35,446.61, 289.16,447.14, 'z'] cobj = shape(chamber, { 'fillColor':\"lightyellow\", 'strokeColor':\"tan\", 'lineWidthWC':4, 'border':True }) cobj.translate(-287, -536) g.setGridboxSVG() g.setWorldCoords(-250, -320, 500) # draw the spiral center dot g.drawShape(shapedefs.circle(8), {'fillColor':\"tan\"}) # draw the 50 spiral segments scale = 1 for i in range(50): scale = scale/1.08 g.render(cobj, {'scl':scale, 'degs':i*24.5}) drawSpiral(\"cango_canvas2\") 目前正透過 https://github.com/mdecourse/kmol2018 測試 Windows 64 位元可攜 Python3.6.1 與 Brython 3.3.1 的應用, 已經發現 Pelican DISPLAY_PAGES_ON_MENU 無法運作, 且 Brython 3.3.1 在 Windows 環境中無法正確擷取字串值.","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-yi-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第十周作業","tags":"HW","text":"倉儲協同 1.+法運算 2.+法運算 3.*法運算 4./法運算 1.+法運算 +法程式碼(add.py) def add (a,b): //def用於定義函式和類型的方法 return a+b //將a+b值傳回主程式中 +法程式碼(print.py) import sys //插入sys檔案中所有函式 sys.path.append(\"./m1\")//資料夾路徑 import add //導入 add.py sum = add.add (1,2) //乘法演算 print(sum) //輸出結果 2.-法運算 -法程式碼(add.py) def add (a,b): //def用於定義函式和類型的方法 return a-b //將a-b值傳回主程式中 -法程式碼(print.py) import sys //插入sys檔案中所有函式 sys.path.append(\"./m1\") //資料夾路徑 import add //導入 add.py sum = add.add (1,2) //乘法演算 print(sum) //輸出結果 3.*法運算 乘法程式碼(add.py) def add (a,b): //def用於定義函式和類型的方法 return a* b //將a乘b值傳回主程式中 乘法程式碼(print.py) import sys //插入sys檔案中所有函式 sys.path.append(\"./m1\") //資料夾路徑 import add //導入 add.py sum = add.add (1,2) //乘法演算 print(sum) //輸出結果 4./法運算 /法程式碼(add.py) def add (a,b): //def用於定義函式和類型的方法 return a/b //將a/b值傳回主程式中 /法程式碼(print.py) import sys//插入sys檔案中所有函式 sys.path.append(\"./m1\") //資料夾路徑 import add//導入 add.py sum = add.add (1,2) // /法演算 print(sum) //輸出結果","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第九周作業","tags":"HW","text":"window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值 上述按鈕取值程式碼: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-jiu-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第八周作業","tags":"HW","text":"期中考週 期中考週","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-ba-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第七周作業","tags":"HW","text":"備考週 作業心得:這周老師讓我們有較多時間將之前的作業補上!!!","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-qi-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第六周作業","tags":"HW","text":"利用onshape畫出四連桿 四連桿零件繪製 四連桿零件組合 八連桿零件繪製 八連桿零件組合 作業心得: 需利用onshape畫出四連桿以及八連桿 將畫好的零件利用v-rep做連桿動作模擬 利用onshape畫出四連桿","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-liu-zhou-zuo-ye.html"},{"title":"協同產品設計實習  第五周作業","tags":"HW","text":"v-rep設定單連桿運動 1 v-rep設定單連桿運動影片 四連桿 四連桿2 心得:","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-wu-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第四周作業","tags":"HW","text":"第四週作業 各班各組在 https://mde2a2.kmol.info 主機上建立 cdbg1(完成後可直接連結至 cdbg1 倉儲, 交由組長管理) ~ cdbg8, 以及 cdag1 ~ cdag8 等線上 Fossil SCM 倉儲, 用來管理各組協同產品設計實習過程中的純文件檔案 作業心得 Fossil SCM 是一套軟體配置管理 (Software Configuration Management) 系統, 其中包含分散式版次控管 (DVC, Distributed Version Control) 、Wiki 、Bug Tracking 與 Technote 等功能, 可以用來控制及追蹤軟體開發專案, 並且紀錄專案開發歷程, 在協同產品設計實習課程中, 我們除了使用 git、github 與 bitbucket 之外, 將要在區域網路與系上主幹中, 配置每班兩台的 Fossil SCM 實習主機","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-si-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第三周作業","tags":"HW","text":"翻譯影片(影片2) hyperworks2 from 虎尾科大機械設計工程 on Vimeo . 內容: 內容: The 2017 HyperWorks release has a lot 在2017年HyperWorks發行很多版本 of enhancements to the modeling and assembly capabilities 對軟件的建模和組裝能力的增強 So we put in a new parts browser with a built-in part library 所以我們在一個新的零件瀏覽器與一個內置零件庫 The part library is a great tool for storing and loading work in progress 零件庫是用於存儲和加載正在進行工作的一個很好的工具 So you can store a catalog of all the common parts 因此，您可以存儲所有公共部分的目錄 that a workgroup needs to use,so they can download their models from their PLM system 工作組需要使用，因此他們可以從他們的PLM系統下載他們的模型 and store them locally in a parts library for a work in progress 並將它們本地存儲在正在進行的工作的零件庫中 And it keeps revision control on them, 他保持對它們的修訂控制 so they can back up to the different versions and reload. 所以他們可以備份到不同的版本並重新加載。 And they can also build different configurations now of their models. 他們也可以建立不同的配置到他們現在的的模型。 In the configuration modeler now 現在在配置建模器 they can import parts from part library and then group 他們可以從零件庫導入零件然後分組 them into what we call part sets,which are 他們變成我們所說的部分集 convenient groupings of parts. 即零件方便分組 And then they can drag those parts together into assemblies, 然後他們可以將這些部分一起拖入組件 and configure them for different load 並為不同負載配置它們的 cases or different variations of their models. 情況或他們的模型的不同變化 the other feature of haveing parts in the software 硬件部分的軟件中的另一個特點 is we do part instancing now,too. 我們現在也做實例化 So if you load in a part that has 所以如果你加載在一個部分 multiple instances through the model,we support that. 我們支持多個實例通過模型 We don't have to create multiple copies of it. 我們不必創建它的多個副本 We can actually do the instancing,which is very memory efficient. 我們可以做實際，這是非常有效的記憶。 Also in the model building assembly 也在模型建築組裝 tool set is enhanced ID management as well. 工具集也是增強的ID管理 So not only can we assign IDs based on different rules 因此，我們不僅可以根據不同的規則分配ID that you define in the software,but you can import ID systems 您可以在軟件中定義，但可以導入ID系統 form spreadsheets,XML files,databases, 形式電子表格，XML文件，數據庫， and so forth,that are then used when 等等，然後在使用 it does the renumbering or the assembly of the model. 它進行重新編號或模型的組裝 it has to resolve part collisions. 它必須解決部分碰撞。 Really important part of doing model assembly 做模型組裝重要的部分 is connecting all those parts together. 將所有這些部分連接在一起 Connectors are really vital to the overall assembly process. 連接器對整個裝配過程至關重要。 The quality of the connector that you create really 您真正創建的連接器的質量 determines the outcome of the quality 確定質量的結果 of the overall assembled model as well. 對整體組裝模型 So for us to get a good high fidelity solution, 所以為我們得到一個良好的高保真度解決方案 you have to have a really good connection generation as well. 你必須有一個非常好的連接生成 翻譯心得:這是由英文很強的組員翻的,是有嘗試去聽但聽不是很懂","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-san-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第二周作業","tags":"HW","text":"更改stunnel設定檔ip位址 利用solvespace組立及v-rep應用 solvespace組裝影片 四連桿 零件1 零件2和3 零件組立 v-rep 作業心得 第二個禮拜增加了v-rep,將畫好的圖轉成stl格式,匯入v-rep,製作動畫,又可以學到新的東西","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-er-zhou-zuo-ye.html"},{"title":"設計二甲座位表","tags":"seat table","text":"設計二甲座位表 seet","url":"./she-ji-er-jia-zuo-wei-biao.html"},{"title":"協同產品設計實習 第一周作業","tags":"HW","text":"利用solvespace及onshape組裝四連桿機構 solvespace組裝影片 零件1 零件2 零件3 組裝 作業心得 第一個禮拜的作業我複習了上學期的基本操作，及繪圖程式","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-yi-zhou-zuo-ye.html"},{"title":"協同產品設計實習 第一周簡報","tags":"PPT","text":"上課筆記","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-yi-zhou-jian-bao.html"}]};