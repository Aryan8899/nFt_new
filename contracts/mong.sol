// SPDX-License-Identifier: MIT
pragma solidity ;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Ticket is ERC721 {
    struct Details {
        string eventname;
        string date;
        string location;
        string tickettype;
        string seatnumber;
        string additonal_info;
        string ipfs;
    }
    mapping(uint => Details) public _token;

    constructor() ERC721("ticketsnft", "TKN") {}

    function transfer(
        address to,
        uint tokenId,
        string memory evm,
        string memory dat,
        string memory loc,
        string memory tic,
        string memory seatnum,
        string memory addinfo,
        string memory ipfsno
    ) external {
        _mint(to, tokenId);
        _token[tokenId] = Details(evm, dat, loc, tic, seatnum, addinfo, ipfsno);
    }
    // Function to get IPFS hash of metadata for a given token ID
    function getTokenIPFSHash(
        uint256 tokenId
    ) external view returns (string memory) {
        return _token[tokenId].ipfs;
    }
}
