import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
<routes>
  <Route path="/" element={<Home />} />
  <Route path="/block/:id" element={<Block />} />
  <Route path="/transaction/:id" element={<Transaction />} />
  <Route path="/address/:id" element={<Address />} />
  <Route path="/blockTransactions/:id" element={<BlockTransactions />} />
</routes>
useEffect(()=>{
  let blockArray = [];
  let latestBlock = [];
  const getLatestBlock = async () =>{
    const blockNumber = alchemy.core.getBlockNumber();
    setBlockNumber(blockNumber);
    for(let i=0; i<=15;i++){
      let block = alchemy.core.getBlock(blockNumber -1);
      blockArray.push(block);
    }
    setLatestBlocks(blockArray);
    console.log("latest block: "+ latestBlock);
  }
  getLatestBlock();
}, [])
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

