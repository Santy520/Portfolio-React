// import { Link } from 'react-router-dom';
// function Navigation() {


//     return (
//         <navigation>
//            <div className="img">
//  <Link className='img'img src="../assets/aXqYR1.png" alt="Banner-photo"></Link> 
//   <div className="text">
//     <h3>Eighty percent of success is showing up!</h3>
//   </div>
// </div>
//         </navigation>
//     )
// }

// export default Navigation

import image from "../assets/aXqYR1.png"

function Navigation() {
  return (
    <navigation>
      <div className="img">
      <img src={image} alt="Banner Image" className="image" />
        <div className="text">
          <h3>Eighty percent of success is showing up!</h3>
        </div>
      </div>
    </navigation>
  );
}

export default Navigation;
