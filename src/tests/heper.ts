import Web3 from 'web3'
import { compile } from '../utils/compile';
import { ST_STORAGE_FILENAME, ST_STORAGE_CONTRACT_NAME } from '../utils/contracts';

const url = "http://127.0.0.1:8881"
export const client = new Web3(url)

compile(ST_STORAGE_FILENAME, ST_STORAGE_CONTRACT_NAME)