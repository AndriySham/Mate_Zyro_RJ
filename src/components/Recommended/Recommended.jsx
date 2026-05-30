import './Recommended.css';
import portableSpeaker from '../../assets/Recomended-1.png';
import flexBluetoothSpeaker from '../../assets/Recomended-2.png';
import bluetoothSpeaker from '../../assets/Recomended-3.png';

import ProductCard from './ProductCard';

const products = [
  {
    image: portableSpeaker,
    title: "Zyro portable Smart speaker",
    description: "Smart home",
    price: "$ 399.00"
  },
  {
    image: flexBluetoothSpeaker,
    title: "SoundLink Flex Bluetooth speaker",
    description: "Portable bluetooth",
    price: "$ 149.00"
  },
  {
    image: bluetoothSpeaker,
    title: "SoundLink Color Bluetooth speaker II",
    description: "Portable bluetooth",
    price: "$ 129.00"
  },
];

function Recommended() {
  return(
    <section className="recommended">
      <div className="container">
        <div className="recommended__title">Recommended</div>
        <div className="recommended__list">
          {products.map((item) => (
            <ProductCard key={item.title} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommended;