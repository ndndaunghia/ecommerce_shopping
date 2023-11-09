import React, { useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";

const Shipping = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const shippingInfo = {}

  const [address, setAddress] = useState(shippingInfo?.address);
  // eslint-disable-next-line
  const [state, setState] = useState(shippingInfo?.state);
  const [country, setCountry] = useState(shippingInfo?.country);
  // eslint-disable-next-line
  const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      
      return;
    }
    localStorage.setItem("info", JSON.stringify({ address, state, country, phoneNo }))
    history("/confirm");
  };

  return (
    <>

      <CheckoutSteps activeStep={0} />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">City</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>

    </>
  );
};

export default Shipping;
