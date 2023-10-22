// descontrução
// props => title e content => {title, content}
function TitleWithText({title,content}) {
    return (
        <div>
            <h2>{title}</h2>
            <hr />
            <p>{content}</p>
        </div>
    );

}

export default TitleWithText;