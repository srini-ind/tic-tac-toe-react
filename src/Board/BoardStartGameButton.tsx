export default function BoardStartGameButton({
  winnerData,
  historyData,
  onClick,
}) {
  const boardisNotEmpty = historyData.some((item) => item === null);
  if (winnerData || !boardisNotEmpty) {
    return <button className="start-button" onClick={onClick}>Start Game</button>;
  }
}