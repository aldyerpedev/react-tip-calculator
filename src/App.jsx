import { useState } from "react";
import Input from "./components/Input";
import Tip from "./components/Tip";
import Output from "./components/Output";
import Reset from "./components/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendsTip, setFriendsTip] = useState(0);

  const totalTip = ((myTip + friendsTip) / 2 / 100) * bill;

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendsTip(0);
  }

  return (
    <div>
      <h1 className="main-title">ReactJS Tip Calculator by Aldy Rizky Putra</h1>
      <div className="container">
        <Input bill={bill} onSetBill={setBill} />
        <Tip tip={myTip} onSetTip={setMyTip}>
          What is your satisfaction rating of our services?
        </Tip>
        <Tip tip={friendsTip} onSetTip={setFriendsTip}>
          What is your friends satisfaction rating of our services?
        </Tip>
        {bill && (
          <>
            <Output bill={bill} tip={totalTip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
}
