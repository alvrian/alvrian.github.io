import Dino from "./assets/Dino-gray.png"

export default function Other () {
    return (
        <div style={{height: "95vh",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1>Page not found</h1>
            <img src = {Dino} alt = "..." style = {{width: "180px"}}/>
            <div style={{width: "200px", margin: "10px"}}>
                <a href="/" style={{textDecoration: "none"}}>
                    <div style = {{padding: "5px 10px", backgroundColor: "#00275a", borderRadius: '12px', color: 'white', textAlign: "center", fontWeight: "bold"}}>
                        <p>Back to Main Page</p>
                    </div>
                </a>
            </div>
        </div>
    );
}