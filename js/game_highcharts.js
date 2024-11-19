document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('chart-container', {
      chart: {
          backgroundColor: '#020307',
          type: 'bar'
      },
      title: {
          text: 'Top-Rated Games',
          style: {
              color: '#ffffff',
              fontSize: '20px'
          }
      },
      xAxis: {
          categories: [
              'Grand Theft Auto V', 
              'Minecraft', 
              'The Elder Scrolls V: Skyrim', 
              'The Witcher 3: Wild Hunt', 
              'Assassins Creed IV: Black Flag', 
              'God of War', 
              'Horizon Zero Dawn', 
              'Outer Wilds'
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
          data: [9, 8.7, 9.3, 10, 8.5, 9.4, 8.3, 8.5],
          color: '#d61818'
      }]
  });
});
