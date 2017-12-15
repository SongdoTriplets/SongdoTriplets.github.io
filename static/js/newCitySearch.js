// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="newCitySearch"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [45801, 79205, 111965, 177689, 283245, 517797],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '동탄',
  line: {
    color: 'rgba(248,118,109,0.6)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(248,118,109,1)',
    line: {
      color: 'rgba(248,118,109,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 5.66929133858,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '동탄',
  showlegend: true,
  text: ['year: 2012<br />value:  45801<br />city: 동탄', 'year: 2013<br />value:  79205<br />city: 동탄', 'year: 2014<br />value: 111965<br />city: 동탄', 'year: 2015<br />value: 177689<br />city: 동탄', 'year: 2016<br />value: 283245<br />city: 동탄', 'year: 2017<br />value: 517797<br />city: 동탄'],
  textsrc: 'adellejang:7:85c9bf',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:7:dc0e15',
  yaxis: 'y',
  ysrc: 'adellejang:7:671936'
};
trace2 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [99499, 136206, 184237, 250556, 341964, 497040],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '세종',
  line: {
    color: 'rgba(163,165,0,0.6)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(163,165,0,1)',
    line: {
      color: 'rgba(163,165,0,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 5.66929133858,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '세종',
  showlegend: true,
  text: ['year: 2012<br />value:  99499<br />city: 세종', 'year: 2013<br />value: 136206<br />city: 세종', 'year: 2014<br />value: 184237<br />city: 세종', 'year: 2015<br />value: 250556<br />city: 세종', 'year: 2016<br />value: 341964<br />city: 세종', 'year: 2017<br />value: 497040<br />city: 세종'],
  textsrc: 'adellejang:7:941db9',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:7:1c51ef',
  yaxis: 'y',
  ysrc: 'adellejang:7:ddc63a'
};
trace3 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [54604, 84889, 127839, 175711, 231653, 376239],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '송도',
  line: {
    color: 'rgba(0,191,125,0.6)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(0,191,125,1)',
    line: {
      color: 'rgba(0,191,125,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 5.66929133858,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '송도',
  showlegend: true,
  text: ['year: 2012<br />value:  54604<br />city: 송도', 'year: 2013<br />value:  84889<br />city: 송도', 'year: 2014<br />value: 127839<br />city: 송도', 'year: 2015<br />value: 175711<br />city: 송도', 'year: 2016<br />value: 231653<br />city: 송도', 'year: 2017<br />value: 376239<br />city: 송도'],
  textsrc: 'adellejang:7:52458b',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:7:405c80',
  yaxis: 'y',
  ysrc: 'adellejang:7:4dd093'
};
trace4 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [3130, 8975, 2336, 31138, 63506, 107449],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '위례',
  line: {
    color: 'rgba(0,176,246,0.6)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(0,176,246,1)',
    line: {
      color: 'rgba(0,176,246,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 5.66929133858,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '위례',
  showlegend: true,
  text: ['year: 2012<br />value:   3130<br />city: 위례', 'year: 2013<br />value:   8975<br />city: 위례', 'year: 2014<br />value:   2336<br />city: 위례', 'year: 2015<br />value:  31138<br />city: 위례', 'year: 2016<br />value:  63506<br />city: 위례', 'year: 2017<br />value: 107449<br />city: 위례'],
  textsrc: 'adellejang:7:951b63',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:7:759e2d',
  yaxis: 'y',
  ysrc: 'adellejang:7:0ea049'
};
trace5 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [13758, 22296, 42085, 65514, 106724, 223825],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '청라',
  line: {
    color: 'rgba(231,107,243,0.6)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(231,107,243,1)',
    line: {
      color: 'rgba(231,107,243,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 5.66929133858,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '청라',
  showlegend: true,
  text: ['year: 2012<br />value:  13758<br />city: 청라', 'year: 2013<br />value:  22296<br />city: 청라', 'year: 2014<br />value:  42085<br />city: 청라', 'year: 2015<br />value:  65514<br />city: 청라', 'year: 2016<br />value: 106724<br />city: 청라', 'year: 2017<br />value: 223825<br />city: 청라'],
  textsrc: 'adellejang:7:6bef8f',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:7:d6eea7',
  yaxis: 'y',
  ysrc: 'adellejang:7:59a67f'
};
data = [trace1, trace2, trace3, trace4, trace5];
layout = {
  annotations: [
    {
      x: 1.02,
      y: 1,
      ax: 0,
      ay: 0,
      font: {
        color: 'rgba(0,0,0,1)',
        family: 'Apple SD Gothic Neo',
        size: 14.6118721461
      },
      showarrow: false,
      text: 'city',
      textangle: 0,
      xanchor: 'left',
      xref: 'paper',
      yanchor: 'bottom',
      yref: 'paper'
    }
  ],
  font: {
    color: 'rgba(0,0,0,1)',
    family: 'Apple SD Gothic Neo',
    size: 14.6118721461
  },
  hovermode: 'closest',
  legend: {
    y: 0.921458180448,
    bgcolor: 'rgba(255,255,255,1)',
    bordercolor: 'transparent',
    borderwidth: 1.88976377953,
    font: {
      color: 'rgba(0,0,0,1)',
      family: 'Apple SD Gothic Neo',
      size: 11.6894977169
    }
  },
  margin: {
    r: 7.30593607306,
    t: 40.7481683402,
    b: 37.1682596644,
    l: 10.9589041096
  },
  paper_bgcolor: 'rgba(255,255,255,1)',
  plot_bgcolor: 'rgba(235,235,235,1)',
  shapes: [
    {
      line: {width: 0},
      type: 'rect',
      x0: 0,
      x1: 1,
      xref: 'paper',
      y0: 0,
      y1: 1,
      yref: 'paper'
    }
  ],
  showlegend: true,
  title: '신도시 검색량',
  titlefont: {
    color: 'rgba(0,0,0,1)',
    family: 'Apple SD Gothic Neo',
    size: 17.5342465753
  },
  xaxis: {
    anchor: 'y',
    autorange: false,
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [2011.75, 2017.25],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickangle: 0,
    tickcolor: 'rgba(51,51,51,1)',
    tickfont: {
      color: 'rgba(77,77,77,1)',
      family: 'Apple SD Gothic Neo',
      size: 11.6894977169
    },
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: 'outside',
    ticktextsrc: 'adellejang:7:2908d6',
    tickvalssrc: 'adellejang:7:afa0aa',
    tickwidth: 0.664176006642,
    title: 'year',
    titlefont: {
      color: 'rgba(0,0,0,1)',
      family: 'Apple SD Gothic Neo',
      size: 14.6118721461
    },
    type: 'linear',
    zeroline: false
  },
  yaxis: {
    anchor: 'x',
    autorange: false,
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [-23437.05, 543570.05],
    showgrid: true,
    showline: false,
    showticklabels: false,
    tickangle: 0,
    tickfont: {size: 0},
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: '',
    ticktextsrc: 'adellejang:7:d3b6d7',
    tickvalssrc: 'adellejang:7:5a2aae',
    tickwidth: 0,
    title: '',
    titlefont: {size: 0},
    type: 'linear',
    zeroline: false
  }
};
Plotly.plot('newCitySearch', {
  data: data,
  layout: layout
});
