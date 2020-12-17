var keys = [
    {
        "keys": "疫後K經濟",
        "img": "k-economic.jpg",
        "hashtag": ["疫情過後", "結構重組", "經濟復甦"],
        "apple": "https://reurl.cc/N6vZKQ",
        "google": "https://reurl.cc/bRQnrv",
        "article": "https://www.cw.com.tw/article/5100819"
    },
    {
        "keys": "低利對策",
        "img": "cheap-money.jpg",
        "hashtag": ["投資", "成長策略", "野村投信"],
        "apple": "https://reurl.cc/q8ey8n",
        "google": "https://reurl.cc/r8Wp8O",
        "article": "https://www.cw.com.tw/article/5103035"
    },
    {
        "keys": "智慧急診",
        "img": "smart-emergency.jpg",
        "hashtag": ["智慧醫療", "急診室", "臺大人工智慧中心"],
        "apple": "https://reurl.cc/Y6aAWx",
        "google": "https://reurl.cc/Ez0921",
        "article": "https://www.cw.com.tw/article/5102953"
    },
    {
        "keys": "永續佈局",
        "img": "energy.jpg",
        "hashtag": ["台商回流", "企業佈局", "渣打銀行"],
        "apple": "https://podcasts.apple.com/tw/podcast/%E8%81%BD%E5%A4%A9%E4%B8%8B-%E5%A4%A9%E4%B8%8B%E9%9B%9C%E8%AA%8Cpodcast/id1486227803?i=1000500181718",
        "google": "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz/episode/Y2ZhNGMxMjMtZTEzNy00ODE1LWE2NzQtM2ExMGQ1ODUyMDA0?sa=X&ved=0CAUQkfYCahcKEwiA--uKhZ_tAhUAAAAAHQAAAAAQAw",
        "article": "https://www.cw.com.tw/article/5102892"
    },
    {
        "keys": "美中台關係",
        "img": "us-china-tw.jpg",
        "hashtag": ["美國大選", "中國", "產業變化"],
        "apple": "https://podcasts.apple.com/tw/podcast/%E8%81%BD%E5%A4%A9%E4%B8%8B-%E5%A4%A9%E4%B8%8B%E9%9B%9C%E8%AA%8Cpodcast/id1486227803?i=1000499129689",
        "google": "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz&ep=14&episode=N2NiYzBiODktNjUyZS00MWE5LTgwYjYtOWQ2MGQwY2I4YWU1",
        "article": "https://www.cw.com.tw/article/5102768"
    },
    {
        "keys": "未來建築",
        "img": "future-city.png",
        "hashtag": ["環境", "永續", "本住建築"],
        "apple": "https://podcasts.apple.com/tw/podcast/2021%E9%97%9C%E9%8D%B5%E5%AD%97ep-2-%E6%9C%AA%E4%BE%86%E5%BB%BA%E7%AF%89-%E5%8D%8A%E8%B9%B2-%E9%98%B2%E7%96%AB-%E6%9C%83%E5%91%BC%E5%90%B8-%E8%83%BD%E8%88%87%E4%BA%BA%E6%BA%9D%E9%80%9A%E7%9A%84%E6%AD%A3%E8%83%BD%E9%87%8F%E5%BB%BA%E7%AF%89/id1486227803?i=1000498102490",
        "google": "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz&ep=14&episode=MmM1MTNlMWEtM2RjYi00ZTY3LTg2OWItNDYzOWEzMmFhMjFl",
        "article": "https://www.cw.com.tw/article/5102512"
    },
    {
        "keys": "2021關鍵字",
        "img": "us-election.jpeg",
        "hashtag": ["強人政治", "美國大選", "永續"],
        "apple": "https://podcasts.apple.com/tw/podcast/%E8%81%BD%E5%A4%A9%E4%B8%8B-%E5%A4%A9%E4%B8%8B%E9%9B%9C%E8%AA%8Cpodcast/id1486227803?i=1000497166002",
        "google": "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz&ep=14&episode=ODIzNzdmODItZjJlOS00ZTBlLWI5ZjgtMzc4NzlkYTdmZDRh",
        "article": "https://web.cw.com.tw/us-2020/"
    },
    {
        "keys": "智慧聚落",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "未來人才",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "重啟",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "數位轉型",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "數位創新",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    }
]
var imgCard = "";
for (var k = 0; k < keys.length; k++) {
    if (keys[k]["img"] != '') {
        imgCard += '<div class="img-card text-center"><img src="assets/images/keyword/';
        imgCard += keys[k]["img"];
        imgCard += '" alt="';
        imgCard += keys[k]["keys"];
        imgCard += '"><h3 class="my0">';
        imgCard += keys[k]["keys"];
        imgCard += '</h3><ul>';
        for (var m = 0; m < keys[k]["hashtag"].length; m++) {
            imgCard += '<li class="h6 font-weight-500 my0">#' + keys[k]["hashtag"][m] + '</li>';
        }
        imgCard += '</ul><a href="';
        imgCard += keys[k]["apple"];
        imgCard += '" target="_blank" class="btn btn--white h6 mt10 mb0">Apple Podcast</a><a href="';
        imgCard += keys[k]["google"];
        imgCard += '" target="_blank" class="btn btn--white h6 mt10 mb0">Google Podcast</a><a href="';
        imgCard += keys[k]["article"];
        imgCard += '" target="_blank" class="btn btn--white h6 mt10 mb0">相關報導</a></div>';
    } else {
        imgCard += '<div class="img-card text-center"><h3 class="my0">' + keys[k]["keys"] + '</h3>';
        imgCard += '<div class="h5 mt10 mb0">每週四更新<br/>敬請期待</div></div>';
    }
}
$('.img-card-list').html(imgCard);