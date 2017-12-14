var markers = [];
var map = L.map('map').setView([37.38748, 126.6470], 13);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

    map._initPathRoot()

var svg = d3.select("#map").append("svg");
g = svg.append("g");

d3.csv("static/data/franchise.csv", function(collection) {
  var brandLogos = {
    '스타벅스': 'static/images/logo_Starbucks.png',
    '이디야커피': 'static/images/logo_ediya.png',
    '탐앤탐스' : 'static/images/logo_ttms.png',
    '투썸플레이스': 'static/images/logo_twosome.png',
    '커피빈': 'static/images/logo_coffeebean.png',
    '버거킹': 'static/images/logo_BurgerKing.png',
    '뚜레쥬르': 'static/images/logo_tlj.jpeg',
    '맥도날드': 'static/images/logo_Mcdonald.png',
    '파리바게트': 'static/images/logo_paris.ico',
    '롯데리아': 'static/images/logo_lotteria.png'
  };

  collection = collection.map(function(d) {
        var icon = new L.icon({
      iconUrl: brandLogos[d['brand']],
        iconSize:     [33, 33],
        iconAnchor:   [22, 22],
        popupAnchor:  [-5, -26]
    });

      var opdate = d['opdate'].replace(/ /g, '');
      var tokens = opdate.split('.');
      if(tokens.length === 1) tokens.push('01');
      if(tokens.length === 2) tokens.push('01');
      if(tokens[1].length === 1) tokens[1] = '0' + tokens[1];
      if(tokens[2].length === 1) tokens[2] = '0' + tokens[2];
      opdate = tokens.join('.');

        return{
            'year': +d['year'],
            'category': d['category'],
            'brand' : d['brand'],
            'icon': icon,
            'brand_division' : d['brand_division'],
            'latitude': +d['latitude'],
            'longitude': +d['longitude'],
            'opdate': opdate
         };
    });
  // 불완전한 opdate에 조건을 걸면 인식가능? 아니라면 opdate의 월 까지만 substr하는 법..
  //d3.min(collection, function(d) {return d['opdate'];})

  // 필터가 바뀌면 update 함수가 호출되도록.
  d3.select('#opdateFilter').on('change', update);
  update();

  function update() {
    // 기존 마커를 몽땅 지우고...
    markers.forEach(function(m) {
      map.removeLayer(m);
    });

    // 필터에 맞게 데이터를 골라내고...
    var years = ['2014.07.01', '2015.06.01', '2020.12.31'];
    var year = years[+document.querySelector('#opdateFilter').value];
    var filteredData = collection.filter(function(d) {
      return d.opdate < year;
    });

    // 골라낸 데이터를 마커로 추가.
    filteredData.forEach(function(d) {
      var marker = L.marker([d.latitude, d.longitude], {icon: d.icon});
      markers.push(marker);
      marker.addTo(map).bindPopup(d['brand'] + ' ' + d['brand_division']);
    });
  }
});
