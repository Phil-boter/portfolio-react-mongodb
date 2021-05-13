export default function SectionHeader({ initialState }) {
    return (
        <>
            <div className="page2 intro-text">
                <h1>
                    <span>{initialState.sectionHeader}</span>
                </h1>
            </div>
        </>
    );
}
