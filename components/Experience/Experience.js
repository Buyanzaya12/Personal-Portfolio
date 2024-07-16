
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Nov 2021",
        endDate: "Present",
    },
    {
        listItems: ["Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Jul 2017",
        endDate: "Oct 2021",
    },
    {
        listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        startDate: "Dec 2015",
        endDate: "May 2017",
    }
];

export function Experience() {
    return (
        <div className="m-auto justify-center bg-slate-900 py-5">
            <div className="bg-gray-700 text-sm p-1 rounded-xl w-[115px] m-auto text-center">Experience</div>
            <div className="text-center">Here is a quick summary of my most recent experiences:</div>
    
            {experiences.map((experience, index) => (
                <div key={index}>
                    <ExperienceCard
                        title={experience.title}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        listItems={experience.listItems}
                    />
                </div>
            ))}
        </div>
    );
}
