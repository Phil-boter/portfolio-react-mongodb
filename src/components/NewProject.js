import { useState } from "react";
import { useDispatch } from "react-redux";

import { newProject } from "../redux/actions";

export default function NewProject({ state }) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [secTitle, setSecondTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technology, setTechnology] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [host, setHost] = useState("");
    const [upload, setUpload] = useState();
    const [register, setShowregister] = useState(true);

    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };
    const handleSecondTitle = (e) => {
        e.preventDefault();
        setSecondTitle(e.target.value);
    };

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    };

    const handleTechnology = (e) => {
        e.preventDefault();
        setTechnology(e.target.value);
    };
    const handleLink = (e) => {
        e.preventDefault();
        setLink(e.target.value);
    };

    const handleImage = (e) => {
        e.preventDefault();
        setImage(e.target.value);
    };

    const handleHost = (e) => {
        e.preventDefault();
        setHost(e.target.value);
    };

    const handleImageUpload = (e) => {
        e.preventDefault();
        console.log("file", e.target.files[0]);
        setUpload(e.target.files[0]);
    };

    const showRegistration = (e) => {
        e.preventDefault();
        setShowregister(false);
    };

    const Upload = (e) => {
        e.preventDefault();
        var formData = new FormData();

        formData.append("title", title);
        formData.append("title_second", secTitle);
        formData.append("description", description);
        formData.append("technology", technology);
        formData.append("link", link);
        formData.append("image", image);
        formData.append("host", host);
        formData.append("file", upload);

        dispatch(newProject(formData));
    };

    return (
        <>
            <div className="">
                {register ? (
                    <>
                        <button
                            onClick={(e) => showRegistration(e)}
                            className="toggle-button login"
                        >
                            {" "}
                            Create a new Project
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <button
                                onClick={(e) => setShowregister(e, true)}
                                className="toggle-button login"
                            >
                                Close Input
                            </button>
                            <form>
                                <div>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        onChange={(e) => handleTitle(e)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="title_second"
                                        placeholder="Second Title"
                                        onChange={(e) => handleSecondTitle(e)}
                                    ></input>
                                </div>
                                <div>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        onChange={(e) => handleDescription(e)}
                                    ></textarea>
                                </div>
                                <div>
                                    <textarea
                                        type="technology"
                                        name="technology"
                                        placeholder="Used Technology"
                                        onChange={(e) => handleTechnology(e)}
                                    ></textarea>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="link"
                                        placeholder="Link"
                                        onChange={(e) => handleLink(e)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="url for image"
                                        onChange={(e) => handleImage(e)}
                                    ></input>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="host"
                                        placeholder="link for hosting page"
                                        onChange={(e) => handleHost(e)}
                                    ></input>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image-upload"
                                    placeholder="url for image"
                                    onChange={(e) => handleImageUpload(e)}
                                ></input>
                                <div>
                                    <button
                                        disabled={
                                            (title.length < 1,
                                            description.length < 1,
                                            technology.length < 1,
                                            link.length < 1,
                                            image.length < 1)
                                        }
                                        className="toggle-button login"
                                        onClick={(e) => Upload(e)}
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
