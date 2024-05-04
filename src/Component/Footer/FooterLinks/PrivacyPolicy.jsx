import React from "react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const privacyRef = React.createRef();
  useEffect(() => {
    privacyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [privacyRef]);
  return (
    <div ref={privacyRef}>
      <div className="prpo p-10">
        <div className="innerprpo">
          <div className="inner1prpo">
            <div>
              <h1 id="mainprpo">Privacy Policy</h1>

              <div className="content-container">
                <p>TrendSphere E-Commerce Privacy policy</p>
                12-10-2023
                <p>
                  <strong>1. Introduction</strong>
                </p>
                <p>
                  Welcome to TrendSphere ("we," "us," or "our"). We are
                  committed to protecting the privacy and security of your
                  personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our website and services. By accessing or using our
                  website, you consent to the practices described in this
                  Privacy Policy.
                </p>
                <p>
                  <strong>2. Information We Collect</strong>
                </p>
                <p>
                  Personal Information: This may include your name, email
                  address, phone number, shipping address, and payment
                  information.
                </p>
                <p>
                  <strong>3. How We Use Your Information</strong>
                </p>
                <p>
                  We may use your information for various purposes, including:
                </p>
                <p>
                  <span className="dot"></span> Processing and fulfilling your
                  orders.
                </p>
                <p>
                  <span className="dot"></span> Providing customer support.
                </p>
                <p>
                  <span className="dot"></span> Sending you transactional emails
                  and order updates.
                </p>
                <p>
                  <span className="dot"></span> Personalizing your shopping
                  experience.
                </p>
                <p>
                  <span className="dot"></span> Conducting analytics to improve
                  our website and services.
                </p>
                <p>
                  <span className="dot"></span> Marketing and promotional
                  purposes with your consent.
                </p>
                <p>
                  <span className="dot"></span> Complying with legal and
                  regulatory requirements.
                </p>
                <p>
                  <strong>4. Data Security</strong>
                </p>
                <p>
                  {" "}
                  We take the security of your information seriously and employ
                  appropriate technical and organizational measures to protect
                  it. However, no data transmission over the internet is
                  completely secure, so we cannot guarantee the absolute
                  security of your information.
                </p>
                <p>
                  <strong>5. Sharing Your Information</strong>
                </p>
                <p>We may share your information with: </p>
                <p>
                  <span className="dot"></span> Third-party service providers
                  who help us operate our website and provide services to you.
                </p>
                <p>
                  <span className="dot"></span> Business partners and affiliates
                  for marketing and promotional purposes.
                </p>
                <p>
                  <span className="dot"></span> Legal authorities if required by
                  law or to protect our rights and interests.
                </p>
                <p>
                  <strong>6. Your Choices</strong>
                </p>
                <p>
                  <span className="dot"></span> Accessing and updating your
                  personal information.
                </p>
                <p>
                  <span className="dot"></span> Deleting your account and
                  personal data.
                </p>
                <p>
                  <span className="dot"></span> Opting out of marketing
                  communications.
                </p>
                <p>
                  <span className="dot"></span> Changing cookie preferences.
                </p>
                <p>
                  <strong>7. Children's Privacy</strong>
                </p>
                <p>
                  Our website is not intended for children under the age of 13,
                  and we do not knowingly collect personal information from
                  children.
                </p>
                <p>
                  <strong>8. Changes to this Privacy Policy</strong>
                </p>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices and services. Please review this
                  policy periodically for any updates.
                </p>
                <p>
                  <strong>9. Contact Us</strong>
                </p>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at
                  18003000232.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
