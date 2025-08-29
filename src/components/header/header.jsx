import './header.css'

function Header(props) {
    return (
        <header className="app-header">
            <div>{props.title}</div>
            <div>Auth</div>
        </header>
    )

}

export default Header;