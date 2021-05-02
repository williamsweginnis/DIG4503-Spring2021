import Axios from 'axios';
import {useState} from 'react';

function DeleteFilm() {

const[rank, setRank] = useState("");   
const[stock, setStock] = useState("");    
const[company, setCompany] = useState("");
const[rating, setRating] = useState("");

    const deleteFilm = async() => {
        const response = await Axios.delete("http://localhost:45040/stock/" + rank, {
            stock:  stock,
            company: company,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="delete"><h3>Delete Film Stock</h3>
            
            <input 
            type = "text" 
            placeholder="Film stock" 
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
            placeholder="Rating" 
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            />
            <br></br>
            <button onClick = {() => {deleteFilm()}}>Delete Film Stock</button>
            {
            <p> Deleted: {rank} {stock} {company} {rating}</p>
        }
        </div>
    );
}
export default DeleteFilm;