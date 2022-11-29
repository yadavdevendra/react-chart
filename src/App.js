import './App.css';
import BarChartcomponents from './components/BarChartcomponents';
import DoughnutChart from './components/DoughnutChart';
import PaiChartCom from './components/PaiChartCom';
import LineChart from './components/LineChart';
import ApiBarchart from './components/ApiBarchart';
import ApiPaichart from './components/ApiPaichart';

function App() {
  return (
    <div className="App">
      <div className='barchart'><BarChartcomponents /></div>
      <div className='doughnutChart'><DoughnutChart /></div>
      <div className='paiChart'><PaiChartCom /></div>
      <div className='lineChart'><LineChart /></div>
      <div className='lineChart'><ApiBarchart /></div>
      <div className='lineChart'><ApiPaichart /></div>
    </div>
  );
}

export default App;
