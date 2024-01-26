const CoffeeTags = ({ coffee }) => {
  return (
    <div className="flex item-center justify-center gap-[4px]">
      {coffee.tag.length < 2 ? (
        <span className="tag ">{coffee.tag[0]}</span>
      ) : (
        <>
          <span className="tag ">{coffee.tag[0]}</span>
          <span className="tag ">{coffee.tag[1]}</span>
        </>
      )}
    </div>
  );
};

export default CoffeeTags;
