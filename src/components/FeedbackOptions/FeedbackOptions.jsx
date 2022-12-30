export const FeedbackOptions = function ({ onLeaveFeedback, options }) {
    return (
        <>
            {options.map((e) => (
            <button key={e} type="button" onClick={() => onLeaveFeedback(e)}>{e}</button>
            ))}
        </>
    );
}
