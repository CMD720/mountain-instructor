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
                <a href={data.link} target="_blank">
                    <img className="social_icon" src="/Telegram_black.svg" alt="telegram"/>
                </a>
            </div>
        </div>
    );
};

export default Person;