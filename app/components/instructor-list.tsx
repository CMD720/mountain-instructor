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
            tel: 723,
            type: 1,
            person: 3,
            link: "https://web.telegram.org/a/#901611649"
        },
        {
            id: 2,
            name: "Дарья",
            tel: 79824354068,
            type: 1,
            person: 3,
            link: "https://t.me/UAZ_Today"
        },
        {
            id: 3,
            name: "Эдуард",
            tel: 79048460441,
            type: 1,
            person: 3,
            link: "https://t.me/AntonH59"
        },
        {
            id: 4,
            name: "Егор",
            tel: 723,
            type: 1,
            person: 2,
            link: "https://t.me/a/#901611649"
        },
        {
            id: 5,
            name: "Дмитрий",
            tel: 79124814255,
            type: 2,
            person: 2,
            link: "https://t.me/#901611649"
        },
        {
            id: 6,
            name: "Сергей",
            tel: 79028330830,
            type: 2,
            person: 3,
            link: "https://web.telegram.org/a/#901611649"
        },
        {
            id: 7,
            name: "Антон",
            tel: 79024722533,
            type: 2,
            person: 3,
            link: "https://web.telegram.org/a/#901611649"
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
            {
                ski_man && <div className="list">
                    {skiCart}
                </div>
            }

            {
                board_man && <div className="list">
                    {boardCart}
                </div>
            }
            <img className={board_man ? "equipment_logo active_board" : "equipment_logo"}
                 src="/board.svg"
                 alt="Board logo"
                 onClick={() => onClickBoard()}
            />
        </div>

    );
};

export default InstructorList;