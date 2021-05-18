import "../css/headlineComponent.css";

export default function HeadlineComponent({ initialState }) {
    console.log("initialState", initialState);
    return (
        <>
            <div className="headline-container">
                {initialState.video ? (
                    <video className="video" loop autoPlay muted>
                        <source src={initialState.video} type="video/mp4" />
                        <source src={initialState.video} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        className="article-image modal-image video"
                        src={initialState.image}
                        alt={`${initialState.header} mainpage`}
                    />
                )}

                <div className="single-project-header-container">
                    <span className="single-project-header headline">
                        {initialState.header.toUpperCase()}
                    </span>
                </div>
            </div>
        </>
    );
}
