import './dashboard.scss';

export default function Dashboard() {
    return (
        <>
            <main className="dashboard">
                <div className="clock">
                    12:15

                    <div className="date">Thursday, January 15</div>
                </div>
                <div className="weather">
                    weather goes here!
                </div>
                <div className="voice-box">
                    <div className="title">What can I help you with?</div>
                    <div className="img">
                        <img src="sound-waves.png" />
                    </div>
                </div>
            </main>
        </>

    )
}
