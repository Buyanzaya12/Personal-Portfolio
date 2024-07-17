import React from 'react';
import Image from "next/image";

const WorkCard = ({ title, startDate, endDate, listItems }) => {
    console.log(listItems);
    return (
        <div className="m-5 bg-gray-700 grid grid-cols-2 rounded-lg p-12">
            <Image src="/PP-pics/Fiskil-project.jpg" width={480} height={384}/>
            <div className="grid grid-rows-4">
                <p>Fiskil</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </div>
            <ul className="list-disc ml-5">
                {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkCard;
