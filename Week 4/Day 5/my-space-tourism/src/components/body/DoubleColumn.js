import './DoubleColumn.css';

export default function DoubleColumn({column1, column2}) {
    return (
        <div className='wrapper'>
            <div className='row'>
                <div className='column'>
                    {column1}
                </div>
                <div className='column'>
                    {column2}
                </div>
            </div>
        </div>
    );
}