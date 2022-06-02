/* eslint-disable @typescript-eslint/no-explicit-any */
import { signer, provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import SaleAbiJSON from '../abi/Sale.json';

const saleCA = '0x922B748430CaECE32eDD3a5A72096f32DE01BDB3';
const saleABI: any = SaleAbiJSON;
const rpcProvider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

async function mint(createdAt: number, hash: string, signature: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.mint(createdAt, hash, signature);
  await tx.wait();
}

function isMinted(address: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, rpcProvider);
  return sale.isMinted(address);
}

function getMintState() {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, rpcProvider);
  return sale.getMintState();
}

export {
  mint, isMinted, getMintState
}