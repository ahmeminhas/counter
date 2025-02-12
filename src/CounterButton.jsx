import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButton (){
    return(
       <div className="button-container">
         <button className="count-btn">
            <MinusIcon className="reset-btn-icon"/>
         </button>
         <button className="count-btn">
            <PlusIcon className="reset-btn-icon"/>
         </button>
       </div>
       
    )

}