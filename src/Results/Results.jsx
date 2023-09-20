import './Results.css'

function Results(props) {
    var show = false;
    if (props.showPage > 0) {
        show = true;
    }
    if (show) {
        return (
            <div className='results-page'>
                <h2>Results</h2>
                {(props.showPage === 1) ? <p>Congrats you got it</p> : <p>Sorry not today</p>}
                {(props.showPage === 2) && <p>The word was {props.correctWord} </p>}
                <p>See you tommorrow!</p>
            </div>)
    } else{
        return('');
    };
}

export default Results;