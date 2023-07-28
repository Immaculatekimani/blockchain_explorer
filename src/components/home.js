import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { formatEther } from "ethers/lib/utils";
import { Link } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
   
  // In this week's lessons we used ethers.js. Here we are using the
  // Alchemy SDK is an umbrella library with several different packages.
  // You can read more about the packages here:
  //   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

export function Home(){
    const [latestBlocks, setLatestBlocks] = useState();
    const [blockNumber, setBlockNumber] = useState();
    const [latestTransactions, setLatestTransactions] = useState();

    useEffect(() => {
        let blockArray = [];
        let transactionArray = [];
        const getLatestBlocks = async () => {
          const blockNumber = await alchemy.core.getBlockNumber()
          setBlockNumber(blockNumber);
          for (let i = 0; i < 15; i++){
            const block = await alchemy.core.getBlock(blockNumber - i);
            blockArray.push(block);
          }
          setLatestBlocks(blockArray);
          console.log("latest block: ", latestBlocks);
        }

        const getLatestTransactions = async () => {
            const lastBlock = await alchemy.core.getBlockWithTransactions(blockNumber);
            for (let i = 0; i < 15; i++){
                transactionArray.push(lastBlock.transactions[i]);
            }
            setLatestTransactions(transactionArray);
            console.log("latest transactions: ", latestTransactions);
        }
    
        getLatestBlocks();
        getLatestTransactions();

    }, []);
}