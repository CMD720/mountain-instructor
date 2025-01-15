'use client'

import React, {useState} from 'react';
import Person from "@/app/components/person";

type TInstructor = {
    name: string,
    tel: number,
    type: number,
    person: number,
    link: string
}

const InstructorList = () => {

    const [ski_man, setSkiMan] = useState(false)
    const [board_man, setBoardMan] = useState(false)

    const onClickSki = () => {
        setSkiMan(!ski_man)
        setBoardMan(false)
    }
    const onClickBoard = () => {
        setSkiMan(false)
        setBoardMan(!board_man)
    }

    const data = [
        {
            id: 1,
            name: "Андрей",
            tel: 79504466967,
            type: 1,
            person: 3,
            link: "https://t.me/+79504466967"
        },
        {
            id: 2,
            name: "Дарья",
            tel: 79824354068,
            type: 1,
            person: 3,
            link: " https://t.me/+79824354068"
        },
        {
            id: 3,
            name: "Эдуард",
            tel: 79048460441,
            type: 1,
            person: 3,
            link: "https://t.me/Edwardsim"
        },
        {
            id: 4,
            name: "Егор",
            tel: 79197182153,
            type: 1,
            person: 2,
            link: "https://t.me/Egor_inst"
        },
        {
            id: 5,
            name: "Дмитрий",
            tel: 79124814255,
            type: 2,
            person: 2,
            link: "https://t.me/+79124814255"
        },
        {
            id: 6,
            name: "Сергей",
            tel: 79028330830,
            type: 2,
            person: 3,
            link: "https://t.me/sergi_onboard"
        },
        {
            id: 7,
            name: "Антон",
            tel: 79960848414,
            type: 2,
            person: 3,
            link: "https://t.me/+79960848414"
        }
    ]

    const skiCart = data.filter(item => item.type == 1).map((item: TInstructor, index) => <Person {...item}
                                                                                                  key={index}/>)
    const boardCart = data.filter(item => item.type == 2).map((item: TInstructor, index) => <Person {...item}
                                                                                                    key={index}/>)

    return (
        <div className="equipment_wrapper">
            <img className={ski_man ? "equipment_logo active_ski" : "equipment_logo"}
                 src="/ski.svg"
                 alt="SKI logo"
                 onClick={() => onClickSki()}
            />
            {/*{*/}
            {/*    ski_man && <div className="list">*/}
            {/*        {skiCart}*/}
            {/*    </div>*/}
            {/*}*/}
            <div className={ski_man ? "list active_list" : "list"}>
                {ski_man && skiCart}
            </div>


            <div className={board_man ? "list active_list" : "list"}>
                {board_man && boardCart}
            </div>

            <img className={board_man ? "equipment_logo active_board" : "equipment_logo"}
                 src="/board.svg"
                 alt="Board logo"
                 onClick={() => onClickBoard()}
            />
        </div>

    );
};

export default InstructorList;