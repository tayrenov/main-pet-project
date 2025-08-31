import { useSelector } from "react-redux";

function IndexPage() {

    const auth = useSelector((state)=> state.app.auth)

    return (

        <div>
            {auth ? <WellcomePageUser /> : <WellcomePageGuest />}
        </div>

    )
}

function WellcomePageGuest() {
    return (
        <div>
            <div>Wellcome</div>

            <p>Please Auth</p>
        </div>

    )
}

function WellcomePageUser() {
    return (
        <div>
            <div>Wellcome</div>

            <p>You can use app</p>
        </div>

    )
}

export default IndexPage;
