import './Box.css'

function Clear(props){
    return(
        <div className='box_container'>
            <button className='box_button' onClick={props.clearList}> Clear </button>
        </div>
    );
}

export default Clear;