const Square = ({ value, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-[#bcd6c9] w-16 h-20 text-4xl font-semibold p-2 px-4 rounded-md ring-4 ring-gray-700 focus-visible:outline-none"
    >
      {value}
    </button>
  );
};


const Board = ({ square, isNext, changeCollector,winner }) => {
   // ✅handelers
  function squareHandleClick(i) {
    // যদি square ভিতরে allready কিছু থাকে return করে দিবে OR calculateWinner এই func rule অনুযায় winner পাওয়া গেলে return করে দিবে...
    if (square[i] || winner) {
      return;
    }

    const copySquare = [...square];

    // toggle করা হয়েছে ...
    if (isNext) {
      copySquare[i] = "X";
    } else {
      copySquare[i] = "O";
    }
    
    // এই func সকল change একসাধে করে, variable একটায় store করে Parrent component কাছে নিয়ে যায় সেখানে ‍Set state call করে
    changeCollector(copySquare);
  }

  return (
    <>
      <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Square value={square[0]} handleClick={() => squareHandleClick(0)} />
        <Square value={square[1]} handleClick={() => squareHandleClick(1)} />
        <Square value={square[2]} handleClick={() => squareHandleClick(2)} />
      </div>
      <div className="flex space-x-4">
        <Square value={square[3]} handleClick={() => squareHandleClick(3)} />
        <Square value={square[4]} handleClick={() => squareHandleClick(4)} />
        <Square value={square[5]} handleClick={() => squareHandleClick(5)} />
      </div>
      <div className="flex space-x-4">
        <Square value={square[6]} handleClick={() => squareHandleClick(6)} />
        <Square value={square[7]} handleClick={() => squareHandleClick(7)} />
        <Square value={square[8]} handleClick={() => squareHandleClick(8)} />
      </div>
      </div>
    </>
  );
};

export default Board;
