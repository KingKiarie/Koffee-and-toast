import "../styles/styles.scss";

export default function BentoView() {
  return (
    <>
      <section className="bento">
        {/* <div className="bento-content">
          <h1>Enjoy our services</h1>
          <p>
            WELCOME TO KOFFEE AND TOAST WHERE COFFEE ISN'T JUST A BEVERAGE BUT A
            MEMORY THAT CRAFTS THE WAY YOU LIVE. <br />
            FROM BEAN TO CUP, WE'RE DEDICATED TO DELIVERING EXCELLENCE IN EVERY
            SIP. JOIN US ON A JOURNEY OF FLAVOUR AND QUALITY. CRAFTED WITH LOVE
            FOR THE ULTIMATE COFFEE EXPERIENCE.
          </p>
          <div>
            <button>Order Now</button>
          </div>
        </div> */}
        <div className="bento-container">
          <div className="grid">
            <div className="grid-item">
              <img src="/coldbrew.jpg" alt="Coffee" />
            </div>
            <div className="grid-item">
              <img src="/tea.jpg" alt="Espresso" />
            </div>
            <div className="grid-item">
              <img src="/bread.jpeg" alt="Cold brew" />
            </div>
            <div className="grid-item">
              <img src="/cups.jpeg" alt="Cakes and treats" />
            </div>
            <div className="grid-item">
              <img src="/order.jpeg" alt="Latte art" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
