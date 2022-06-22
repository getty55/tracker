import './Meter.css';

const Meter = props => {
    let barPercentage = '0%';
    if (props.max > 0) barPercentage = Math.round((props.monthly / props.max) * 100) + '%';

    return (
        <div className='meter'>
            <div className='bar'>
                <div
                    className='percentage'
                    style={{ height: barPercentage }}></div>
            </div>
            <label>{props.month.slice(0, 3) + ' '}</label>
        </div>
    );
};

export default Meter;