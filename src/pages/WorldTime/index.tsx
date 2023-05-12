import LocalTime from '../../components/LocalTime';
import { DEFAULT_LOCATION } from '../../utils/constant';

const WorldTimePage = () => {
  return (
    <>
      <header>세계 시계</header>
      <div className="world-time-page">
        <LocalTime location={DEFAULT_LOCATION} needDate={true} />
        <LocalTime location="Asia/Tokyo" needDate={false} />
        <LocalTime location="Asia/Hong_Kong" needDate={false} />
      </div>
    </>
  );
};

export default WorldTimePage;
