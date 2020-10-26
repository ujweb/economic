var keys = [
    {
        "keys": "2021關鍵字",
        "img": "us-election.jpeg",
        "hashtag": ["強人政治", "美國大選", "永續"],
        "apple": "#!apple",
        "google": "#!google",
        "article": "#!article"
    },
    {
        "keys": "未來建築",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
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