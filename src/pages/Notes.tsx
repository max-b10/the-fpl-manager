import { useState, useEffect } from 'react';

function Notes() {
  const [puzzle, setPuzzle] = useState<number[][]>([]);

  useEffect(() => {
    const generatedPuzzle = generateSudoku();
    setPuzzle(generatedPuzzle);
  }, []);

  function generateSudoku(): number[][] {
    const puzzle: number[][] = [];
    // Generate an empty 9x9 grid
    for (let i = 0; i < 9; i++) {
      puzzle.push(Array(9).fill(0));
    }
    // Solve the puzzle using a backtracking algorithm
    solveSudoku(puzzle);
    // Remove some numbers to create the puzzle
    removeNumbers(puzzle);
    return puzzle;
  }

  function solveSudoku(puzzle: number[][]): boolean {
    // Find an empty cell
    const [row, col] = findEmptyCell(puzzle);
    // If there are no empty cells, the puzzle is solved
    if (row === -1 && col === -1) {
      return true;
    }
    // Try different numbers in the empty cell
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(puzzle, row, col, num)) {
        puzzle[row][col] = num;
        // Recursively solve the puzzle
        if (solveSudoku(puzzle)) {
          return true;
        }
        // If the current number doesn't lead to a solution, backtrack
        puzzle[row][col] = 0;
      }
    }
    // No valid number found, backtrack
    return false;
  }

  function findEmptyCell(puzzle: number[][]): [number, number] {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return [-1, -1];
  }

  function isValidMove(
    puzzle: number[][],
    row: number,
    col: number,
    num: number
  ): boolean {
    // Check if the number already exists in the same row
    for (let i = 0; i < 9; i++) {
      if (puzzle[row][i] === num) {
        return false;
      }
    }
    // Check if the number already exists in the same column
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][col] === num) {
        return false;
      }
    }
    // Check if the number already exists in the same 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[boxRow + i][boxCol + j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function removeNumbers(puzzle: number[][]): void {
    const numToRemove = Math.floor(Math.random() * 50) + 30;
    for (let i = 0; i < numToRemove; i++) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      while (puzzle[row][col] === 0) {
        row = Math.floor(Math.random() * 9);
        col = Math.floor(Math.random() * 9);
      }

      puzzle[row][col] = 0;
    }
  }

  return (
    <div>
      {puzzle.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <span key={colIndex}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Notes;
