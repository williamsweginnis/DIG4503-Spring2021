import Axios from 'axios';
import {useState} from 'react';

function CreateFilm() {
const[rank, setRank] = useState("");   
const[stock, setStock] = useState("");    
const[company, setCompany] = useState("");
const[rating, setrating] = useState("");

    const putStock = async() => {
        const response = await Axios.put("http://localhost:45040/stock/" + rank, {
            stock:  stock,
            company: company,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="insert"><h3>Enter your favorite film stock</h3>
          
            <input 
            type = "text" 
            placeholder="Film Stock" 
            value={stock} 
            onChange={(event) => setStock(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Film Company" 
            value={company} 
            onChange={(event) => setCompany(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Rating" 
            value={rating} 
            onChange={(event) => setrating(event.target.value)}
            />
            <br></br>
            <button onClick = {() => {putStock()}}>Insert Film Stock</button>
        {
            <p> Created: {rank} {stock} {company} {rating}</p>
        }  
       </div> 
    );
}
export default CreateFilm;