const app = Vue.createApp({
  data() {
    return {
      isClicked: false,
      sectionText1: "",
      photoURL: "",
      works: [
        { id: 0, name: "我大平鎮開缺尾牙知名藝人表演", salary: "#快速上工免體檢" },
        { id: 1, name: "中班不跨夜健康首選冷氣分裝理貨", salary: "#便服主管超好" },
        { id: 2, name: "電動車大品牌活動多", salary: "六日爽放無負擔" },
        { id: 3, name: "蘆竹彈性加班工作超簡單", salary: "小孩接送不拖延" },
        { id: 4, name: "高薪夜班快速安排", salary: "穩定工作唯一高薪" },
        { id: 5, name: "大桃園四個廠區裡面", salary: "要加班住宿都OK" },
      ],
      area_data: [
        {
          where: "北部",
          area: {
            台北市: [
              "中正區",
              "大同區",
              "中山區",
              "萬華區",
              "信義區",
              "松山區",
              "大安區",
              "南港區",
              "北投區",
              "內湖區",
              "士林區",
              "文山區",
            ],
            新北市: [
              "板橋區",
              "新莊區",
              "泰山區",
              "林口區",
              "淡水區",
              "金山區",
              "八里區",
              "萬里區",
              "石門區",
              "三芝區",
              "瑞芳區",
              "汐止區",
              "平溪區",
              "貢寮區",
              "雙溪區",
              "深坑區",
              "石碇區",
              "新店區",
              "坪林區",
              "烏來區",
              "中和區",
              "永和區",
              "土城區",
              "三峽區",
              "樹林區",
              "鶯歌區",
              "三重區",
              "蘆洲區",
              "五股區",
            ],
            基隆市: [
              "仁愛區",
              "中正區",
              "信義區",
              "中山區",
              "安樂區",
              "暖暖區",
              "七堵區",
            ],
            桃園市: [
              "桃園區",
              "中壢區",
              "平鎮區",
              "八德區",
              "楊梅區",
              "蘆竹區",
              "龜山區",
              "龍潭區",
              "大溪區",
              "大園區",
              "觀音區",
              "新屋區",
              "復興區",
            ],
            新竹市: ["東區", "北區", "香山區"],
            新竹縣: [
              "竹北市",
              "竹東鎮",
              "新埔鎮",
              "關西鎮",
              "峨眉鄉",
              "寶山鄉",
              "北埔鄉",
              "橫山鄉",
              "芎林鄉",
              "湖口鄉",
              "新豐鄉",
              "尖石鄉",
              "五峰鄉",
            ],
            苗栗縣: [
              "苗栗市",
              "通霄鎮",
              "苑裡鎮",
              "竹南鎮",
              "頭份鎮",
              "後龍鎮",
              "卓蘭鎮",
              "西湖鄉",
              "頭屋鄉",
              "公館鄉",
              "銅鑼鄉",
              "三義鄉",
              "造橋鄉",
              "三灣鄉",
              "南庄鄉",
              "大湖鄉",
              "獅潭鄉",
              "泰安鄉",
            ],
          },
        },
        {
          where: "中部",
          area: {
            台中市: [
              "中區",
              "東區",
              "南區",
              "西區",
              "北區",
              "北屯區",
              "西屯區",
              "南屯區",
              "太平區",
              "大里區",
              "霧峰區",
              "烏日區",
              "豐原區",
              "后里區",
              "東勢區",
              "石岡區",
              "新社區",
              "和平區",
              "神岡區",
              "潭子區",
              "大雅區",
              "大肚區",
              "龍井區",
              "沙鹿區",
              "梧棲區",
              "清水區",
              "大甲區",
              "外埔區",
              "大安區",
            ],
            南投縣: [
              "南投市",
              "埔里鎮",
              "草屯鎮",
              "竹山鎮",
              "集集鎮",
              "名間鄉",
              "鹿谷鄉",
              "中寮鄉",
              "魚池鄉",
              "國姓鄉",
              "水里鄉",
              "信義鄉",
              "仁愛鄉",
            ],
            彰化縣: [
              "彰化市",
              "員林鎮",
              "和美鎮",
              "鹿港鎮",
              "溪湖鎮",
              "二林鎮",
              "田中鎮",
              "北斗鎮",
              "花壇鄉",
              "芬園鄉",
              "大村鄉",
              "永靖鄉",
              "伸港鄉",
              "線西鄉",
              "福興鄉",
              "秀水鄉",
              "埔心鄉",
              "埔鹽鄉",
              "大城鄉",
              "芳苑鄉",
              "竹塘鄉",
              "社頭鄉",
              "二水鄉",
              "田尾鄉",
              "埤頭鄉",
              "溪州鄉",
            ],
            雲林縣: [
              "斗六市",
              "斗南鎮",
              "虎尾鎮",
              "西螺鎮",
              "土庫鎮",
              "北港鎮",
              "莿桐鄉",
              "林內鄉",
              "古坑鄉",
              "大埤鄉",
              "崙背鄉",
              "二崙鄉",
              "麥寮鄉",
              "臺西鄉",
              "東勢鄉",
              "褒忠鄉",
              "四湖鄉",
              "口湖鄉",
              "水林鄉",
              "元長鄉",
            ],
          },
        },
        {
          where: "南部",
          area: {
            嘉義市: ["東區", "西區"],
            嘉義縣: [
              "太保市",
              "朴子市",
              "布袋鎮",
              "大林鎮",
              "民雄鄉",
              "溪口鄉",
              "新港鄉",
              "六腳鄉",
              "東石鄉",
              "義竹鄉",
              "鹿草鄉",
              "水上鄉",
              "中埔鄉",
              "竹崎鄉",
              "梅山鄉",
              "番路鄉",
              "大埔鄉",
              "阿里山鄉",
            ],
            台南市: [
              "中西區",
              "東區",
              "南區",
              "北區",
              "安平區",
              "安南區",
              "永康區",
              "歸仁區",
              "新化區",
              "左鎮區",
              "玉井區",
              "楠西區",
              "南化區",
              "仁德區",
              "關廟區",
              "龍崎區",
              "官田區",
              "麻豆區",
              "佳里區",
              "西港區",
              "七股區",
              "將軍區",
              "學甲區",
              "北門區",
              "新營區",
              "後壁區",
              "白河區",
              "東山區",
              "六甲區",
              "下營區",
              "柳營區",
              "鹽水區",
              "善化區",
              "大內區",
              "山上區",
              "新市區",
              "安定區",
            ],
            高雄市: [
              "楠梓區",
              "左營區",
              "鼓山區",
              "三民區",
              "鹽埕區",
              "前金區",
              "新興區",
              "苓雅區",
              "前鎮區",
              "小港區",
              "旗津區",
              "鳳山區",
              "大寮區",
              "鳥松區",
              "林園區",
              "仁武區",
              "大樹區",
              "大社區",
              "岡山區",
              "路竹區",
              "橋頭區",
              "梓官區",
              "彌陀區",
              "永安區",
              "燕巢區",
              "田寮區",
              "阿蓮區",
              "茄萣區",
              "湖內區",
              "旗山區",
              "美濃區",
              "內門區",
              "杉林區",
              "甲仙區",
              "六龜區",
              "茂林區",
              "桃源區",
              "那瑪夏區",
            ],
            屏東縣: [
              "屏東市",
              "潮州鎮",
              "東港鎮",
              "恆春鎮",
              "萬丹鄉",
              "長治鄉",
              "麟洛鄉",
              "九如鄉",
              "里港鄉",
              "鹽埔鄉",
              "高樹鄉",
              "萬巒鄉",
              "內埔鄉",
              "竹田鄉",
              "新埤鄉",
              "枋寮鄉",
              "新園鄉",
              "崁頂鄉",
              "林邊鄉",
              "南州鄉",
              "佳冬鄉",
              "琉球鄉",
              "車城鄉",
              "滿州鄉",
              "枋山鄉",
              "霧台鄉",
              "瑪家鄉",
              "泰武鄉",
              "來義鄉",
              "春日鄉",
              "獅子鄉",
              "牡丹鄉",
              "三地門鄉",
            ],
          },
        },
        {
          where: "東部",
          area: {
            宜蘭縣: [
              "宜蘭市",
              "羅東鎮",
              "蘇澳鎮",
              "頭城鎮",
              "礁溪鄉",
              "壯圍鄉",
              "員山鄉",
              "冬山鄉",
              "五結鄉",
              "三星鄉",
              "大同鄉",
              "南澳鄉",
            ],
            花蓮縣: [
              "花蓮市",
              "鳳林鎮",
              "玉里鎮",
              "新城鄉",
              "吉安鄉",
              "壽豐鄉",
              "秀林鄉",
              "光復鄉",
              "豐濱鄉",
              "瑞穗鄉",
              "萬榮鄉",
              "富里鄉",
              "卓溪鄉",
            ],
            台東縣: [
              "臺東市",
              "成功鎮",
              "關山鎮",
              "長濱鄉",
              "海端鄉",
              "池上鄉",
              "東河鄉",
              "鹿野鄉",
              "延平鄉",
              "卑南鄉",
              "金峰鄉",
              "大武鄉",
              "達仁鄉",
              "綠島鄉",
              "蘭嶼鄉",
              "太麻里鄉",
            ],
          },
        },
      ],
      form_data: {
        name: "",
        phone: "",
        line: "",
        birthday: null,
        area: "台北市",
        district: "",
        class: [],
        home: null,
      },
      submit_error: [],
    };
  },
  methods: {
    close() {
      this.isClicked = false;
    },
    readMore(e) {
      this.isClicked = true;
      if (e.target.parentElement.firstElementChild.textContent === "0") {
        this.photoURL = "1.png";
        this.sectionText1 = `
        ┏━━━━━━━━━━━━━━┓</br>
        ✨ 平鎮組包裝+8H周休+高時薪190</br>
        ┗━━━━━━━━━━━━━━┛</br>
        ✔️ 日班時薪$190</br>
        ✔️ 揪團一起來</br>
        ✔️ 免無塵衣</br>
        ✔️ 免費供餐</br>
        ✔️ 無須體檢/錄取率很高</br>
        ✔️短期至10月底(考核轉長期)</br>
        ❤️滿三個月享三節禮金或禮品</br>
        ❤️有勞健保、勞退6%</br></br>
        ▬▬▬▬▬【職缺介紹】▬▬▬▬▬</br>
        ✅工作地點:</br>
        平鎮區南東路(近平鎮大潤發)</br>
        ✅工作內容:</br>
        筆電組裝包裝/品管測試</br>
        ✅工作時間:</br>
        日班08:00-17:00（需配合加班）</br>
        ✅薪資:</br>
        日時薪$190</br>
        月約：$34440~$55000(含加班薪資)</br>
        全勤加發獎金$1000/月</br>
        ✅休假:週休(休六日)</br>
        ✅用餐:免費供餐</br>
        ✅週領:提供週領6000~8000</br>
        ❥❥❥❥❥【快-速-應-徵】❥❥❥❥❥</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✔️更多職缺參考→https://lin.ee/lCXyI1F</br>
        ✨求職找水水，遇水則發發發✨</br>
        `;
      } else if (e.target.parentElement.firstElementChild.textContent === "1") {
        this.photoURL = "2.png";
        this.sectionText1 = `
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━┓</br>
        ✨ᴺᴱᵂ 桃園龜山8H-簡單貼標物流</br>
        ┗━━━━━━━━━━━━━━━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬▬▬▬優點照過來▬▬▬▬▬▬▬▬▬</br>
        ✔固定班別無需輪班~</br>
        ✔可周領</br>
        ✔吸菸區</br>
        ✔免無塵衣</br>
        ✔九點上班送完小孩再來!!!</br>
        ✔享有勞/健保、團保 勞退6％</br></br>
        ▬▬▬職缺介紹▬▬▬</br>
        ◆工作內容：倉儲進出貨、訂單物流管理、揀貨、貼標、</br>
        ◆工作地點：桃園市龜山區興邦路43巷</br>
        ◆工作時間：</br>
        <日班></br>
        09:00-18:00</br>
        <中班></br>
        13:00-21:00</br>
        ◆工作薪資：</br>
        <日班>月薪$28000起</br>
        <中班>月薪$30000起</br>
        ❥❥❥❥❥【快-速-應-徵】❥❥❥❥❥</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✔️更多職缺參考→https://lin.ee/lCXyI1F</br>
        ✨求職找水水，遇水則發發發✨`;
      } else if (e.target.parentElement.firstElementChild.textContent === "2") {
        this.photoURL = "3.png";
        this.sectionText1 = `
        ✨ᴺᴱᵂ 龜山8H週休-電動車組裝員</br>
        ┗━━━━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬【好康來報】▬▬▬▬▬</br>
        ✔ 每月10領薪</br>
        ✔ 免無塵衣</br>
        ✔ 無經驗可</br>
        ✔ 周休二日</br>
        ✔ 高錄取率</br>
        ✔ 加班免費供餐</br>
        ✔ 享勞健保及勞退6％</br>
        ▬▬▬▬▬▬【詳細資訊】▬▬▬▬▬</br>
        ◆ 工作產品 : 知名電動車組裝</br>
        ◆ 工作內容 : 組裝/包裝/簡易故障排除</br>
        ◆ 工作地點 : 龜山區頂湖路</br>
        ◆ 休假制度 : 周休二日(週六偶爾需要配合加班)</br>
        ◆ 工作時間 :</br>
        　　　三班制　　　　　　　　　兩班制</br>
        <日班> 0730-1600　　　　<日班>0900-1800</br>
        <中班> 1530-0000　　　　<夜班>2100-0600</br>
        <夜班> 2330-0800</br>
        ◆ 用餐時間 : 60分鐘</br>
        ◆ 工作薪資 : </br>
        　三班制　　　　　　　　　　　兩班制</br>
        <日班> $31000(含全勤獎金)　　　$31000~39000(含加班、津貼)</br>
        <中班> $33500(含全勤獎金)　　　$38000~49469(含加班、津貼)</br>
        <夜班> $38000(含全勤獎金)</br>
        ❥❥❥❥❥【快-速-應-徵】❥❥❥❥❥</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✔️更多職缺參考→https://lin.ee/lCXyI1F</br>
        ✨求職找水水，遇水則發發發✨
        `;
      } else if (e.target.parentElement.firstElementChild.textContent === "3") {
        this.photoURL = "4.png";
        this.sectionText1 = `
        ✨蘆竹長期+彈性加班!!</br>
        ┗━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬【職缺好康】▬▬▬▬▬▬</br>
        ✔周休/見紅休/國定休</br>
        ✔免無塵衣/靜電衣</br>
        ✔工作穩定</br>
        ✔周領3千</br>
        ✔久坐居多</br>
        ✔冷氣廠房</br>
        ✔免測驗</br>
        ✔路邊方便停車</br>
        ✔學經歷不拘/無限制</br>
        ✔可立即報到</br>
        ✔工作簡單易學</br>
        ✔超高錄取率</br>
        ▬▬▬▬▬▬▬職缺介紹▬▬▬▬▬▬▬</br>
        ◆ 工作地點：桃園市蘆竹區長興路</br>
        ◆ 公司產品：電腦機殼,3C產品組裝</br>
        ◆ 工作內容：包裝封膜簡單倉管</br>
        ◆ 休假制度：週休二日</br>
        ◆ 工作時間：0800-1720</br>
        ◆工作薪資:</br>
        日班$180/H.|月賺$31680+全勤$1000</br>
        ❥❥❥❥❥【快-速-應-徵】❥❥❥❥❥</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✔️更多職缺參考→https://lin.ee/lCXyI1F</br>
        ✨求職找水水，遇水則發發發✨
        `;
      } else if (e.target.parentElement.firstElementChild.textContent === "4") {
        this.photoURL = "5.png";
        this.sectionText1 = `
        ✨ᴺᴱᵂ 蘆竹長期+超簡單作業員</br>
        ┗━━━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬【職缺好康】▬▬▬▬▬▬</br>
        ✔周領5千</br>
        ✔長期/穩定/3個月轉正</br>
        ✔免無塵衣</br>
        ✔免費供餐</br>
        ✔周休/見紅休/國定休</br>
        ✔學經歷不拘/無限制</br>
        ✔可立即報到</br>
        ✔工作簡單易學</br>
        ✔超高錄取率</br>
        ▬▬▬▬▬▬【職缺內容】▬▬▬▬▬▬</br>
        ◆地點：蘆竹區南青路(近台茂、好市多)</br>
        ◆內容：儲存伺服器-機台操作、組裝、包裝</br>
        ◆時間：</br>
        ➨日:0800-1730</br>
        ➨夜:2000-0530</br>
        ◆薪資：</br>
        ➨日:時薪180/H $34331-$61469</br>
        ➨夜:時薪240/H $45782-$82036</br>
        ▬▬▬▬▬▬▬【快速♥️報名】▬▬▬▬▬▬▬</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032(同Line ID)</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✨求職水水幫你找，安心快速沒煩惱✨
        `;
      } else if (e.target.parentElement.firstElementChild.textContent === "5") {
        this.photoURL = "6.png";
        this.sectionText1 = `
        ❣️享三節 禮金 or 禮品❣️</br>
        ❣️有勞、健保、團保 勞退6％❣️</br>
        ▬▬▬▬▬▬▬▬▬▬特殊福利▬▬▬▬▬▬▬▬▬▬</br>
        ⭐ 免學經歷、入職測驗超簡單✔</br>
        ⭐ 工作內容單純、簡單</br>
        ⭐ 月休10天睏到飽</br>
        ⭐ 餐費補助超貼心</br> 
        ⭐ 廠內設有機車位</br>
        ⭐ 廠內設有吸菸區</br>
        ⭐ 短期免費住宿</br>
        ✨ 知名大廠 +周領$3000+</br>
        ▬▬▬▬▬▬▬▬▬▬詳細資訊▬▬▬▬▬▬▬▬▬▬</br>
        ✅工作內容:</br>
        PCB印刷電路板(組裝、檢驗、測試)</br>
        ✅工作地點【任選擇一】:</br>
        桃園區山鶯路(龜山工業區)</br>
        中壢區合江路(中壢工業區)</br>
        大園區民權路(大園工業區)</br>
        蘆竹區南山路(南崁工業區)</br>
        ✅工作時間:</br>
        早班：08:00~20:00</br>
        夜班：20:00~08:00</br>
        ✅休假制度：做四休二</br>
        (月休大約十天)</br>
        ✅萬眾矚目薪資如下:</br>
        【桃園、中壢】</br>
        日班 $33810-46000 (含加班津貼)</br>
        夜班 $42110-57000 (含加班津貼)</br>
        【蘆竹】</br>
        日班_月約$34531~49503(含加班津貼)</br>
        夜班_月約$42850~61427 (含加班津貼)</br>
        【大園】</br>
        日班_月約$35,270 起(加班另計)</br>　
        夜班_月約$43,590起 (加班另計)</br>
        ▬▬▬▬▬▬▬【快速♥️報名】▬▬▬▬▬▬▬</br>
        可直撥專線或+line【傳截圖+洽水水】</br>
        ☎️水水專線：0965-617032(同Line ID)</br>
        ✔️直接點我→https://rileyyang0919.github.io/Hedwig-s-Page/</br>
        ✨求職水水幫你找，安心快速沒煩惱✨`;
      }
    },

    async sendEmail(e) {
      e.preventDefault()
      console.log(this.form_data.line)
      this.submit_error = []
      if (this.form_data.name.trim() == "") {
        this.submit_error.push("姓名")
      }
      if (this.form_data.phone.trim() == "") {
        this.submit_error.push("電話")
      }
      if (this.form_data.line == null || this.form_data.line.trim() == "") 
      {
        this.submit_error.push("LINE ID");
      }
      if (this.form_data.birthday == null) {
        this.submit_error.push("出生年月日")
      }
      if (this.form_data.class.length < 1) {
        this.submit_error.push("班別")
      }
      if (this.form_data.home == null) {
        this.submit_error.push("是否需要含住宿")
      }
      if (this.submit_error.length > 0) {
        return
      }
      if (confirm("確認送出？") == true) {
        let data = {
          service_id: 'service_8yel8t2',
          template_id: 'template_1qkmqum',
          user_id: 'YfZuMHMNZv0_vYCb0',
          template_params: {
            'from_name': this.form_data.name,
            'phone': this.form_data.phone,
            'line': this.form_data.line,
            'birthday': this.form_data.birthday,
            'address': this.form_data.area + " " + this.form_data.district,
            'class': this.form_data.class,
            'isHome': this.form_data.home
          }
        }
        console.log(data.template_params)
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          alert("訊息發送成功!將盡快與您聯繫!")
          // console.log(res)
        })

        // await fetch("https://api.emailjs.com/api/v1.1/history?user_id=YfZuMHMNZv0_vYCb0&accessToken=tOa5Qrurykc4wsaKqOcRE", {
        //   method: "GET",
        //   headers: {
        //     // 'Content-Type': 'application/json'
        //   }
        // }).then(function (res) { return res.json(); })
        //   .then(function (response) {
        //     // console.log(response)
        //     alert("訊息發送成功!")
        //   })
      }
    }
  },
  computed: {
    district_options() {
      for (let i = 0; i < this.area_data.length; i++) {
        for (const key in this.area_data[i].area) {
          if (key == this.form_data.area) {
            this.form_data.district = this.area_data[i].area[key][0]
            return this.area_data[i].area[key]
          }
        }
      }
    }
  }
});

app.mount("#vue");

(function () {
  emailjs.init("YfZuMHMNZv0_vYCb0");
})();
