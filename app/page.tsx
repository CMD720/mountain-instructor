// import Image from "next/image";
import InstructorList from "@/app/components/instructor-list";

export default function Home() {
    return (
        <div className="main_area">
            <InstructorList/>
        </div>
    );
}

// <div className="body_wrapper">
//     <div className="equipment_wrapper_ski">
//         <img className="equipment"
//              src="/ski.svg"
//              alt="SKI logo"
//         />
//     </div>
//     <div className="instructor">
//         <h2>Instructors:</h2>
//         <p>1 - Yurii Boika</p>
//         <p>2 - Jan Cloud Van Damm</p>
//         <p>3 - Tyson</p>
//     </div>
//     <div className="equipment_wrapper_board">
//         <img
//             className="equipment"
//             src="/board.svg"
//             alt="Board logo"
//         />
//     </div>
// </div>