import { FC } from 'react';
import Board from './Board/Board';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>{name}!</h1>
      <Board/>
    </div>
  );
};
