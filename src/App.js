import Transaction from "./components/Transaction";
import './App.css'
import React from 'react';
const design = {color:"red", textAlign:"center", fontSize:"1.5rem"}
// const design2 = {color:"green", textAlign:"center", fontSize:'1.0rem'}

const Title=()=><h1 style={design}>ແອບບັນຊີລາຍຮັບ-ລາຍຈ່າຍ</h1>
// const Description = ()=><p style={design2}>ບັນທຶກຂໍ້ມູນບັນຊີໃນແຕ່ລະມື້ຂອງທ່ານ</p>

// const Item = ()=>{
//   return(
//     <li>ຄ່າທີພັກ <span>-200,000</span></li>
//   );
// }

// const Transection = ()=>{
//   return(
//     <ul>
//         <Item/>
//         {/* <li>ເງິນເດືອນ <span>+20,000</span></li>
//         <li>ຄ່າອາຫານ <span>-500</span></li> */}
//     </ul>
//   );
// }

function App() {
  return (
    <div className="container">
      <Title/>
      <Transaction/>
    </div>
  );
}

export default App;
