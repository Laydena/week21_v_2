import { Chart } from "react-google-charts";
import './App.css';

function App() {
  const data = [
    ["Животное", "Проценты"],
    ["Собаки", 33],
    ["Кошки", 11],
    ["Собак и кошек", 14],
    ["Других животных", 3],
    ["Никаких животных", 39],
  ];

  const options = {
    title: "Процентное соотношение (%)",
    is3D: true,
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Каких животных предпочитают заводить американцы
        </p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

      </header>
    </div>
  );
}

export default App;
