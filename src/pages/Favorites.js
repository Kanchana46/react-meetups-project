import { useContext } from "react";
import MeetupList from "../components/meeetups/MeetupList";
import FavoritesContext from "../store/favorite-context";

function Favorite() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;
    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favoites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default Favorite;