import './Info.css';

function Info() {
  return(
    <section className="info">
      <div className="container info__container">
        <h2 className="info__title">Why buy direct from Zyro</h2>
        <div className="info__content"> 
          <ul className="info__list">
            <li className="info__list-item">Free 2-day shipping and returns</li>
            <li className="info__list-item">90-day risk-free trial</li>
            <li className="info__list-item">World class customer service</li>
            <li className="info__list-item">My Zyro account management</li>
          </ul>
          <p className="info__text">A great product is more than what’s in the box. It’s a promise of premium performance, world-class support, and everything you expect from a trusted brand. It’s just one of many reasons why you’ll shop with confidence on Zyro.com.</p>
        </div>
      </div>
    </section>
  );
}

export default Info;