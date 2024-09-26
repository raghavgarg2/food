import ItemCards from "./ItemCards";

const Accordian = ({ accordianInfo, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems);
  };

  const { title, itemCards } = accordianInfo?.card?.card;

  return (
    <div className="mb-1 pt-10 bg-gray-50 shadow-lg">
      <div onClick={handleClick} className="font-bold flex justify-between">
        <div>
          {title}({itemCards ? itemCards.length : 0})
        </div>
        <div>⬇️</div>
      </div>

      <div>{showItems && <ItemCards cardInfo={itemCards} />}</div>
    </div>
  );
};

export default Accordian;
