const fs = require("fs");
const solc = require("solc");
const path = require("path");

const DEFAULT_ENCODING = "utf-8";

function findImports(relativePath) {
    const absolutePath = path.resolve(__dirname, "../", 'node_modules', relativePath);
    const source = fs.readFileSync(absolutePath, DEFAULT_ENCODING);

    return { contents: source };
}

const compile = (contractName, content, evmVersion = "istanbul") => {
    const contractOutput = solc.compile(JSON.stringify({
        language: "Solidity",
        sources: {
            [contractName]: {
                content
            }
        },
        settings: {
            // tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, london or paris
            evmVersion,
            outputSelection: {
                [contractName]: {
                    "*": ["*"],
                },
            },
        },
    }), {
        import: findImports
    });

    const contractOutputJson = JSON.parse(contractOutput);

    contractOutputJson.errors && contractOutputJson.errors.forEach(console.error);

    return { contractOutput, contractOutputJson };
}

const content = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ExampleToken is ERC20, ERC20Burnable, ERC20Pausable, Ownable {
    constructor(address initialOwner)
        ERC20("ExampleToken", "ETK")
        Ownable(initialOwner)
    {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, value);
    }
}

`;

// const x = compile("Example.sol", content);

// console.log(x);

module.exports = {
    content,
    compile
}

