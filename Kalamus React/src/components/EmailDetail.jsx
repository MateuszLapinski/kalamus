

export default function EmailDetail({ email }){
    if (!email) return <div>Select an email to view its details</div>;

    return (
        <div className="email-detail-detail">
            <div className="email-detail-header">
                <h4>Subject: {email.subject}</h4>
                <div className="email-detail-meta">
                    <div>From: <strong>{email.sender}</strong></div>
                    <div>To: <strong>You</strong></div>
                    <div>Date: <strong>{email.date}</strong></div>
                </div>
            </div>
            <div className="line">
            </div>
            <div className="email-detail-body">
                <p>{email.body}</p>
            </div>
            {email.attachments && email.attachments.length > 0 && (
                <div className="email-detail-attachments">
                    <h5>Attachments:</h5>
                    <ul>
                        {email.attachments.map((attachment, index) => (
                            <li key={index}><a href="#">{attachment}</a></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
