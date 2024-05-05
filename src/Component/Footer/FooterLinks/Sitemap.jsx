import React from "react";
import { useEffect } from "react";

const Sitemap = () => {
  const sitemapRef = React.createRef();
  useEffect(() => {
    sitemapRef.current.scrollIntoView({ behavior: "smooth" });
  }, [sitemapRef]);
  return (
    <div ref={sitemapRef}>
      <div className="site-map p-10">
        <div className="innersite">
          <div className="inner1site">
            <div>
              <h1
                id="main-site"
                style={{ fontSize: "25px", fontWeight: "700" }}
                className="mb-5  text-center"
              >
                Categories
              </h1>
              <div className="content-sitemap">
                <p>
                  <strong>Gadgets</strong>
                </p>
                <p>
                  Power Bank | Skins | Mobiles | Tablets | Tablets with Call |
                  Facility Tablets | without Call Facility Mobile Accessories |
                  Mobile | Camera | Lens | Protectors Cases & Covers | Power
                  Banks | Headphones | Memory Cards & Readers | Smart Keys |
                  Mobile Holders | Mobile Sim & SD Card Trays | Mobile Flashes |
                  Mods | Mobile Body Panels | Bluetooth Shutter Remotes | Mobile
                  Battery | Photo Printers | Satellite Phone.
                </p>
                <p className="mt-3">
                  <strong>Home Decor</strong>
                </p>
                <p>
                  Stickers & Wallpapers | Wallpapers | Stickers | Paintings &
                  Posters | Paintings Posters | Clocks | Wall Clocks | Table
                  Clocks | Showpieces & Decor | Accents Showpieces & Figurines |
                  Decorative Bottles | Magnets Trophies & Medals | Decorative
                  Feather Flags | Artificial Fruits Wall Decor | Items Wall
                  Shelves | Key Holders | Decorative Mirrors | Wall Hangings
                  Decorative | Masks Name Plates | Tin & Metal Signs
                </p>
                <p className="mt-3">
                  <strong>Clothing</strong>
                </p>
                <p>
                  Men's Clothing | T-Shirts | Shirts | Jeans| Sports Wear |
                  Trousers| Inner Wear & Sleep Wear | Suits & Blazers | Cargos,
                  Shorts & 3/4ths Accessories & Combo Sets | Ethnic Wear |
                  Fabrics | Winter & Seasonal Wear | Women's Clothing | Ethnic
                  Wear | Western Wear | Lingerie{" "}
                </p>
                <p className="mt-3">
                  <strong>Footwear</strong>
                </p>
                <p>
                  Women's Footwear | Women's Flats | Women's Heels | Women's
                  Wedges | Women's Sports Shoes | Women's Casual Shoes | Women's
                  Ballerinas | Women's Ethnic Shoes | Women's Formals | Women's
                  Slippers & Flip Flops | Women's Sports | Sandals Sandals |
                  Kids' & Infant Footwear | Boys Footwear | Girls Footwear |
                  Infants Shoe | Accessories | Socks Men's | Footwear Shoe |
                  Laces Men’s | Casual Shoes | Men’s Sports Shoes | Men’s Formal
                  Shoes
                </p>
                <p className="mt-3">
                  <strong>Watches</strong>
                </p>
                <p>
                  Wrist Watches | Watch Accessories | Pocket Watch | Chains
                  Watch | Boxes Watch | Protective Cases & Covers | Watch Repair
                  Kits | Wrist Bands | Watch Winders | Watch Straps | Weather
                  Stations | Clocks | Wall Clocks | Table Clocks | Pocket
                  Watches
                </p>
                <p className="mt-3">
                  <strong>Bags, Wallets & Belts</strong>
                </p>
                <p>
                  Bags & Backpacks | Gym Bags | Cross Body Bags | Waist Bags |
                  Messenger Bags | Wallets | Backpacks | Laptop Bags | Luggage &
                  Travel | Luggage Combo | Duffel Bags | Suitcases | Rucksacks
                  Small Travel Bags | Travel Accessories | Waist Bags |
                  Briefcases | Luggage Covers | Wallets & Clutches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
