import {loading} from '../assets';

const Loading = () =>{
    return( 
    <div className="loading-container">
    <img src={loading} alt="loading" className="loading-gif"/>
    </div>
    )
}

export default Loading