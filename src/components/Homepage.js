import Header from './Header';
import EstimateInfo from './EstimateInfo';

const Homepage = () =>{
    const saveInfoHandler = (collectedInfo) => {
        const newInfo ={
            ...collectedInfo,
            id: Math.random().toString()
        }
        console.log(newInfo)
    };
    return (
        
        <div>
            <Header/>
            <h1>Blah Blah Blah into testing</h1>
            <EstimateInfo onEnteredData={saveInfoHandler}/>
        </div>
    )
}

export default Homepage;