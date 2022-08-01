import MeetupList from "../components/meeetups/MeetupList";
import { useState, useEffect } from "react";

/*const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];*/

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        async function fecthMeetups() {
            const response = await fetch('https://react-meetups-f787d-default-rtdb.firebaseio.com/meetups.json');
            const meetupsList = [];
            let data = await response.json();

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetupsList.push(meetup);
                setIsLoading(false);
                setLoadMeetups(meetupsList)
            }
        }
        fecthMeetups()
        /*fetch('https://react-meetups-f787d-default-rtdb.firebaseio.com/meetups.json').
            then((response) => {
                return response.json();
            }).
            then((data) => {
                const meeetups = [];
                console.log(data)
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meeetups.push(meetup)
                }
                setIsLoading(false);
                setLoadMeetups(meeetups)
            });*/
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return <section>
        <h1>
            All Meetups
        </h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
}

export default AllMeetups;