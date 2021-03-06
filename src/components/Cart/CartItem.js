import React from 'react';

import '../../App.css';
 

export default function CartItem({item,value}) {

  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;

  return (
    <div>
      <div className="row my-2 text-capitalize text-center" >

        <div className="col-10 mx-auto col-lg-2" id="cart-Item">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            alt="product"
            className="img-fluid"
          />
        </div>

        <div className="col-10 mx-auto col-lg-2" id="cart-Item">
          <span className="d-lg-none">produto: </span>
          {title}
        </div>

        <div className="col-10 mx-auto col-lg-2" id="cart-Item">
          <span className="d-lg-none">preço: </span>
          {price}
        </div>

        <div className="col-10 mx-auto col-lg-2" id="cart-Item">
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
              <div>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => decrement(id)}
                >
                  -
                </span>
              </div>

              <div>
                <span className="btn btn-black mx-1">{count}</span>
              </div>

              <div>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => increment(id)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2" id="cart-Item">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2" id="cart-Item" >
          <div className="align-self-auto">
          <strong>total item: $ {total}</strong>
          <hr className="d-block d-sm-none" />          
          </div>          
        </div>
        
      </div>
      <hr className="d-none d-sm-block" />
    </div>
  );
}