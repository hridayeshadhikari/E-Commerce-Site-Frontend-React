import React from 'react';
import { useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';



const Payments = () => {

    const paymentsRef = React.createRef();
    useEffect(() => {
        paymentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [paymentsRef]);
    return (
        <div >
            <Navbar />
            <div ref={paymentsRef}>

                <div className="prpo p-10">
                    <div className="innerprpo">
                        <div className="inner1prpo">
                            <div>
                                <h1 id='mainprpo' className='font-bold mb-3 mt-5'>Payments</h1>

                                <div className="content-container">
                                    <p><strong>1. How do I pay for a TrendSphere purchase?</strong></p>
                                    <p>TrendSphere offers you multiple payment methods. Whatever your online mode of payment,
                                        you can rest assured that TrendSphere's trusted payment gateway
                                        partners use secure encryption technology to keep your transaction details confidential at all times.</p>

                                    <p><strong>2. Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on TrendSphere?</strong></p>

                                    <p>here are NO hidden charges when you make a purchase on TTrendSphere. The prices listed for all the items are
                                        final and all-inclusive. The price you see on the product page is exactly what you pay.</p>

                                    <p><strong>3. What is Cash on Delivery?</strong></p>
                                    <p>If you are not comfortable making an online payment on TrendSphere.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the
                                        product at your doorstep, without requiring you to make any advance payment online.</p>


                                    <p><strong>4. Is it safe to use my credit/debit card on TrendSphere?</strong></p>

                                    <p>Your online transaction on TrendSphere is secure with the highest levels of transaction security
                                        currently available on the Internet. TrendSphere uses 256-bit encryption technology to protect your
                                        card information while securely transmitting it to the respective banks for payment processing.</p>

                                    <p><strong>5. How does 'Instant Cashback' work?</strong></p>

                                    <p>The 'Cashback' offer is instant and exclusive to trendsphere.com.
                                        You only pay the final price you see in your shopping cart. </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Payments;