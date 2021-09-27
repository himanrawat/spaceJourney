import React from "react";
import { useCart } from "react-use-cart";

const CartItem = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h3 className="text-center">Choose Travel Packages</h3>;
  return (
    <div className=" container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h4>
            Packages ({totalUniqueItems}) total Items: ({totalItems})
          </h4>
          <table className="table">
            <thead>
              <tr style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                <td>Package</td>
                <td>Price</td>
                <td>Items</td>
              </tr>
            </thead>
            <tbody>
              {items.map((item, ind) => {
                return (
                  <>
                    <tr key={ind}>
                      <td>
                        <img src={item.img} style={{ width: "6rem" }} alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td>{item.title}</td>
                      <td> &#8377; {item.price}</td>
                      <td>Item: {item.quantity}</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          className="btn-cart "
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn-cart mx-3"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger "
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto text-center">
          <h4>Total price: &#8377; {cartTotal}</h4>
        </div>
        <div className="col-auto text-center">
          <button className="btn btn-danger" onClick={() => emptyCart()}>
            Clear Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
