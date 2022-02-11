import React from 'react';
import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = ()=>{
  const data = [
    {title: "ຄ່າອາຫານ", amount:2000},
    {title: "ຄ່ານ້ຳມັນ", amount:2000},
    {title: "ຄ່າທີ່ພັກ", amount:3000},
    {title: "ເງິນເດືອນ", amount:50000},
    {title: "ຄ່າເດີນທາງ", amount:800}
  ]
    return(
      <ul className="item-list">
          {data.map((e)=>{
              return <Item {...e} key={uuidv4()}/>
          })}
      </ul>
    );
}
export default Transaction;