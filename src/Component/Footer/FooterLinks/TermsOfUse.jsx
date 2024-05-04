import React from "react";

import { useEffect } from "react";

const TermsOfUse = () => {
  const termsRef = React.createRef();
  useEffect(() => {
    termsRef.current.scrollIntoView({ behavior: "smooth" });
  }, [termsRef]);
  return (
    <div ref={termsRef}>
      <div className="prpo p-10">
        <div className="innerprpo">
          <div className="inner1prpo">
            <div>
              <h1 id="mainprpo">Terms of use</h1>

              <div className="content-container">
                <p>TrendSphere E-Commerce Terms of Use</p>
                12-10-2023
                <p>
                  <strong>1. Acceptance of Terms</strong>
                </p>
                <p>
                  By accessing or using the TrendSphere website (the "Site"),
                  you agree to comply with and be bound by these Terms of Use.
                  If you do not agree to these terms, please do not use the
                  Site.
                </p>
                <p>
                  <strong>2. Changes to Terms</strong>
                </p>
                <p>
                  TrendSphere reserves the right to update or modify these Terms
                  of Use at any time without notice. Your continued use of the
                  Site after any such changes constitutes acceptance of the
                  revised terms.
                </p>
                <p>
                  <strong>3. User Registration</strong>
                </p>
                <p>
                  a. To access certain features of the Site, you may be required
                  to register for an account. You agree to provide accurate and
                  complete information during the registration process and to
                  update this information as needed.
                </p>
                <p>
                  b. You are responsible for maintaining the confidentiality of
                  your account information and for all activities that occur
                  under your account.
                </p>
                <p>
                  <strong>4. Privacy Policy</strong>
                </p>
                <p>
                  Your use of the Site is also governed by our Privacy Policy,
                  which can be found at [Link to Privacy Policy]. By using the
                  Site, you consent to the collection, use, and sharing of your
                  information as described in the Privacy Policy.
                </p>
                <p>
                  <strong>5. Orders and Payments</strong>
                </p>
                <p>
                  a. When you place an order through the Site, you are making an
                  offer to purchase the products or services at the stated
                  price. TrendSphere reserves the right to refuse or cancel any
                  order at its sole discretion.
                </p>
                <p>
                  b. Payment information must be accurate and valid. You agree
                  to pay all charges incurred in connection with your order.
                </p>
                <p>
                  <strong>6. Shipping and Returns</strong>
                </p>
                <p>
                  a. Shipping and delivery terms, as well as our return policy,
                  are described in detail on the Site. By placing an order, you
                  agree to abide by these policies.
                </p>
                <p>
                  <strong>7. Intellectual Property</strong>
                </p>
                <p>
                  a. All content on the Site, including but not limited to text,
                  graphics, logos, images, videos, and software, is the property
                  of TrendSphere and is protected by copyright and other
                  intellectual property laws.
                </p>
                <p>
                  b. You may not use, reproduce, or distribute any content from
                  the Site without our written permission.
                </p>
                <p>
                  <strong>8. Prohibited Activities</strong>
                </p>
                <p>You agree not to:</p>
                <p>a. Use the Site for any unlawful purpose.</p>
                <p>b. Violate any applicable laws or regulations.</p>
                <p>c. Engage in fraudulent or deceptive activities.</p>
                <p>d. Interfere with the security or operation of the Site.</p>
                <p>
                  <strong>9. Termination</strong>
                </p>
                <p>
                  TrendSphere may terminate your access to the Site at any time,
                  with or without cause.
                </p>
                <p>
                  <strong>10. Disclaimer of Warranties</strong>
                </p>
                <p>
                  The Site is provided "as is" and without warranties of any
                  kind, either express or implied. TrendSphere disclaims all
                  warranties, including but not limited to, implied warranties
                  of merchantability and fitness for a particular purpose.
                </p>
                <p>
                  <strong>11. Limitation of Liability</strong>
                </p>
                <p>
                  TrendSphere shall not be liable for any direct, indirect,
                  incidental, special, or consequential damages arising out of
                  or in any way connected with your use of the Site.
                </p>
                <p>
                  <strong>12. Governing Law</strong>
                </p>
                <p>
                  These Terms of Use are governed by and construed in accordance
                  with the laws of [Your Jurisdiction].
                </p>
                <p>
                  <strong>13. Contact Information</strong>
                </p>
                <p>
                  If you have any questions or concerns about these Terms of
                  Use, please contact us at +1800083676352.
                </p>
                <p>
                  By using the Site, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
