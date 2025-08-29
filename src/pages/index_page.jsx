import { useSelector } from "react-redux";

function IndexPage() {

    const auth = useSelector((state)=> state.app.auth)
    
    return (

        <div>
            {auth ? <WellcomePage_User /> : <WellcomePage_Guest />}
        </div>

    )
}

function WellcomePage_Guest() {
    return (
        <div>
            <div>Wellcome</div>

            <p>Please Auth</p>
        </div>

    )
}

function WellcomePage_User() {
    return (
        <div>
            <div>Wellcome</div>

            <p>You can use app</p>
        </div>

    )
}

export default IndexPage;
