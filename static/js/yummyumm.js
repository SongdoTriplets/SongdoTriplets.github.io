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
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [1377, 2665, 4264, 5130, 7403, 7967],
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
  text: ['year: 2012<br />value:  1377<br />city: 동탄', 'year: 2013<br />value:  2665<br />city: 동탄', 'year: 2014<br />value:  4264<br />city: 동탄', 'year: 2015<br />value:  5130<br />city: 동탄', 'year: 2016<br />value:  7403<br />city: 동탄', 'year: 2017<br />value:  7967<br />city: 동탄'],
  textsrc: 'adellejang:11:e0ea27',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:11:308db8',
  yaxis: 'y',
  ysrc: 'adellejang:11:32b3cf'
};
trace2 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [1691, 3402, 6309, 9567, 14945, 22127],
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
  text: ['year: 2012<br />value:  1691<br />city: 세종', 'year: 2013<br />value:  3402<br />city: 세종', 'year: 2014<br />value:  6309<br />city: 세종', 'year: 2015<br />value:  9567<br />city: 세종', 'year: 2016<br />value: 14945<br />city: 세종', 'year: 2017<br />value: 22127<br />city: 세종'],
  textsrc: 'adellejang:11:90a1e8',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:11:3bbc91',
  yaxis: 'y',
  ysrc: 'adellejang:11:ac66bf'
};
trace3 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [3113, 6354, 13538, 21632, 28250, 38097],
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
  text: ['year: 2012<br />value:  3113<br />city: 송도', 'year: 2013<br />value:  6354<br />city: 송도', 'year: 2014<br />value: 13538<br />city: 송도', 'year: 2015<br />value: 21632<br />city: 송도', 'year: 2016<br />value: 28250<br />city: 송도', 'year: 2017<br />value: 38097<br />city: 송도'],
  textsrc: 'adellejang:11:b50646',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:11:49b8a0',
  yaxis: 'y',
  ysrc: 'adellejang:11:09123c'
};
trace4 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [21, 89, 175, 429, 2855, 6777],
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
  text: ['year: 2012<br />value:    21<br />city: 위례', 'year: 2013<br />value:    89<br />city: 위례', 'year: 2014<br />value:   175<br />city: 위례', 'year: 2015<br />value:   429<br />city: 위례', 'year: 2016<br />value:  2855<br />city: 위례', 'year: 2017<br />value:  6777<br />city: 위례'],
  textsrc: 'adellejang:11:5b657d',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:11:272c09',
  yaxis: 'y',
  ysrc: 'adellejang:11:2751da'
};
trace5 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [517, 1301, 4724, 6426, 9840, 11297],
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
  text: ['year: 2012<br />value:   517<br />city: 청라', 'year: 2013<br />value:  1301<br />city: 청라', 'year: 2014<br />value:  4724<br />city: 청라', 'year: 2015<br />value:  6426<br />city: 청라', 'year: 2016<br />value:  9840<br />city: 청라', 'year: 2017<br />value: 11297<br />city: 청라'],
  textsrc: 'adellejang:11:24dc02',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:11:e52620',
  yaxis: 'y',
  ysrc: 'adellejang:11:f0f69b'
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
    y: 0.865887731775,
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
    t: 50.031521579,
    b: 46.4516129032,
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
  title: '도시별 맛집 검색량',
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
    ticktextsrc: 'adellejang:11:27208a',
    tickvalssrc: 'adellejang:11:5b6a8a',
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
    range: [-1882.8, 40000.8],
    showgrid: true,
    showline: false,
    showticklabels: false,
    tickangle: 0,
    tickfont: {size: 0},
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: '',
    ticktextsrc: 'adellejang:11:ca2660',
    tickvalssrc: 'adellejang:11:2d6252',
    tickwidth: 0,
    title: '',
    titlefont: {size: 0},
    type: 'linear',
    zeroline: false
  }
};
Plotly.plot('yummyumm', {
  data: data,
  layout: layout
});
