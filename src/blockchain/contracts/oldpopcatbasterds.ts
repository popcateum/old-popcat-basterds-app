/* eslint-disable @typescript-eslint/no-explicit-any */
import { provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import ERC721AbiJSON from '../abi/OldPopcatBasterds.json';

const opbCA = '0x1eCD1fF79f1cb30e2E9c71103c5163374584c6f5';
const opbABI: any = ERC721AbiJSON;
const rpcProvider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

async function balanceOf(address: string) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const balance = await opb.balanceOf(address);
  return parseInt(`${balance}`, 10);
}

async function tokenOfOwnerByIndex(owner: string, index: number) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const token = await opb.tokenOfOwnerByIndex(owner, index);
  return token;
}

async function tokenURI(tokenId: string) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const uri = await opb.tokenURI(tokenId);
  return uri;
}

async function totalSupply() {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, rpcProvider);
  const total = await opb.totalSupply();
  return parseInt(`${total}`, 10);
}

export {
  balanceOf, tokenOfOwnerByIndex, tokenURI, totalSupply
}