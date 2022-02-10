import Transection from "./components/Transaction";

const Title=()=><h1>ໂປຣແກຣມບັນຊີລາຍຮັບ-ລາຍຈ່າຍ</h1>
const Description = ()=><p>ບັນທຶກຂໍ້ມູນບັນຊີໃນແຕ່ລະມື້ຂອງທ່ານ</p>

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
    <div>
      <Title/>
      <Description/>
      <Transection/>
    </div>
  );
}

export default App;
