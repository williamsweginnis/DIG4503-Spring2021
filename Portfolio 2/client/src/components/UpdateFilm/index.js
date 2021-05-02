import Axios from 'axios';
import {useState} from 'react';

function UpdateFilm() {

const[rank, setRank] = useState("");   
const[stock, setStock] = useState("");    
const[company, setCompany] = useState("");
const[rating, setRating] = useState("");

    const patchFilm = async() => {
        const response = await Axios.patch("http://localhost:45040/stock/" + rank, {
            stock:  stock,
            sompany: company,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="update"><h3>Update your favorite Film Stock</h3>
            
   
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
            <button onClick = {() => {patchFilm()}}>Update Film Stock</button>
            {
            <p> Updated: {rank} {stock} {company} {rating}</p>
        }
        </div>
    );
}
export default UpdateFilm;