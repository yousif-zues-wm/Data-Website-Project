      google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Player name', 'USCF rating'],
          [' Magnus Carlsen ',   2882],
          ['Garry Kasparov ', 2851],
          ['Fabiano Caruana ', 2844],
          ['Levon Aronian  ', 2830],
          ['Viswanathan Anand  ', 2817]

        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }