// import React, { useState } from 'react';
// import '../App.css';

// const Players = () => {
    
//     let [Display, setDisplay] = useState(true);
    
//     return (
//         <div className={"container1 text-center mt-5"  + (Display === true ? "" : " d-none")}>
//             <h3 className="pt-5">Choose your weapon</h3>
//             <form className="mt-4">
//                 <div className="row">
//                     <div className="col ml-3">
//                         <input type="text" className="form-control" placeholder="First Player" />
//                     </div>
//                     <div className="col mr-3">
//                         <input type="text" className="form-control" placeholder="Second Player" />
//                     </div>
//                 </div>
//             </form>
//             <div className="d-flex justify-content-center mt-5">
//                 <div className="anchors mr-5 d-flex justify-content-center align-content-center" onClick={(e) => { setDisplay(Display = false)}}>
//                     <button className="buttons1" type="button">X</button>
//                 </div>
//                 <div className="anchors d-flex justify-content-center align-content-center">
//                     <button className="buttons2" type="button">O</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Players;