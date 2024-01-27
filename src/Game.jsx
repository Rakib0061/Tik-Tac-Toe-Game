import { useState } from "react";
import BackHistory from "./BackHistory";
import Board from "./Board";

const Game = () => {
  // ✅mandatory data state
  const [Boardsquare, setBoardSquare] = useState([Array(9).fill(null)]);
  const [isNext, setNext] = useState(true);
  const [curentPositionAfterHistoryClick, setCurentPositionAfterHistoryClick] =
    useState(0);

  // Boardsquare এইটা history মত,এখানে সকল moves new array বানায় store করে থাকে, তো এইটার last index টা latest হওয়াতে ওইটা নিয়েই কাজ করব
  const currentMove = Boardsquare[curentPositionAfterHistoryClick];

  function handlePlay(copySquare) {
    // Board Setstate গুলা maintain করা হইছে
    setNext(!isNext);
    const goingback = [ 
      ...Boardsquare.slice(0, curentPositionAfterHistoryClick +1),
      copySquare,
    ];
    setBoardSquare(goingback);

    setCurentPositionAfterHistoryClick(goingback.length - 1);
  }

  function handleHistory(idx) {
    // History Setstate গুালা maintain করা হইছে
    setCurentPositionAfterHistoryClick(idx); //
    setNext(idx % 2 == 0);
  }

  // game rule মোতাবেক যে বিজয়ী...
  const winner = calculateWinner(currentMove);

  // footer এর জন্য
  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next player is ${isNext ? "X" : "O"}`;
  }

  return (
    <main className="w-100 font-Orbitron h-screen text-5xl font-bold container m-auto">
      {/* Game title */}
      <h1 className="text-center  mb-2">Tic Tac Toe Game</h1>
      <hr className="w-1/2 m-auto" />

      {/* Header portion */}
      <div className="flex justify-between  mt-10">
        <h3>
          Player : <span>RAKIB</span>
        </h3>
        <h3>VS</h3>
        <h3>
          Player : <span>PC</span>
        </h3>
      </div>

      <div className="flex justify-between items-center mt-8">
        {/* Plag ground */}
        <div className="border p-10 bg-radial rounded-[40px]  ">
          <div className="p-4 rounded-3xl shadow-both">
            <Board
              square={currentMove}
              isNext={isNext}
              changeCollector={handlePlay}
              winner={winner}
            />
          </div>
        </div>

        {/* History board */}
        <div className="border p-2 bg-radial rounded-xl">
          <div className="border-2 p-4 rounded-b-3xl">
            <BackHistory
              Boardsquare={Boardsquare}
              curentPositionAfterHistoryClick={curentPositionAfterHistoryClick}
              changeCollector={handleHistory}
            />
          </div>
        </div>
      </div>

      <footer className="text-center mt-5">{status}</footer>
    </main>
  );
};

export default Game;

//✅ game rule
function calculateWinner(currentMove) {
  const allPossibleMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // এখানে আমরা Map method use করি নাই কারণ map কোন expression true হলে break করে চলে আসে না, শেষ element পর্যন্ত যায় ... কিন্তু for loop তেমনাটা করে না...
  for (let index = 0; index < allPossibleMoves.length; index++) {
    const [a, b, c] = allPossibleMoves[index];

    // মূল ‍উদ্দেশ্য় : ‍square নামে যে array আসতেছে ্ওইটার index 1 ; 1 = 2; 1 = 3  ৩ টা same হচ্ছে নাকি...
    if (
      currentMove[a] &&
      currentMove[a] === currentMove[b] &&
      currentMove[a] === currentMove[c]
    ) {
      return currentMove[a];
    }
  }

  return null;
}
