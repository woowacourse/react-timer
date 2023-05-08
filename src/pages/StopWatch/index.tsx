import './index.css';

// TODO : Lap 폰트 칼러는 props로 넘겨주어야함.
// TODO : table header 간격 조정하기
const StopWatchPage = () => {
  return (
    <div className="stop-watch-page">
      <section className="stop-watch-time-display">
        <div className="hh-mm-ss">00:00:00</div>
        <div className="ms">0000</div>
      </section>
      <section className="stop-watch-button-container">
        <button type="button" className="stop-watch-start-button">
          시작
        </button>
        <button type="button" className="stop-watch-lap-button">
          랩
        </button>
      </section>
      <table className="lap-table">
        <thead>
          <tr className="lap-table-header">
            <th>랩</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <span className="lap-hh-mm-ss">00:11:12</span>
              <span className="lap-ms">3801</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StopWatchPage;
