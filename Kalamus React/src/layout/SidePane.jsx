import SideButton from './sidebutton';

export default function SidePane() {
    return (
        <>
            <SideButton imagesrc="dashboard.png" linkto='/dashboard'>
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