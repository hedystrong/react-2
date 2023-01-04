import Button from "./Button"
const Tech = ({techs}) => {
    return(
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
        ))}
        </ul>
    );
};

const UserCard = ({img, firstname, lastname}) => {
    return (
        <div>
            <img src={img} alt="user" width={150} />
            <h4>
                {firstname} {lastname}
            </h4>
        </div>
    );
};



export default function Main ({user, techs, greetPeople, showDate}) {
    const userInfo ={
        ...user,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHvlLfc2Q3HZZ65c3SNUaGXFzO7xD3pyZC_eYSXNgaQ&s",
    };

    let imgPa = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHvlLfc2Q3HZZ65c3SNUaGXFzO7xD3pyZC_eYSXNgaQ&s";

    const users = [
        {
            img: imgPa,
            firstname: "Bold",
            lastname:"Dulam",
        },
        {img: imgPa, firstname: "Gan", lastname:"Lkham"},
        {img: imgPa, firstname: "Sukh", lastname:"Khorloo"},
        {img: imgPa, firstname: "Alagaa", lastname:"Adyaa"},
        {img: imgPa, firstname: "Nyamkaa", lastname:"Kolor"},
];  


    return(
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs}/>
                <UserCard {...userInfo}/>
                {users.map((userInfo) =>{
                    return <UserCard {...userInfo}/>
                })}
                <Button text= "Greet People" status ={true} func={greetPeople}/>
                <Button text = "Show Date" status={false} func={showDate}/>
            </div>
        </div>
    );
}