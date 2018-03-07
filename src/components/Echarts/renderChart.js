import echarts from './echarts.min';
import toString from '../../util/toString';
var myChart = null;
export default function renderChart(props,isFirst) {
  const height = props.height || 400;
    const width = props.width || 'auto';
  if (isFirst){
    return `
    document.getElementById('main').style.height = "${height}px";
    document.getElementById('main').style.width = "${width}px";
    myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `
  }else{
    return `
    document.getElementById('main').style.height = "${height}px";
    document.getElementById('main').style.width = "${width}px";
    myChart.setOption(${toString(props.option)});
  `
  }
}
