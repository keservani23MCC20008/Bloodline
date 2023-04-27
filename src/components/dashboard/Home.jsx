import React from "react";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";

function Home() {
    return (
        <div className="row">
            <div className="column card1"><HomeCard pageURL="#" name="Donor Login/Register" className="HomeCard"></HomeCard></div>
            <div className="column card2"><HomeCard pageURL="#" name="Blood Camp Registration" className="HomeCard"></HomeCard></div>
            <div className="column card3"><HomeCard pageURL="/bloodAvailSearch" name="Blood Availability Search" className="HomeCard"></HomeCard></div>
            <div className="column card4"><HomeCard pageURL="/bloodBankDir" name="Blood Bank Directory" className="HomeCard"></HomeCard></div>
            <div className="column card5"><HomeCard pageURL="/campSchudule" name="Blood Donation Camps" className="HomeCard"></HomeCard></div>
            <HomeInfo></HomeInfo>
        </div>
    )
}

export default Home;