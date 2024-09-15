import './GradationBack.css';

function GradationBack(props) {
    return (
        <div id="gradation">
            <div className='background-sentence'>
                <p>{props.value}</p>
            </div>
            <div className="box b1"></div>
            <div className="box b2"></div>
        </div>
    );
}
    
export default GradationBack;
