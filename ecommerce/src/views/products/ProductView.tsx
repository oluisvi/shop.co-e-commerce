/* eslint-disable @next/next/no-img-element */


function ProductView() {
  return (
    <>
      <section className="product-view">
        <article className="product-view-container">
          <article className="products-route-page">
            <p>
              Home{" "}
              <span>
                <img src="/assets/right-sight.svg" alt="" />
              </span>
            </p>
            <p>
              Shop{" "}
              <span>
                <img src="/assets/right-sight.svg" alt="" />
              </span>
            </p>
            <p>
              Men{" "}
              <span>
                <img src="/assets/right-sight.svg" alt="" />
              </span>
            </p>
            <p>T-shirts</p>
          </article>
          <article className="products-view-details">
            <article className="product-view-cards">
              <div className="product-front">
                <img src="/assets/one-life-shirt-front.png" alt="t-shirt" />
              </div>
              <div className="product-back">
                <img src="/assets/one-life-shirt-back.png" alt="t-shirt" />
              </div>
              <div className="product-model">
                <img
                  src="/assets/one-life-shirt-model.png"
                  alt="t-shirt-model"
                />
              </div>
              <div className="product-main">
                <img src="/assets/one-life-shirt-front.png" alt="t-shirt" />
                <article className="information-details">
                  <div className="product-name">
                    <p>ONE LIFE GRAPHIC T-SHIRT</p>
                  </div>
                  <div className="product-rating">
                    <img src="/assets/full-star.svg" alt="star" />
                    <img src="/assets/full-star.svg" alt="star" />
                    <img src="/assets/full-star.svg" alt="star" />
                    <img src="/assets/full-star.svg" alt="star" />
                    <span className="rating-score">4/5</span>
                  </div>
                  <div className="product-sale">
                    <div className="product-price">
                      <p>$212</p>
                    </div>
                    <div className="product-discount">$242</div>
                    <div className="discount-tag">-20%</div>
                  </div>
                  <div className="product-details-info">
                    <p>
                      This graphic t-shirt which is perfect for any occasion.
                      Crafted from a soft and breathable fabric, it offers
                      superior comfort and style.
                    </p>
                  </div>
                  <article className="product-view-info">
                    <article className="product-color-selection">
                      <p>Select Colors</p>
                      <div className="color-options">
                        <div className="color-circle-1">
                          <span className="checkmark">
                            <img src="/assets/check-selection" alt="" />
                          </span>
                        </div>
                        <div className="color-circle-2"></div>
                        <div className="color-circle-3"></div>
                      </div>
                    </article>

                    <article className="product-view-size">
                      <p>Choose size</p>
                      <div className="size-btn">
                        <div className="small-btn">
                          <button>Small</button>
                        </div>
                        <div className="medium-btn">
                          <button>Medium</button>
                        </div>
                        <div className="large-btn">
                          <button>Large</button>
                        </div>
                        <div className="x-large-btn">
                          <button>X-Large</button>
                        </div>
                      </div>
                    </article>
                    <article className="add-cart-buttons">
                        <button className="number-of-itens">
                            <p>
                                <span>-</span>1<span>+</span>
                            </p> 
                        </button>
                        <button className="add-to-cart">
                            <p>Add to Cart</p>
                        </button>
                    </article>
                  </article>
                </article>
              </div>
            </article>
          </article>
        </article>

        <article className="product-info-option">
          <div className="info-option">
            <div className="selection 1">
              <p>Product Details</p>
            </div>
            <div className="selection 2">
              <p>Rating & Reviews</p>
            </div>
            <div className="selection 3">
              <p>FAQs</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default ProductView;
