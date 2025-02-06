import "./App.css";
import { IsLeapYear } from "./1-fonksiyonlar";
import { GetProfit } from "./2-objeler";
import { dune } from "./2-objeler";
import { cats } from "./2-objeler";
import { KardesPayi as KardesPayiImported } from "./1-fonksiyonlar";
import { GetTotal } from "./3-arrayler";
import { myProducts } from "./3-arrayler";

function App() {
  const KardesPayi = (name?: string) => {
    if (name) {
      return `bi tane ${name} için, bir de benim için`;
    } else {
      return `bir tane senin için, bir de benim için`;
    }
  };

  console.log(KardesPayi("güliş"));
  console.log(GetProfit(dune));
  console.log(GetProfit(cats));
  console.log(GetTotal(myProducts)); // Buradaki hata düzeltildi

  return (
    <>
      <h4>{KardesPayi()}</h4>
      <h4>{IsLeapYear(2024) ? "Artık yıl" : "Artık yıl değil"}</h4>

      {/* birini konsolda diğerini browser da farklı görmek için */}
      {/* <IsLeapYear />
      <GetProfit /> */}
    </>
  );
}

export default App;
