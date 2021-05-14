export default function PopUpPicture({ item, index, setPopUpPicture }) {
    return (
        <div
            key={index}
            className="popup-picture-container"
            onClick={() => setPopUpPicture(false)}
        >
            <h2>click to close</h2>
            <img className="popup-picture" src={item} alt="" />
        </div>
    );
}
