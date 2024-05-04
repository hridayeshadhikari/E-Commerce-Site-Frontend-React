import React from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
const Security = () => {
  const securityRef = React.createRef();
  useEffect(() => {
    securityRef.current.scrollIntoView({ behavior: "smooth" });
  }, [securityRef]);
  return (
    <div ref={securityRef}>
      <div className="prpo p-10">
        <div className="innerprpo">
          <div className="inner1prpo">
            <div>
              <h1 id="mainprpo">Safe and Secure Shopping</h1>

              <div className="content-container">
                <p>
                  <strong>
                    Is making online payment secure on TrendSphere
                  </strong>
                </p>

                <p>Yes, making the online payment is secure on TrendSphere</p>

                <p>
                  <strong>
                    Does TrendSphere store my credit/debit card infomation?
                  </strong>
                </p>

                <p>
                  No. TrendSphere only stores the last 4 digits of your card
                  number for the purpose of card identification.
                </p>

                <p>
                  <strong>
                    What credit/debit cards are accepted on TrendSphere?
                  </strong>
                </p>

                <p>
                  We accept VISA, MasterCard, Maestro, Rupay, American Express,
                  Diner's Club and Discover credit/debit cards.
                </p>

                <p>
                  <strong>
                    Do you accept payment made by credit/debit cards issued in
                    other countries?
                  </strong>
                </p>
                <p>
                  Yes! We accept VISA, MasterCard, Maestro, American Express
                  credit/debit cards issued by banks in India and in the
                  following countries: Australia, Austria, Belgium, Canada,
                  Cyprus, Denmark, Finland, France, Germany, Ireland, Italy,
                  Luxembourg, the Netherlands, New Zealand, Norway, Portugal,
                  Singapore, Spain, Sweden, the UK and the US. Please note that
                  we do not accept internationally issued credit/debit cards for
                  eGV payments/top-ups.
                </p>

                <p>
                  <strong>
                    What other payment options are available on TrendSphere?
                  </strong>
                </p>
                <p>
                  Apart from Credit and Debit Cards, we accept payments via
                  Internet Banking (covering 44 banks), Cash on Delivery,
                  Equated Monthly Installments (EMI), E-Gift Vouchers, Flipkart
                  Pay Later, UPI, Wallet, and Paytm Postpaid.
                </p>

                <p>
                  <strong>Privacy Policy</strong>
                </p>

                <p>
                  TrendSphere.com respects your privacy and is committed to
                  protecting it. For more details, please see our{" "}
                  <Link to="/privacy-policy">Privacy policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
