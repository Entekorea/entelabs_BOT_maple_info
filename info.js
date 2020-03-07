function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  var Data = msg.split(" ");
  if (Data[0] == "!메이플") {//메이플 입력시
      var u = Utils.getWebText("https://maple.gg/u/"+msg.substr(5));
      var job = u.split("<li class=\"user-summary-item\">");//직업은 멮지지에서 가져옴
      var data = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Ranking/World/Total?c=" + Data[1]).get().select("tr.search_com_chk").select("td");
      var lv = data.get(2).text().replace("Lv.", "");//td 소스(?) 3번째줄에 있는 레벨 가져옴 Lv는 보기 좀 그래서 삭제
      var exp = data.get(3).text();//td 소스(?) 4번째줄
      var pop = data.get(4).text();//td 소스(?) 5번째줄
      var gu = data.get(5).text();td 소스(?) 6번째줄
    replier.reply("닉네임: " + Data[1] + "\n직업: " + job[2].split("<")[0] + "\n레벨: " + lv + "\n경험치: " + exp + "\n인기도: " + pop + "\n길드: " + gu);
    }
}
//제작자 엔테클로
//문의는 언제나 환영 entekorea@naver.com
//복붙해도 상관은 없는데 팔다가 걸리면 손모가지
