import Profile from "./components/Profile/Profile";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import Works from "./components/Works/Works";

function HomePage() {
    return ( 
        <div>
            <Profile/>
            <RecentPosts/>
            <Works/>
        </div>
    );
}

export default HomePage