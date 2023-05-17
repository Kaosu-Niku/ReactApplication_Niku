function HeaderButton(props) {
    return (
        <button id={props.headerButtonId} class="header-div-button" type="button" onClick={
            () => {
                props.headerButtonSetStateTag(props.headerButtonContent);
                props.headerButtonSetStateContent(props.headerButtonContent + "/Basic");
            }
        }>{props.headerButtonContent}</button >
    );
}
export default HeaderButton;