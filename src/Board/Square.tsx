export default function Square({ onClick, children }) {
  return (
    <>
      <button
        onClick={onClick}
        className={children === 'X' ? 'red-text-content' : 'green-text-content'}
      >
        {children}
      </button>
    </>
  );
}
