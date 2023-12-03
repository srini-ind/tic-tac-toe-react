export default function BoardTitle({
  winnerData,
  historyData,
  xPlaysNextData,
}) {
    const boardisNotEmpty = historyData.some((item) => item === null);
    if (winnerData) {
        return <h2>Winner: {winnerData} 🥳</h2>;
    } else {
        if (!boardisNotEmpty) {
            return <h2>Match Tied</h2>;
        } else {
            return <h2>Next Player: {xPlaysNextData}</h2>;
        }
    }
}