import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem, addPrice } from "../utils/cartSlice";

const MenuItems = ({ index, list, showItems, setShowIndex }) => {
  const handleCollaps = () => {
    showItems === true ? setShowIndex(0) : setShowIndex(1);
  };
  const dispatch = useDispatch();
  const handleAddItem = (id, name, price) => {
    dispatch(
      addItem({
        itemId: id,
        itemName: name,
        itemPrice: price,
      })
    );
  };

  return (
    <div className="res-item-content">
      <div className="menu-title-wrap" onClick={handleCollaps}>
        <h3 className="menu-title">
          {list.title} ({list.itemCards.length})
        </h3>

        <span>{showItems === true ? "🔼" : "🔽"}</span>
      </div>
      0
      {showItems && (
        <div className="menu-lists">
          {list.itemCards.map((item) => (
            <div key={item?.card?.info?.id} className="menu-items">
              <div className="menu-details">
                <h3>{item?.card?.info.name}</h3>
                <p>Rs.{item?.card?.info?.price / 100}</p>
                <p>{item?.card?.info?.description}</p>
              </div>
              <div className="item-img-btn">
                <img
                  className="item-img"
                  src={
                    item?.card?.info?.imageId
                      ? IMG_CDN_URL + item?.card?.info?.imageId
                      : ""
                  }
                  alt={"no image"}
                />
                <button
                  className="img-btn"
                  onClick={() =>
                    handleAddItem(
                      item?.card?.info.id,
                      item?.card?.info.name,
                      item?.card?.info.price ? item?.card?.info.price / 100 : 0
                    )
                  }
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
