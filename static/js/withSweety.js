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
  y: [396, 931, 1495, 2219, 4052, 4703],
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
  text: ['year: 2012<br />value:  396<br />city: 동탄', 'year: 2013<br />value:  931<br />city: 동탄', 'year: 2014<br />value: 1495<br />city: 동탄', 'year: 2015<br />value: 2219<br />city: 동탄', 'year: 2016<br />value: 4052<br />city: 동탄', 'year: 2017<br />value: 4703<br />city: 동탄'],
  textsrc: 'adellejang:9:e5c246',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:9:c3a4cb',
  yaxis: 'y',
  ysrc: 'adellejang:9:3d8e8c'
};
trace2 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [1326, 1886, 2761, 3858, 4647, 5192],
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
  text: ['year: 2012<br />value: 1326<br />city: 세종', 'year: 2013<br />value: 1886<br />city: 세종', 'year: 2014<br />value: 2761<br />city: 세종', 'year: 2015<br />value: 3858<br />city: 세종', 'year: 2016<br />value: 4647<br />city: 세종', 'year: 2017<br />value: 5192<br />city: 세종'],
  textsrc: 'adellejang:9:9061c1',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:9:32d233',
  yaxis: 'y',
  ysrc: 'adellejang:9:742621'
};
trace3 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [1050, 1797, 3589, 4936, 7227, 8058],
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
  text: ['year: 2012<br />value: 1050<br />city: 송도', 'year: 2013<br />value: 1797<br />city: 송도', 'year: 2014<br />value: 3589<br />city: 송도', 'year: 2015<br />value: 4936<br />city: 송도', 'year: 2016<br />value: 7227<br />city: 송도', 'year: 2017<br />value: 8058<br />city: 송도'],
  textsrc: 'adellejang:9:201aa6',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:9:47da69',
  yaxis: 'y',
  ysrc: 'adellejang:9:5f0114'
};
trace4 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [11, 31, 28, 86, 482, 1147],
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
  text: ['year: 2012<br />value:   11<br />city: 위례', 'year: 2013<br />value:   31<br />city: 위례', 'year: 2014<br />value:   28<br />city: 위례', 'year: 2015<br />value:   86<br />city: 위례', 'year: 2016<br />value:  482<br />city: 위례', 'year: 2017<br />value: 1147<br />city: 위례'],
  textsrc: 'adellejang:9:413741',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:9:3dcfaa',
  yaxis: 'y',
  ysrc: 'adellejang:9:f13773'
};
trace5 = {
  x: [2012, 2013, 2014, 2015, 2016, 2017],
  y: [78, 238, 741, 1046, 1584, 2223],
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
  text: ['year: 2012<br />value:   78<br />city: 청라', 'year: 2013<br />value:  238<br />city: 청라', 'year: 2014<br />value:  741<br />city: 청라', 'year: 2015<br />value: 1046<br />city: 청라', 'year: 2016<br />value: 1584<br />city: 청라', 'year: 2017<br />value: 2223<br />city: 청라'],
  textsrc: 'adellejang:9:f44aa6',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:9:943cd3',
  yaxis: 'y',
  ysrc: 'adellejang:9:9b2455'
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
  title: '도시별 "오빠랑" 검색량',
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
    ticktextsrc: 'adellejang:9:3750e0',
    tickvalssrc: 'adellejang:9:fd6ae2',
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
    range: [-391.35, 8460.35],
    showgrid: true,
    showline: false,
    showticklabels: false,
    tickangle: 0,
    tickfont: {size: 0},
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: '',
    ticktextsrc: 'adellejang:9:e00171',
    tickvalssrc: 'adellejang:9:32992e',
    tickwidth: 0,
    title: '',
    titlefont: {size: 0},
    type: 'linear',
    zeroline: false
  }
};
Plotly.plot('withSweety', {
  data: data,
  layout: layout
});
