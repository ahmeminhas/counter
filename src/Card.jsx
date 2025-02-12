import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import CounterButton from "./CounterButton";

export default function Card(){
    return( <div className="card">
          <Title/>
          <Count/>
          <Reset/>
          <CounterButton/>
            
          </div>)
}