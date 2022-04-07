import React from "react";
import { DPIconCart, DPIconLike, DPIconLiked } from "../../assets/svg";
import {
  addToCart,
  removeFromCart,
  addToLiked,
  removeFromLiked
} from "../../Store/cart.actions";
import { connect } from "react-redux";

const ImageCard = ({ item, dispatch, cart }) => {

  const AddToCart = (itemSingle) => {
    dispatch(addToCart(itemSingle?.id));
  };

  const removeToCart = (itemSingle) => {
    dispatch(removeFromCart(itemSingle?.id));
  };

  const findInCart = cart?.cart?.find((items) => items?.id === item?.id);
  const liked = cart?.liked?.find((items) => items?.id === item?.id);
  const AddToLiked = (itemSingle) => {
    dispatch(addToLiked(itemSingle?.id));
  };
  const RemoveFromLiked = (itemSingle) => {
    dispatch(removeFromLiked(itemSingle?.id));
  };

  return (
    <div className="flex flex-col hover:brightness-75 cursor-pointer">
      <img src={item?.image} alt={item?.name} />
      <div className="flex flex-row justify-between items-center py-2">
        <div className="">
          <p className='text-lightBlack text-nameSize font-medium font-["Avenir"] leading-nameLine hover:text-2xl'>
            {item?.name}
          </p>
          <p className="text-faintGrey text-xl leading-amount font-normal">
            ${item?.amount}:00
          </p>
        </div>
        <div className=" flex flex-col gap-2 pr-2">
          {findInCart ? (
            <div
              className=" w-16 border-2 border-lightBlack border-opacity-50 rounded-full bg-lightBlack bg-opacity-50 flex justify-center items-center"
              onClick={() => removeToCart(item)}
            >
              <DPIconCart />
            </div>
          ) : (
            <div className="w-16 border-none border-lightBlack border-opacity-50  flex justify-center items-center" onClick={() => AddToCart(item)}>
              <DPIconCart />
            </div>
          )}

          <div
            className="flex items-center justify-center cursor-pointer"
            
          >
            {!liked ? (
              <DPIconLike onClick={()=>AddToLiked(item)}/>
            ) : (
              <div className="flex flex-row gap-2">
                {" "}
                <DPIconLiked onClick={() => RemoveFromLiked(item)}/>{" "}
                <span className="text-accessOrange font-medium text-sm">
                  Liked
                </span>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect((state) => ({
  cart: state?.cart_reducer,
}))(ImageCard);
