import eye from "../images/eye.svg";
import trash from "../images/trash.svg";

const ListedTitles = ({ titles, setTitles, open, setOpen }) => {
  const watch = (e) => {
    const target = e.target.parentElement.parentElement.title;
    console.log(target);
    setTitles((prev) => {
      //map tworzy nowy array
      return prev.map((el) => {
        if (el.title === target) {
          return { ...el, watched: !el.watched };
        }
        return el;
      });
    });
  };
  const usun = (e) => {
    console.log(e.target.parentElement);
    const target = e.target.parentElement.parentElement.title;
    setTitles((prev) => {
      return [...prev].filter((el) => {
        if (el.title === target) {
          return false;
        }
        return true;
      });
    });
  };
  const toggleOpen = (e) => {
    const target = e.target.textContent;
    if (open === target) {
      return setOpen(null);
    }
    setOpen(target);
  };
  return (
    <div id="white">
      <div className="listedTitles">
        {titles
          .sort((a, b) => a.watched - b.watched)
          .map(({ title, watched }, index) => (
            <div key={index} title={title} className={`tile ${watched ? "watched" : ""}`}>
              <div className={`icons ${open === title ? "open" : ""}`}>
                <img id="eye" src={eye} alt="" onClick={watch} />
                <img id="trash" src={trash} alt="" onClick={usun} />
              </div>
              <h1 className="big" onClick={toggleOpen}>
                {title}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListedTitles;
