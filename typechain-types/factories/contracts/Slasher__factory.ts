/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Slasher, SlasherInterface } from "../../contracts/Slasher";

const _abi = [
  {
    inputs: [],
    name: "backendAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "backendVault",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rechargeVault",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "registerBackend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeBackend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Slasher__factory {
  static readonly abi = _abi;
  static createInterface(): SlasherInterface {
    return new Interface(_abi) as SlasherInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Slasher {
    return new Contract(address, _abi, runner) as unknown as Slasher;
  }
}
