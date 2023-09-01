function SidebarButton(props) {
    let buttonNameArray = [];
    switch (props.sideButtonStateTag) {
        case "HTML":
            buttonNameArray = ["Basic", "Element", "Attributes", "Meta", "Link", "Layout", "Paragraphs", "Formatting", "List", "Table", "Iframe", "Object", "Image", "Multimedia", "Forms"];
            break;
        case "CSS":
            buttonNameArray = ["Basic", "Selector", "Declaration", "Layout", "BoxModel", "Flex", "BoxOther", "Background", "Text", "Font", "List", "Dynamic", "RWD"]
            break;
        case "JavaScript":
            buttonNameArray = ["Basic", "Syntax", "Window", "WindowHistory", "WindowLocation", "WindowNavigator", "Document", "Element", "EventTarget", "EventObject"]
            break;
        case "TypeScript":
            buttonNameArray = ["Basic", "Syntax"]
            break;
        case "Jquery":
            buttonNameArray = ["Basic", "Syntax"]
            break;
        case "React":
            buttonNameArray = ["Basic", "JSX", "Component", "Hook", "Trap"]
            break;
        case "NodeJS":
            buttonNameArray = ["Basic", "npm", "Module"]
            break;
        case "ExpressJS":
            buttonNameArray = ["Basic", "Application", "Router", "Middleware", "Request", "Response"]
            break;
        case "SQL":
            buttonNameArray = ["Basic", "MySQL"]
            break;
        case "Git":
            buttonNameArray = ["Basic"]
            break;
        default:
            buttonNameArray = [];
            break;
    }
    return (
        buttonNameArray.map((a) =>
            <button class="main-sidebar-div-button" type="button" onClick={
                () => {
                    props.sideButtonSetStateContent(() => { return props.sideButtonStateTag + "/" + a });
                }
            }>{a}</button >
        )
    )
}

export default SidebarButton;