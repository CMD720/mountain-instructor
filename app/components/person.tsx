import React from 'react';
// import Link from "next/link";

type TInstructor = {
    name: string,
    tel: number,
    type: number,
    person: number,
    link: string
}

const Person = (data: TInstructor) => {
    // const data1 = [
    //     {
    //         id: 1,
    //         name:"Андрей",
    //         tel:123,
    //         type:1,
    //         person:3
    //     },
    //     {
    //         id: 2,
    //         name: "Дарья",
    //         tel: 89824354068,
    //         type: 1,
    //         person: 3
    //     },
    //     {
    //         id: 3,
    //         name:"Эдуард",
    //         tel:89048460441,
    //         type:1,
    //         person:3
    //     },
    //     {
    //         id: 4,
    //         name:"Егор",
    //         tel:123,
    //         type:1,
    //         person:2
    //     },
    //     {
    //         id: 5,
    //         name:"Дмитрий",
    //         tel:89124814255,
    //         type:2,
    //         person:2
    //     },
    //     {
    //         id: 6,
    //         name:"Сергей",
    //         tel:89028330830,
    //         type:2,
    //         person:3
    //     },
    //     {
    //         id: 7,
    //         name:"Антон",
    //         tel:89024722533,
    //         type:2,
    //         person:3
    //     }
    // ]

    return (
        <div className="person_wrapper">
            <div>
                {data.name}
            </div>
            <div>
                <img className="people" src="/Man.svg" alt="man"/>
                <img className="people" src="/Woman.svg" alt="woman"/>
                <img className="people" src="/Children.svg" alt="child"/>
            </div>
            <div>
                <a href={`tel: +${data.tel}`}>
                    <img className="social_icon" src="/icons8-phone100.svg" alt="phone"/>
                </a>
                <a href={data.link}>
                    <img className="social_icon" src="/Telegram_black.svg" alt="telegram"/>
                </a>
            </div>
        </div>
    );
};

export default Person;