import SideButton from './sidebutton';

export default function SidePane() {
    return (
        <>
<<<<<<< HEAD
            <SideButton imagesrc="dashboard.png" linkto='/dashboard'>
=======
            <SideButton imagesrc="dashboard.png" linkto='/'>
>>>>>>> e400b66571f875118cadff1745a5451c1b8bc1b2
                Summary
            </SideButton>
            <SideButton imagesrc="calendar.png" linkto='/calendar'>
                Calendar
            </SideButton>
            <SideButton imagesrc="acquisition.png" linkto='/sale'>
                Sale
            </SideButton >
            <SideButton imagesrc="users.png" linkto='/clients'>
                Clients
            </SideButton>
            
            <SideButton imagesrc="messenger.png" linkto='/messenges'>
                Messenges
            </SideButton>
            <SideButton imagesrc="clipboard.png" linkto='/tasks'>
                Tasks
            </SideButton>
            <SideButton imagesrc="dashboard.png" linkto='/notes' >
                Notes
            </SideButton>
        </>
    )
}