const app = Vue.createApp({
  data() {
    return {
      isClicked: false,
      sectionText1: "",
      photoURL: "",
      works: [
        { id: 0, name: "【土城】久坐", salary: "56K高薪" },
        { id: 1, name: "【桃園】", salary: "錄取率99.9%" },
        { id: 2, name: "【龜山】遊戲機", salary: "簡單包裝員" },
        { id: 3, name: "【樹林】高薪開跑中", salary: "供餐好食多" },
        { id: 4, name: "【桃科】高薪", salary: "食宿全免" },
        { id: 5, name: "【華亞】電腦周邊製造", salary: "快速安排報到" }
      ],
      area: [
        {
          where:"北部",
          item:["台北市","新北市","基隆市","桃園市","新竹市","新竹縣","苗栗縣"]
        },
        {
          where:"中部",
          item:["台中市","南投縣","彰化縣","雲林縣"]
        },
        {
          where:"南部",
          item:["嘉義市","嘉義市","台南市","高雄市","屏東縣"]
        }, 
        {
          where:"東部",
          item:["宜蘭縣","花蓮縣","台東縣"]
        },                
      ]
    };
  },
  methods: {
    close() {
      this.isClicked = false;
    },
    readMore(e) {
      this.isClicked = true;
      if (e.target.parentElement.firstElementChild.textContent === "0") {
        this.photoURL = "0.png";
        this.sectionText1 = `
        ✨高時薪200-240✨<br />✨親朋好友一起來✨</br>
        ▬▬▬▬▬▬【職缺好康】▬▬▬▬▬</br>
        ✅周領5000</br>
        ✅夜校生可應徵夜班</br>
        ✅長期穩定，可轉正</br>
        ✅免費團膳供餐</br>
        ✅自由選擇班別，免輪班</br>
        ✅可領完任獎金</br>
        ✅高錄取率，可立即報到</br>
        ✅享勞健保、勞退6%</br>
        ▬▬▬▬▬▬【職缺介紹】▬▬▬▬▬</br>
        ▶️工作地點：新北市土城區中山路</br>
        ▶️工作內容：PCB機台操作、檢驗作業、各項製程</br>
        ▶️工作時間：</br>
        日班：08:00-16:30</br>
        中班：16:00-24:30</br>
        夜班：24:00-08:30</br>
        ▶️薪資：</br>
        日班約$37200-49452（含加班津貼）</br>
        中班約$40720-52972（含加班津貼）</br>
        夜班約$44240-56492（含加班津貼）</br>
        ▶️休假制度：做五休二</br>
        做滿三天即可領2000`;
      } else if (e.target.parentElement.firstElementChild.textContent === "1") {
        this.photoURL = "1.png";
        this.sectionText1 = `❤️電子產品組裝/包裝/操作機台/品檢等等❤️</br>
        ▬▬▬▬▬▬【職缺好康】▬▬▬▬▬
        ✔️免學經歷, 可立即安排報到、高錄取率高達99%</br>
        ✔️可周領$10,000</br>
        ✔️自由選擇班別,無須輪班</br>
        ✔️團膳供餐</br>
        ✔️冷氣廠房</br>
        ✔️只需半套靜電衣</br>
        ✔️穩定可轉正</br>
        ✔️夜班可直接下夜</br>
        ✔️提供吸菸區,免費機車停車位</br>
        ✔️周休二日(六日)、見紅休</br>
        ✔️到職享勞健保、勞退6%、滿三個月即享有三節禮品(券)</br>
        ✔️書審即可，免2面</br>
        ▬▬▬▬▬▬【職缺介紹】▬▬▬▬▬</br>
        ◆ 工作地點：桃園桃鶯路(近桃園車站)</br>
        ◆ 產業：電子產品、電腦主機板、LCD電視、打印機、手機、筆電</br>
        ◆ 工作內容：組裝/包裝/操作機台/品檢等等</br>
        ◆ 工作時間、薪資介紹 ：</br>
        日班08:00-20:00 時薪$200</br>
        休八天［$53,262]休四天［$68,541]</br>
        夜班20:00-08:00 時薪$220</br>
        休八天［$56,782]休四天［$72,034]</br>
        ◆ 休假制度：周休二日(六日)</br>
        ◆ 用餐說明：一天供兩餐(50/餐)</br>
        日班08:00-17:00/17:30-20:00 算加班 時薪230 換算$61,600-72,800</br>
        夜班20:00-05:00/5:30-08:00 算加班 時薪$260 換算$69,520-82,160</br>
        ◆ 休假制度：周休二日(六日)</br>
        ◆ 用餐說明：一天供兩餐(50/餐)</br>
        😀缺錢都來來就錄取🤑
        `;
      } else if (e.target.parentElement.firstElementChild.textContent === "2") {
        this.photoURL = "2.png";
        this.sectionText1 = `✨ᴺᴱᵂ 龜山長期-來做遊戲機</br>
        ┗━━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬【好康來報】▬▬▬▬▬</br>
        ✔️ 提供預支</br>
        ✔️ 免學經歷</br>
        ✔️ 免費供餐</br>
        ✔️ 高錄取率</br>
        ✔️ 固定免輪班</br>
        ✔️ 長期穩定可轉正</br>
        ✔️ 免費機車停車位</br>
        ✔️ 享勞健保及勞退6％</br>
        ▬▬▬▬▬▬【詳細資訊】▬▬▬▬▬</br>
        ◆ 工作產品 : 伺服器,遊戲機</br>
        ◆ 工作內容 : 插件,焊錫,品檢,組裝,維修,包裝</br>
        ◆ 工作地點 : 龜山區大智路</br>
        ◆ 休假制度 : 周休二日(需依單量加班)</br>
        ◆ 工作時間 :</br>
        ［日班］0800-1700(加班2.5H 1730-1930)</br>
        ［夜班］2000-0500(加班2.5H 0530-0730)</br>
        ◆ 休息時間 :用餐休 40分鐘、上下午各休10分鐘、晚上用餐30分</br>
        ◆ 工作薪資 :</br>
        ［日班］時薪200,$35200-$47080(含加班及所有津貼)</br>
        ［夜班］時薪230,$40480-$52360(含加班及所有津貼)</br>
        ⭕️靠近桃園火車站、龜山工業區、可口可樂世界⭕️</br>`;
      } else if (e.target.parentElement.firstElementChild.textContent === "3") {
        this.photoURL = "3.png";
        this.sectionText1 = `✨ᴺᴱᵂ 樹林高薪開大缺-時薪240</br>
        ┗━━━━━━━━━━━━━━━┛</br>
        #加碼獎金拿不完</br>
        ⚡️體檢補助$750</br>
        ⚡️久任獎金$12000</br>
        ▬▬▬▬▬▬【✅職缺優勢✅】▬▬▬▬▬▬</br>
        ✔️夜班隔天下夜</br>
        ✔️周領5000!!</br>
        ✔️免費機車停車位</br>
        ✔️供餐15塊吃到飽(有牛肉麵!!)</br>
        ✔️體檢全額補助</br>
        ✔️長期人員、可轉正職人員</br>
        ✔️享有勞保、健保、勞退6%</br>
        ✔️三節禮券或禮品(春節、端午節、中秋節)</br>
        ▬▬▬▬▬▬【✅職缺介紹✅】▬▬▬▬▬▬</br>
        ◆地點:樹林區博愛街(近樹林車站)</br>
        ◆內容:電腦軟板-操作機台、組裝、檢驗</br>
        ◆休假:固休日,一~六排休</br>
        ◆時段: (需配合加班2H)</br>
        <日>07:50~17:10</br>
        <夜>19:50~05:10</br>
        ◆薪資:</br>
        <日>時薪210,$36960-$47520(含加班及所有津貼)</br>
        <夜>時薪240,$42240-$58410(含加班及所有津貼)</br>
        ◆加班費【前2H/第3H起/國定假日】:</br>
        <日>254元/317元/380元</br>
        <夜>294元/367元/440元`;
      } else if (e.target.parentElement.firstElementChild.textContent === "4") {
        this.photoURL = "4.png";
        this.sectionText1 = `
        ❗️❗️❗️觀音包吃包住包你賺-北漂時薪260 ❗️❗️❗️</br>
        ┗━━━━━━━━━━━━━━━┛</br>
        ▬▬▬▬▬▬【獎金加碼】 ▬▬▬▬▬▬</br>
        ⭐️轉正久任獎金</br>
        任職30天$3000</br>
        任職60天$4000</br>
        任職90天$5000</br>
        總共$12000!!!</br>
        ▬▬▬▬▬▬【✅職缺優勢✅】▬▬▬▬▬▬</br>
        ✔️提供周領最高10000!!!!!!</br>
        ✔️報到第四天起可日領$1200</br>
        ✔️交通津貼2000</br>
        ✔️超快速上工!!</br>
        ✔️【免費】汽機車停車場</br>
        ✔️免費團膳-高CP值!</br>
        ✔️長期人員、可轉正職人員</br>
        ✔️享有勞保、健保、勞退6%</br>
        ✔️三節禮券或禮品(春節、端午節、中秋節)</br>
        ✔️免費宿舍,住宿免押金!!</br>
        ✔️住宿有【交通接駁車】</br>
        ▬▬▬▬▬▬【✅職缺介紹✅】▬▬▬▬▬▬</br>
        ◆地點:觀音區桃科十路</br>
        ◆內容:電腦軟板-操作機台、組裝、檢驗</br>
        ◆休假:固定休日,周一至六排休一天</br>
        ◆時段:</br>
        日:0820-1740</br>
        夜:2020-0540</br>
        ◆薪資:</br>
        <日>時薪$230/H,月賺$52822-$64000(含加班及所有津貼)</br>
        <夜>時薪$260/H,月賺$59862-$72000(含加班及所有津貼)`;
      } else if (e.target.parentElement.firstElementChild.textContent === "5") {
        this.photoURL = "5.png";
        this.sectionText1 = `✨ᴺᴱᵂ 龜山科技大廠-熱門8H周休</br>
        ┗━━━━━━━━━━━━━━┛</br>
        #【板橋,新莊,長庚,桃園】皆有交通車</br>
        ▬▬▬▬▬▬【好康來報】▬▬▬▬▬</br>
        ✔️ 免快篩!</br>
        ✔️ 免無塵衣</br>
        ✔️ 快速上班</br>
        ✔️ 環境明亮整潔</br>
        ✔️ 周領5000</br>
        ✔️ 提供團膳</br>
        ✔️ 長期穩定可轉正</br>
        ✔️ 高錄取率</br>
        ✔️ 免費機車停車位</br>
        ✔️ 享勞健保及勞退6％</br>
        ✔️ 滿三個月即享有三節禮品(券)</br>
        ▬▬▬▬▬▬【詳細資訊】▬▬▬▬▬</br>
        ◆ 工作產品 : 無線網路交換器</br>
        ◆ 工作內容 : 機台操作、組包裝、插件、測試</br>
        ◆ 工作地點 : 龜山區復興三路</br>
        ◆ 休假制度 : 周休二日(需依單量加班)</br>
        ◆ 工作時間 :</br>
        ［日班］0830-1730(加班2.5H 1740-2030)</br>
        ［夜班］2030-0530(加班2.5H 0540-0830)</br>
        ◆ 休息時間 :用餐休 40-50分鐘、上下午各休10分鐘</br>
        ◆ 工作薪資 :</br>
        ［日班］時薪$190,月賺$33400-$57744(含加班及所有津貼)</br>
        ［夜班］時薪$225,月賺$39600-$68429(含加班及所有津貼)`;
      }
    }
  }
});

app.mount("#vue");
