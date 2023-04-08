import { useEffect, useState } from "react";
import styled from "styled-components";

const SIZE = 7;

const Grid = styled.div`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(${SIZE}, 120px);
  grid-template-rows: repeat(${SIZE}, 120px);
`;

const Cell = styled.div`
  ${({ bgColor, isStart, isFinish, isPath }) => `
    background-color: ${
      isStart
        ? "green"
        : isFinish
        ? "blue"
        : isPath
        ? "darkorange"
        : bgColor || "white"
    };
    border: 2px solid black;
  `}
`;

const Button = styled.button`
  margin: 1em auto;
  min-width: 200px;
  font-size: 2em;
  padding: 0 0.5em;
  display: block;
`;

export default function Home() {
  const [board, setMap] = useState([[]]);
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const [path, setPath] = useState([]);

  const onReset = () => {
    setStart();
    setFinish();
    setPath([]);
    setMap(generateMap(SIZE));
  };

  const handleCellClicked = (id) => {
    if (!start) {
      setStart(id);
    } else if (!finish && id !== start) {
      setFinish(id);
    } else {
      console.error(`start and finish already defined, or the same`);
    }
  };

  useEffect(() => {
    setMap(generateMap(SIZE));
  }, []);

  const search = async () => {
    const visited = { [start]: true };
    let current = start;
    const prevMap = {};
    const toVisit = [];

    while (current) {
      await new Promise((res) => {
        setTimeout(() => res(setPath([current])), 300);
      });

      for (let next of getNeighbours(current)) {
        if (!visited[next]) {
          visited[next] = true;
          toVisit.push(next);
          prevMap[next] = current;
        }

        if (next === finish) {
          return setPath(recreatePath(prevMap));
        }
      }

      current = toVisit.shift(); // pop - dfs, shift - bfs
    }

    alert("not found");
  };

  const recreatePath = (prevMap) => {
    const res = [finish];
    let current = finish;

    while (current !== start) {
      res.unshift(prevMap[current]);
      current = prevMap[current];
    }
    return res;
  };

  const getNeighbours = (current) => {
    const [row, column] = current.split("-").map((it) => Number(it));
    const result = [];

    board[row][column + 1] && result.push(`${row}-${column + 1}`);
    board[row][column - 1] && result.push(`${row}-${column - 1}`);

    if (board[row - 1])
      board[row - 1][column] && result.push(`${row - 1}-${column}`);

    if (board[row + 1])
      board[row + 1][column] && result.push(`${row + 1}-${column}`);

    return result;
  };

  return (
    <>
      <Grid>
        {board.map((row, rowKey) =>
          row.map((cell, columnKey) => {
            const id = `${rowKey}-${columnKey}`;
            return (
              <Cell
                key={id}
                bgColor={cell ? "white" : "darkred"}
                onClick={() => handleCellClicked(id)}
                isStart={id === start}
                isFinish={id === finish}
                isPath={path.includes(id)}
              >
                {id}
              </Cell>
            );
          })
        )}
      </Grid>

      {start && finish && (
        <>
          <Button onClick={search}>Start</Button>
          <Button onClick={onReset}>Reset</Button>
        </>
      )}
    </>
  );
}

function generateMap(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push([]);
    for (let j = 0; j < size; j++) {
      arr[i][j] = Math.random() * 100 > 47 ? 1 : 0;
    }
  }
  return arr;
}
