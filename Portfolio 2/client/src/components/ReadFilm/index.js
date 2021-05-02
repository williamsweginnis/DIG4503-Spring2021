import Axios from 'axios';
import {useState} from 'react';

function ReadFilm() {

const[rank, setRank] = useState("");   
const[stock, setStock] = useState("");    
const[company, setCompany] = useState("");
const[rating, setRating] = useState("");

    const getFilm = async() => {
        const response = await Axios.get("http://localhost:45040/stock/" + rank, {
            stock:  stock,
            company: company,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="read"><h3>Read your favorite Film Stock</h3>
          
            <input 
            type = "text" 
            placeholder="Film Stock" 
            value={stock} 
            onChange={(event) => setStock(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Company" 
            value={company} 
            onChange={(event) => setCompany(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Rating " 
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            />
           <br></br>
            <button onClick = {() => {getFilm()}}>Read Film Stock</button>
            {
            <p> Read: {rank} {stock} {company} {rating}</p>
        }
        </div>
    );
}
export default ReadFilm;