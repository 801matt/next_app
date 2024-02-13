import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InfoPage from "../../components/InfoPage";

const Issues = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Header currentPage={currentPage} />
      <InfoPage>
        <h1>Issues</h1>
        <p>
          Raclette shabby chic asymmetrical brunch green juice selvage pop-up
          scenester fixie put a bird on it bitters. Fit tumblr skateboard
          helvetica live-edge deep v scenester vaporware enamel pin air plant
          woke humblebrag. Seitan tofu chillwave PBR&B copper mug, leggings
          marxism sustainable big mood scenester. Literally beard vaporware
          truffaut fixie, raw denim distillery portland. Health goth kombucha
          neutra readymade cupping mixtape narwhal bushwick.
          <br></br>
          <div className="inline-image">
            <img src="about-me-1.jpg"></img>
          </div>
          Direct trade YOLO ennui kale chips distillery. Unicorn ennui marfa
          sartorial PBR&B cupping skateboard brunch activated charcoal vinyl
          everyday carry normcore. Chia sustainable ennui literally, hoodie
          migas woke hexagon squid blue bottle vegan 8-bit tumeric. Snackwave
          ugh church-key bespoke cold-pressed aesthetic DIY. Vexillologist man
          bun tumblr cray retro forage gochujang copper mug. Wolf slow-carb
          shoreditch, seitan bushwick tbh woke four dollar toast.
          <br></br>
          <br></br>
          Gluten-free sustainable af iPhone selvage edison bulb mumblecore
          shabby chic letterpress DSA everyday carry coloring book poke direct
          trade small batch. Cronut schlitz squid subway tile taiyaki pop-up
          artisan, tbh mukbang authentic fit wolf truffaut. Pok pok portland
          edison bulb, chambray schlitz yr art party.
        </p>
        <h2>Family</h2>
        <p>
          Raclette shabby chic asymmetrical brunch green juice selvage pop-up
          scenester fixie put a bird on it bitters. Fit tumblr skateboard
          helvetica live-edge deep v scenester vaporware enamel pin air plant
          woke humblebrag. Seitan tofu chillwave PBR&B copper mug, leggings
          marxism sustainable big mood scenester. Literally beard vaporware
          truffaut fixie, raw denim distillery portland. Health goth kombucha
          neutra readymade cupping mixtape narwhal bushwick.
          <br></br>
          <div className="inline-image">
            <img src="about-me-1.jpg"></img>
          </div>
          Direct trade YOLO ennui kale chips distillery. Unicorn ennui marfa
          sartorial PBR&B cupping skateboard brunch activated charcoal vinyl
          everyday carry normcore. Chia sustainable ennui literally, hoodie
          migas woke hexagon squid blue bottle vegan 8-bit tumeric. Snackwave
          ugh church-key bespoke cold-pressed aesthetic DIY. Vexillologist man
          bun tumblr cray retro forage gochujang copper mug. Wolf slow-carb
          shoreditch, seitan bushwick tbh woke four dollar toast.
          <br></br>
        </p>
        <h2>Education</h2>
        <p>
          Raclette shabby chic asymmetrical brunch green juice selvage pop-up
          scenester fixie put a bird on it bitters. Fit tumblr skateboard
          helvetica live-edge deep v scenester vaporware enamel pin air plant
          woke humblebrag. Seitan tofu chillwave PBR&B copper mug, leggings
          marxism sustainable big mood scenester. Literally beard vaporware
          truffaut fixie, raw denim distillery portland. Health goth kombucha
          neutra readymade cupping mixtape narwhal bushwick.
          <br></br>
          <div className="inline-image">
            <img src="about-me-1.jpg"></img>
          </div>
          Direct trade YOLO ennui kale chips distillery. Unicorn ennui marfa
          sartorial PBR&B cupping skateboard brunch activated charcoal vinyl
          everyday carry normcore. Chia sustainable ennui literally, hoodie
          migas woke hexagon squid blue bottle vegan 8-bit tumeric. Snackwave
          ugh church-key bespoke cold-pressed aesthetic DIY. Vexillologist man
          bun tumblr cray retro forage gochujang copper mug. Wolf slow-carb
          shoreditch, seitan bushwick tbh woke four dollar toast.
          <br></br>
        </p>
        <h2>Career</h2>
        <p>
          Raclette shabby chic asymmetrical brunch green juice selvage pop-up
          scenester fixie put a bird on it bitters. Fit tumblr skateboard
          helvetica live-edge deep v scenester vaporware enamel pin air plant
          woke humblebrag. Seitan tofu chillwave PBR&B copper mug, leggings
          marxism sustainable big mood scenester. Literally beard vaporware
          truffaut fixie, raw denim distillery portland. Health goth kombucha
          neutra readymade cupping mixtape narwhal bushwick.
          <br></br>
          <div className="inline-image">
            <img src="about-me-1.jpg"></img>
          </div>
          Direct trade YOLO ennui kale chips distillery. Unicorn ennui marfa
          sartorial PBR&B cupping skateboard brunch activated charcoal vinyl
          everyday carry normcore. Chia sustainable ennui literally, hoodie
          migas woke hexagon squid blue bottle vegan 8-bit tumeric. Snackwave
          ugh church-key bespoke cold-pressed aesthetic DIY. Vexillologist man
          bun tumblr cray retro forage gochujang copper mug. Wolf slow-carb
          shoreditch, seitan bushwick tbh woke four dollar toast.
          <br></br>
        </p>
      </InfoPage>
      <Footer />
    </>
  );
};

export default Issues;
