google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data_json = JSON.parse(rawJSONData)

  data_json.sort(function(a, b){
    var frst = 0;
    for (var j of ["2017", "2018", "2019"]){
      frst+= Number(a["years"][j][0]) + Number(a["years"][j][1])
    }
    var sec = 0;
    for (var j of ["2017", "2018", "2019"]){
      sec+= Number(b["years"][j][0]) + Number(b["years"][j][1])
    }
    if (frst > sec){
      return -1;
    }
    return 1;
  });


  /*
      var frst = 0;
    for (var k of a[years]){
      frst+= k
    }
    var sec = 0;
    for (var k of b[years]){
      sec+= k;
    }
    if (frst > sec){
      return 1;
    } else {
      return -1;
    }
    */


  var array = [['Регион', '2019', '2018', '2017']]
  for (let i = 0; i < data_json.length; i++){
    var tmp = [data_json[i]["reg"]];
      for (var j of ["2017", "2018", "2019"]){
        tmp.push(Number(data_json[i]["years"][j][0]) + Number(data_json[i]["years"][j][1]))
      }
    array.push(tmp)
  }



  var data = google.visualization.arrayToDataTable(array);

  var options = {
    chart: {
      title: 'Количество победителей и призеров',
      subtitle: 'Заключительного этапа ВсОШ по информатике в 2017, 2018 и 2019 годах',
    },
    bars: 'horizontal', // Required for Material Bar Charts.
    hAxis: {format: 'decimal'},
    
    height: 6000,
    colors: ['#1b9e77', '#d95f02', '#7570b3'],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function (e) {
    if (e.target.tagName === 'BUTTON') {
      options.hAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}