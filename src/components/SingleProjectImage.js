import { useState } from "react";

import PopUpPicture from "./PopUpPicture";

export default function SingleProjectImage({ item, index }) {
    const [picture, setPopUpPicture] = useState(false);

    return (
        <>
            <img
                key={index}
                className="content-image"
                src={item}
                alt=""
                onClick={() => setPopUpPicture(true)}
            />
            {picture && (
                <PopUpPicture
                    item={item}
                    index={index}
                    setPopUpPicture={setPopUpPicture}
                />
            )}
        </>
    );
}
