import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meeetups/NewMeetupForm";

function NewMeetup() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://react-meetups-f787d-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/', { replace: true })
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetup;