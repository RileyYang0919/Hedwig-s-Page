const app = Vue.createApp({
  data() {
    return {
      isClicked: false,
      sectionText1: "",
      sectionText2: "",
      sectionText3: "",
      works: [
        { id: 0, name: "土城久坐", salary: "高薪56K" },
        { id: 1, name: "樹林久坐", salary: "高薪66K" }
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
        this.sectionText1 = `✨高時薪200-240✨<br />✨親朋好友一起來✨`;
        this.sectionText2 = `✅周領5000</br>
  ✅夜校生可應徵夜班</br>
  ✅長期穩定，可轉正</br>
  ✅免費團膳供餐</br>
  ✅自由選擇班別，免輪班</br>
  ✅可領完任獎金</br>
  ✅高錄取率，可立即報到</br>
  ✅享勞健保、勞退6%</br>`;
        this.sectionText3 = `▶️工作地點：新北市土城區中山路</br>
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
        做滿三天即可領2000</br>`;
      } else if (e.target.parentElement.firstElementChild.textContent === "1") {
        this.sectionText1 = `✨高時薪200-240✨<br />✨親朋好友一起來✨`;
        this.sectionText2 = `✅周領5000</br>
  ✅夜校生可應徵夜班</br>
  ✅長期穩定，可轉正</br>
  ✅免費團膳供餐</br>
  ✅自由選擇班別，免輪班</br>
  ✅可領完任獎金</br>
  ✅高錄取率，可立即報到</br>
  ✅享勞健保、勞退6%</br>`;
        this.sectionText3 = `醜八怪`;
      }
    }
  }
});

app.mount("#vue");
