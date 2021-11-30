// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.4.24;

contract TicTacToe {

    // addresses of the players that are competing
    address player1;
    address player2;

    // move counter
    uint256 current_move = 0;

    // states the box can take
    enum SquareState {Empty, X, O}
    SquareState[3][3] board;

    // CONSTRUCTOR
    constructor(address _player2) public {
        require(_player2 != 0x0);
        player1 = msg.sender;
        player2 = _player2;
    }

    // RETURN THE BOARD
    function returnBoard() public view returns (SquareState[3][3]) {
        return board;
    }


    // WINNER
    function winnerSquare() public view returns (SquareState) {
        // Rows
        if (
            board[0][0] != SquareState.Empty &&
            board[0][0] == board[0][1] &&
            board[0][0] == board[0][2]
        ) {
            return board[0][0];
        }

        if (
            board[1][0] != SquareState.Empty &&
            board[1][0] == board[1][1] &&
            board[1][0] == board[1][2]
        ) {
            return board[1][0];
        }

        if (
            board[2][0] != SquareState.Empty &&
            board[2][0] == board[2][1] &&
            board[2][0] == board[2][2]
        ) {
            return board[2][0];
        }

        // Columns
        if (
            board[0][0] != SquareState.Empty &&
            board[0][0] == board[1][0] &&
            board[0][0] == board[2][0]
        ) {
            return board[0][0];
        }

        if (
            board[0][1] != SquareState.Empty &&
            board[0][1] == board[1][1] &&
            board[0][1] == board[2][1]
        ) {
            return board[0][1];
        }

        if (
            board[0][2] != SquareState.Empty &&
            board[0][2] == board[1][2] &&
            board[0][2] == board[2][2]
        ) {
            return board[0][2];
        }

        return SquareState.Empty;
    }
    function winnerAddress() public view returns (address) {
        SquareState winning_square = winnerSquare();
        if (winning_square == SquareState.X) {
            return player2;
        } else if (winning_square == SquareState.O) {
            return player1;
        }
        return 0x0;
    }


    // HELPER FUNCTIONS FOR PERFORM MOVE
    function positionIsInBounds(uint256 xpos, uint256 ypos) private pure returns (bool) {
        return (xpos >= 0 && xpos < 3 && ypos >= 0 && ypos < 3);
    }
    function isGameOver() private view returns (bool) {
        // - if there is a draw. i.e. all squares are filled
        // - someone won
        return (winnerSquare() != SquareState.Empty || current_move > 9);
    }
    function currentPlayerAddress() public view returns (address) {
        if (current_move % 2 == 0) {
            return player2;
        } else {
            return player1;
        }
    }
    function currentPlayerShape() public view returns (SquareState) {
        if (current_move % 2 == 0) {
            return SquareState.X;
        } else {
            return SquareState.O;
        }
    }

    // Allows current player to make a move iff
    function performMove(uint256 xpos, uint256 ypos) public {
        // - they are player in the game
        require(msg.sender == player1 || msg.sender == player2, "they are not players in the game");

        // - the game is not over yet
        require(!isGameOver(), "the game is over");

        // - it is their turn
        require(msg.sender == currentPlayerAddress(), "it is not this address's turn");

        // - the given position is in bounds and still empty
        require(positionIsInBounds(xpos, ypos), "the given position is not in bounds");

        // - current position in the board is still empty
        require(board[xpos][ypos] == SquareState.Empty, "current position of the board is not empty");

        board[xpos][ypos] = currentPlayerShape();
        current_move = current_move + 1;
    }
}
