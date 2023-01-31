import {
  faCloud,
  faWater,
  faShip,
  faFishFins,
} from '@fortawesome/free-solid-svg-icons';
import MainProdList from './MainProdList';

export default function AppMainProdLists() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 text-center md:justify-start">
      <MainProdList
        productName="Today"
        productIcon={faCloud}
        productLink="/"
      />
      <MainProdList
        productName="GIF"
        productIcon={faWater}
        productLink="/"
      />
      <MainProdList
        productName="Monthly-1"
        productIcon={faShip}
        productLink="/"
      />
      <MainProdList
        productName="Anomaly"
        productIcon={faFishFins}
        productLink="/"
      />
    </ul>
  );
}
