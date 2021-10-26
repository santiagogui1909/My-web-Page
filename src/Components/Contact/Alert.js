
const Alert = ({ value , checkSubmit}) => {

    const alert = [];
    let text = "this field is correct";

    value.forEach(e => {
        if (e === "1" || e === "3" || e === "5") {
            alert.push("fill in this field");
        } else if (e === "2" || e === "4" || e === "6") {
            alert.push("this field is correct");
        }
    })

    return (
        <>
            <h3>Errors found <span className="icon-warning"></span></h3>
            {
                alert.map((a) =>
                    <p className="alerts" style={a === text ? { color: "green" } : { color: "red" }}><span className="icon-bell"></span>{a}</p>
                )
            }
        </>
    );
};

export default Alert;