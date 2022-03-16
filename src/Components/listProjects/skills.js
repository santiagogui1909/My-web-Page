const Skills = ({skillId}) => {
    const skills = ["HTML" , "Css" , "Js" , "React", "Redux"];

    let skillUsed;

    if (skillId === 1 || skillId === 2) {
        skillUsed = skills.filter(value => value === "React" || value === "Redux");
    } else if (skillId === 3 || skillId === 4) {
        skillUsed = skills.filter(value => value === "React");
    } else {
        skillUsed = skills.filter(value => value !== "React" && value !== "Redux");
    }

    return (
        <div className="containerSkills">
        {skillUsed.map(e => 
            <div className="box-skills">
                <p key={e.key}>{e}</p>
            </div>
        )}
        </div>
    );
};

export default Skills;