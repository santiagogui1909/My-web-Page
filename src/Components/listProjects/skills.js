const Skills = ({skillId}) => {
    const skills = ["HTML" , "Css" , "Js" , "React"];

    let skillUsed;

    if (skillId === 1 || skillId === 3 || skillId === 4) {
        skillUsed = skills.filter(value => value === "React" || value === "Css");
    } else {
        skillUsed = skills.filter(value => value !== "React");
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