let index = 0;
const BackHistory = ({ Boardsquare, curentPositionAfterHistoryClick, changeCollector }) => {
  
  function meakingLi(vlu, idx) {
    let describtion;

    // history li এর text তৈরি করতেছে...
    if (idx > 0) {
      describtion = `Got to the ${idx === 1 ? "next" : "#" + idx} Moves`;
    } else {
      describtion = `Make first Move`;
    }

    // li এর ভিতরের button click func
    function handleBack(idx) {
      changeCollector(idx);
    }

    return (
      <li className="text-xl font-normal list-disc" key={index++}>
        <button onClick={() => handleBack(idx)}>{describtion}</button>
      </li>
    );
  }

  return (
    <>
      <h1 className="text-2xl text-center">History Board</h1>
      <hr className="mb-4" />
      <ul className="ml-5">
        {Boardsquare.map((vlu, idx) => meakingLi(vlu, idx))}
      </ul>
    </>
  );
};

export default BackHistory;
