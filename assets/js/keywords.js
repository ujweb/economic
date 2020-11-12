var keys = [
    {
        "keys": "2021關鍵字",
        "img": "us-election.jpeg",
        "hashtag": ["強人政治", "美國大選", "永續"],
        "apple": "https://podcasts.apple.com/tw/podcast/%E8%81%BD%E5%A4%A9%E4%B8%8B-%E5%A4%A9%E4%B8%8B%E9%9B%9C%E8%AA%8Cpodcast/id1486227803?i=1000497166002",
        "google": "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz&ep=14&episode=ODIzNzdmODItZjJlOS00ZTBlLWI5ZjgtMzc4NzlkYTdmZDRh",
        "article": "https://web.cw.com.tw/us-2020/"
    },
    {
        "keys": "未來建築",
        "img": "future-city.png",
        "hashtag": ["環境", "永續", "本住建築"],
        "apple": "https://podcasts.apple.com/tw/podcast/%E8%81%BD%E5%A4%A9%E4%B8%8B-%E5%A4%A9%E4%B8%8B%E9%9B%9C%E8%AA%8Cpodcast/id1486227803#episodeGuid=2c513e1a-3dcb-4e67-869b-4639a32aa21e",
        "google": "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYzk0ZmM4L3BvZGNhc3QvcnNz&ep=14&episode=MmM1MTNlMWEtM2RjYi00ZTY3LTg2OWItNDYzOWEzMmFhMjFl",
        "article": "https://www.cw.com.tw/article/5102512"
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
        "keys": "水資源",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "低利對策",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "智慧運輸",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "循環設計",
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
        "keys": "智慧醫療",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "顏值經濟",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "宅經濟",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "電動車",
        "img": "",
        "hashtag": "",
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "數位金融",
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
        imgCard += '<div class="h5 mt10 mb0">每週三更新<br/>敬請期待</div></div>';
    }
}
$('.img-card-list').html(imgCard);