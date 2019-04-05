import Taro, {Component} from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";

function setChartData(chart, data) {
  let option = {
    tooltip: {},
    color: ['#2adb09'],
    title: {
      subtext: '最近20天蒜价',
      subtextStyle: {
        align: 'center'
      },
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        },
        name: '日'
      }
    ],
    dataZoom: [
      {
        type: 'slider',
        start: 0,
        show: false,
        end: 100,
      },
      {
        type: 'inside',
        start: 0,
        end: 100,
        filterMode: 'filter',
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '价格/元'
      }
    ],
    series: []
  };
  if (data && data.dimensions && data.measures) {
    option.xAxis[0].data = data.dimensions.data
    option.series = data.measures.map(item => {
      return {
        ...item,
        type: 'bar',
      }
    })
  }
  chart.setOption(option);
}

export default class MoveChart extends Component {
  config = {
    usingComponents: {
      "ec-canvas": "./ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };

  refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id='mychart-area'
        ec={this.state.ec}
      />
    );
  }
}
