import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './fancy-gallery.css';

function FancyGallery(props) {

    Fancybox.bind("[data-fancybox]", {
        // custom options
      });

    return (
        <div className='container' style={{width: "100%"}}>
            <div className="description-block">
                <p>{props.movieData.description}</p>
            {/* <a href="javascript:;" data-fancybox-trigger="gallery" data-fancybox-index="0">
                <img src="https://lipsum.app/id/1/400x300" />
            </a> */}
            </div>
            
            <h4 className="title-3">Трейлер и кадры</h4>
            <div className="gallery-block">
                <a href={props.movieData.trailer} data-fancybox="gallery" data-caption="caption #1">
                    <video src={props.movieData.trailer} className="img-thumbnail video-frame" poster={props.movieData.poster} />
                </a>
                {
                    props.movieData.screens.map((path, i) => (
                        <a href={path} key={i} data-fancybox="gallery" data-caption="caption #1">
                            <img src={path} className="img-thumbnail" />
                        </a>
                    ))
                }
                
            </div>
        </div>
    );
}

export default FancyGallery;