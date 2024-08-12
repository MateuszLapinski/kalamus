import Image from 'react-bootstrap/Image';
export default function AnotherCard({ title, children, srcimage, colorClass }) {
    return (

        <div className={`anotherCard ${colorClass}`} >
            <div className='innerCard innerCardLeft'>
                <Image src={srcimage} className="cardImage"/>
            </div>
            <div className='innerCard innerCardRight'>
                <h3>{title}</h3>
                <p> (current months)</p>
                <p className='cardValue'> {children}</p>
            </div>
        </div>
    );
}
