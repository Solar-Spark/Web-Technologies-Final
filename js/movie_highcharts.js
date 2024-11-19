document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('chart-container', {
      chart: {
          backgroundColor: '#020307',
          type: 'bar'
      },
      title: {
          text: 'Top-Rated Movies',
          style: {
              color: '#ffffff',
              fontSize: '20px'
          }
      },
      xAxis: {
          categories: [
              'Dune', 
              'Red Sparrow', 
              'MoneyBall', 
              'Trouble with the Curve 2', 
              'The Dictator', 
              'Haunted Mansion', 
              'Pitch Perfect', 
              'American Made', 
              'Searching', 
              'Ballerina'
          ],
          labels: {
              style: {
                  color: '#ffffff',
                  fontSize: '14px'
              }
          },
          title: {
              style: {
                  color: '#ffffff'
              }
          }
      },
      yAxis: {
          title: {
              text: 'Rating (out of 10)',
              style: {
                  color: '#ffffff',
                  fontSize: '14px'
              }
          },
          labels: {
              style: {
                  color: '#ffffff',
                  fontSize: '14px'
              }
          }
      },
      legend: {
          itemStyle: {
              color: '#ffffff',
              fontSize: '12px'
          }
      },
      series: [{
          name: 'Ratings',
          data: [8, 6.6, 7.6, 6.8, 6.5, 5.2, 7.1, 7.1, 7.6, 6.3],
          color: '#d61818'
      }]
  });
});
