import SessionTable from "./SessionTable";
import movieSession from '../../data/movieSessions.json';
import FancyGallery from "./FancyGallery";

function TabContent(props) {
    return (
        <div className='tabcontent'>
            { props.tabIndex === 0 && <SessionTable movieSession={movieSession} /> }
            { props.tabIndex === 1 && <FancyGallery movieData={props.movieData} /> }

        </div>
    );
}

export default TabContent;