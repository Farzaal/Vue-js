
    <template>
      <div class="homepageTestCase">
        <header class="topHeader">
          <div class="topContainer">
            <img class="fickleflightIcon" alt="" src="/fickleflight.svg" />
            <div class="navigationRight">
              <div class="navigationMenu">
                <div class="explore">Explore</div>
                <div class="search">Search</div>
                <button class="hotels">Hotels</button>
                <button class="hotels">Offers</button>
              </div>
              <div class="accountSection">
                <img class="hamburgerMenuIcon" alt="" src="/notification.svg" />
                <img class="notificationBellIcon" alt="" src="/notification1.svg" />
                <img class="avatarIcon" alt="" src="/top_avatar@2x.png" />
              </div>
            </div>
          </div>
        </header>
        <div class="homeContents">
          <div class="upcomingFlightSection">
            <b class="recentSearches">Recent Searches</b>
            <div class="flightDetails">
              <div class="recentSearchesSection">
                <div class="recentSearch">
                  <div class="toAndFrom">
                    <b class="departure">SIN</b>
                    <img class="planeicon" alt="" src="/planeicon.svg" />
                    <b class="arrival">LAX</b>
                  </div>
                  <div class="departureInfo">
                    <b class="departure">{`Depart on: `}</b>
                    <div class="departure">7 Sep 2023</div>
                  </div>
                </div>
                <div class="recentSearch">
                  <div class="toAndFrom">
                    <b class="departure">MY</b>
                    <img class="planeicon" alt="" src="/planeicon1.svg" />
                    <b class="arrival">DUB</b>
                  </div>
                  <div class="departureInfo">
                    <b class="departure">{`Depart on: `}</b>
                    <div class="departure">9 Sep 2023</div>
                  </div>
                </div>
              </div>
              <div class="prepareMenu">
                <div class="recentSearches">Prepare for your trip</div>
                <div class="tripMenu">
                  <button class="tripMenuItem" @click={onTripMenuItemClick}>
                    <div class="icon">
                      <img class="iconVector" alt="" src="/icon.svg" />
                    </div>
                    <div class="text">Hotel</div>
                  </button>
                  <button class="tripMenuItem">
                    <div class="icon1">
                      <img class="iconVector" alt="" src="/icon1.svg" />
                    </div>
                    <div class="text">Attractions</div>
                  </button>
                  <button class="tripMenuItem">
                    <div class="icon2">
                      <img class="iconVector" alt="" src="/icon2.svg" />
                    </div>
                    <div class="text">Eats</div>
                  </button>
                  <button class="tripMenuItem">
                    <div class="icon3">
                      <img class="iconVector" alt="" src="/icon3.svg" />
                    </div>
                    <div class="text">Commute</div>
                  </button>
                  <button class="tripMenuItem">
                    <div class="icon4">
                      <img class="iconVector" alt="" src="/icon4.svg" />
                    </div>
                    <div class="text">Taxi</div>
                  </button>
                  <button class="tripMenuItem">
                    <div class="icon5">
                      <img class="iconVector" alt="" src="/icon5.svg" />
                    </div>
                    <div class="text">Movies</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="popDestinationsMain">
            <div class="destinationsTitles">
              <div class="titleContainer">
                <b class="recentSearches">Plan your next trip</b>
                <b class="mostPopularLocofy">Most Popular locofy Destinations</b>
              </div>
              <button class="viewAllTop">
                <div class="viewAllDestinations">View all destinations</div>
                <img class="notificationBellIcon" alt="" src="/arrowright.svg" />
              </button>
            </div>
            <div class="popDestinationItems">
              <button class="popularDestinationCard">
                <div class="pariscard">
                  <img class="cardimageIcon" alt="" src="/cardimage@2x.png" />
                  <div class="destinationDetails">
                    <b class="destination">Paris</b>
                    <div class="details">
                      <div class="from">from</div>
                      <div class="price">$699</div>
                    </div>
                  </div>
                </div>
              </button>
              <button class="popularDestinationCard">
                <div class="pariscard">
                  <img class="cardimageIcon" alt="" src="/cardimage1@2x.png" />
                  <div class="destinationDetails">
                    <b class="destination">Greece</b>
                    <div class="details">
                      <div class="from">from</div>
                      <div class="price">$1079</div>
                    </div>
                  </div>
                </div>
              </button>
              <button class="popularDestinationCard">
                <div class="pariscard">
                  <img class="cardimageIcon" alt="" src="/cardimage2@2x.png" />
                  <div class="destinationDetails">
                    <b class="destination">Norway</b>
                    <div class="details">
                      <div class="from">from</div>
                      <div class="price">$895</div>
                    </div>
                  </div>
                </div>
              </button>
              <button class="popularDestinationCard">
                <div class="pariscard">
                  <img class="cardimageIcon" alt="" src="/cardimage3@2x.png" />
                  <div class="destinationDetails">
                    <b class="destination">Tuscany</b>
                    <div class="details">
                      <div class="from">from</div>
                      <div class="price">$1245</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="viewAllBottom">
              <div class="viewAllDestinations1">View all destinations</div>
              <img class="notificationBellIcon" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <div class="recommendedHolidaysContainer">
            <div class="recHolidaysTitle">
              <b class="recommendedLocofyHolidays">Recommended locofy Holidays</b>
              <button class="viewAllTop">
                <div class="viewAllDestinations">View all holidays</div>
                <img class="notificationBellIcon" alt="" src="/arrowright1.svg" />
              </button>
            </div>
            <div class="recCardsContainer">
              <button class="recommendedHolidayCard">
                <img class="imageIcon" alt="" src="/image@2x.png" />
                <div class="holidayDetails">
                  <div class="recHolidaysTitle">
                    <div class="destinationParent">
                      <div class="swiss">Bali</div>
                      <div class="duration">4D3N</div>
                    </div>
                    <div class="div">$899</div>
                  </div>
                </div>
              </button>
              <button class="recommendedHolidayCard">
                <img class="imageIcon" alt="" src="/switzerlandimage@2x.png" />
                <div class="holidayDetails">
                  <div class="recHolidaysTitle">
                    <div class="destinationParent">
                      <div class="swiss">Swiss</div>
                      <div class="duration">6D5N</div>
                    </div>
                    <div class="div">$900</div>
                  </div>
                </div>
              </button>
              <button class="recommendedHolidayCard2">
                <img class="imageIcon" alt="" src="/boracayimage@2x.png" />
                <div class="holidayDetails">
                  <div class="recHolidaysTitle">
                    <div class="destinationParent">
                      <div class="swiss">Boracay</div>
                      <div class="duration">5D4N</div>
                    </div>
                    <div class="div">$699</div>
                  </div>
                </div>
              </button>
              <button class="recommendedHolidayCard3">
                <img class="imageIcon" alt="" src="/palawanimage@2x.png" />
                <div class="holidayDetails">
                  <div class="recHolidaysTitle">
                    <div class="destinationParent">
                      <div class="swiss">Palawan</div>
                      <div class="duration">4D3N</div>
                    </div>
                    <div class="div">$789</div>
                  </div>
                </div>
              </button>
            </div>
            <div class="viewHolidaysBottom">
              <div class="viewAllDestinations1">View all holidays</div>
              <img class="notificationBellIcon" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <div class="popularStays">
            <div class="popularStaysHeader">
              <div class="popularStaysTitle">
                <b class="popularStays1">Popular Stays</b>
              </div>
              <button class="viewAllTop" @click={onViewAllStaysButtonclick}>
                <div class="viewAllDestinations">View all stays</div>
                <img class="notificationBellIcon" alt="" src="/arrowright1.svg" />
              </button>
            </div>
            <div class="hotelCards">
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Entire bungalow</div>
                      <b class="title">Matterhorn Suites</b>
                      <div class="price5">$575/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.9</div>
                    </div>
                    <div class="reviews">(60 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc1@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">2-Story beachfront suite</div>
                      <b class="title">Discovery Shores</b>
                      <div class="price5">$360/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.8</div>
                    </div>
                    <div class="reviews">(116 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc2@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Single deluxe hut</div>
                      <b class="title">{`Arctic Hut `}</b>
                      <div class="price5">$420/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon1.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.7</div>
                    </div>
                    <div class="reviews">(78 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard3">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc3@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Deluxe King Room</div>
                      <b class="title">Lake Louise Inn</b>
                      <div class="price5">$244/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon1.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.6</div>
                    </div>
                    <div class="reviews">(63 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
            </div>
            <div class="mobileViewAllStays">
              <div class="viewAllDestinations1">View all stays</div>
              <img class="notificationBellIcon" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <div class="popularStays">
            <div class="popularStaysHeader">
              <div class="popularStaysTitle">
                <b class="popularStays1">Popular Stays</b>
              </div>
              <button class="viewAllTop" @click={onViewAllStaysButton1Click}>
                <div class="viewAllDestinations">View all stays</div>
                <img class="notificationBellIcon" alt="" src="/arrowright1.svg" />
              </button>
            </div>
            <div class="hotelCards">
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Entire bungalow</div>
                      <b class="title">Matterhorn Suites</b>
                      <div class="price5">$575/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon2.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.9</div>
                    </div>
                    <div class="reviews">(60 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc1@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">2-Story beachfront suite</div>
                      <b class="title">Discovery Shores</b>
                      <div class="price5">$360/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon2.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.8</div>
                    </div>
                    <div class="reviews">(116 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc2@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Single deluxe hut</div>
                      <b class="title">{`Arctic Hut `}</b>
                      <div class="price5">$420/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon3.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.7</div>
                    </div>
                    <div class="reviews">(78 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
              <div class="popularHotelCard3">
                <div class="hotelCard">
                  <img class="imageIcon1" alt="" src="/unsplashrlwe8f8anoc3@2x.png" />
                  <div class="stayDetails">
                    <div class="stayDetailsRows">
                      <div class="type">Deluxe King Room</div>
                      <b class="title">Lake Louise Inn</b>
                      <div class="price5">$244/night</div>
                    </div>
                    <button class="video">
                      <img class="videoIcon" alt="" src="/video-icon3.svg" />
                    </button>
                  </div>
                  <div class="rating">
                    <div class="stars">
                      <img class="staricon" alt="" src="/staricon.svg" />
                      <div class="rating1">4.6</div>
                    </div>
                    <div class="reviews">(63 reviews)</div>
                  </div>
                  <button class="moreDetailsButton">
                    <div class="button">More details</div>
                  </button>
                </div>
              </div>
            </div>
            <div class="mobileViewAllStays">
              <div class="viewAllDestinations1">View all stays</div>
              <img class="notificationBellIcon" alt="" src="/arrowright.svg" />
            </div>
          </div>
        </div>
        <div class="footerSection">
          <div class="subscribeSection">
            <div class="shareYourTravelsForm">
              <div class="formHeadingSection">
                <b class="recentSearches">subscribe to our newsletter</b>
                <b class="formTitle">Get weekly updates</b>
              </div>
              <form class="form">
                <div class="formText">
                  <div class="formDescription">Fill in your details to join the party!</div>
                </div>
                <div class="formFields">
                  <div class="formText">
                    <div class="input">
                      <div class="inactive">
                        <div class="muiautocompletetag">
                          <div class="chip">
                            <div class="container">
                              <div class="avatar">
                                <div class="op">F</div>
                              </div>
                              <div class="typography">
                                <div class="chip1">Chip</div>
                              </div>
                              <img class="notificationBellIcon" alt="" src="/cancel.svg" />
                            </div>
                          </div>
                          <div class="chip">
                            <div class="container">
                              <div class="avatar">
                                <div class="op">F</div>
                              </div>
                              <div class="typography">
                                <div class="chip1">Chip</div>
                              </div>
                              <img class="notificationBellIcon" alt="" src="/cancel.svg" />
                            </div>
                          </div>
                        </div>
                        <div class="yourName">Your name</div>
                        <div class="muiAutocompleteIndicator">
                          <div class="iconbutton">
                            <div class="unstylediconbutton">
                              <img class="closeIcon" alt="" src="/close.svg" />
                            </div>
                          </div>
                        </div>
                        <div class="arrow">
                          <img class="notificationBellIcon" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="formText">
                    <div class="input">
                      <div class="inactive">
                        <div class="muiautocompletetag">
                          <div class="chip">
                            <div class="container">
                              <div class="avatar">
                                <div class="op">F</div>
                              </div>
                              <div class="typography">
                                <div class="chip1">Chip</div>
                              </div>
                              <img class="notificationBellIcon" alt="" src="/cancel.svg" />
                            </div>
                          </div>
                          <div class="chip">
                            <div class="container">
                              <div class="avatar">
                                <div class="op">F</div>
                              </div>
                              <div class="typography">
                                <div class="chip1">Chip</div>
                              </div>
                              <img class="notificationBellIcon" alt="" src="/cancel.svg" />
                            </div>
                          </div>
                        </div>
                        <div class="yourName">Email address</div>
                        <div class="muiAutocompleteIndicator">
                          <div class="iconbutton">
                            <div class="unstylediconbutton">
                              <img class="closeIcon" alt="" src="/close.svg" />
                            </div>
                          </div>
                        </div>
                        <div class="arrow">
                          <img class="notificationBellIcon" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="searchButton">
                  <div class="submit">Submit</div>
                </div>
              </form>
            </div>
          </div>
          <footer class="footer">
            <div class="fickleflightBio">
              <img class="logoIcon" alt="" src="/logo.svg" />
              <div class="fickleFlightDescription">Fickle Flight is your one-stop locofy travel portal. We offer hassle free flight and hotel bookings. We also have all your needs in you online shop.</div>
              <div class="socialIcons">
                <img class="facebookIcon" alt="" src="/entyposocialfacebookwithcircle.svg" />
                <img class="facebookIcon" alt="" src="/entyposocialinstagramwithcircle.svg" />
                <img class="facebookIcon" alt="" src="/entyposocialtwitterwithcircle.svg" />
              </div>
            </div>
            <div class="seperator" />
            <div class="footerLinks">
              <div class="companySection">
                <div class="company">Company</div>
                <div class="companyLinks">
                  <div class="explore">About Us</div>
                  <div class="explore">News</div>
                  <div class="explore">Careers</div>
                  <div class="howWeWork">How we work</div>
                </div>
              </div>
              <div class="companySection">
                <div class="company">Support</div>
                <div class="companyLinks">
                  <div class="explore">Account</div>
                  <div class="howWeWork">Support Center</div>
                  <div class="explore">FAQ</div>
                  <div class="explore">Accessibility</div>
                </div>
              </div>
              <div class="moreSection">
                <div class="company">More</div>
                <div class="companyLinks">
                  <div class="explore">Covid Advisory</div>
                  <div class="explore">Airline Fees</div>
                  <div class="explore">Tips</div>
                  <div class="howWeWork">Quarantine Rules</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      </template>
      <script>
        import { defineComponent } from 'vue'
        // import { useRouter } from "vue-router";
        export default defineComponent({
          name: "VueComp",
          methods: {
            onTripMenuItemClick() {
              // router.push("/hotels-page");
            },
            onViewAllStaysButtonclick() {
              // router.push("/hotels-page");
            },
            onViewAllStaysButton1Click() {
              // router.push("/hotels-page");
            }
          }
        })
      </script>

<style scoped>
.fickleflightIcon {
  position: relative;
  width: 174px;
  height: 32px;
  flex-shrink: 0;
  }
  .explore {
  position: relative;
  }
  .search {
  position: relative;
  color: var(--color-darkslategray-200);
  }
  .hotels {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  font-size: var(--font-size-sm);
  font-family: var(--font-roboto);
  color: var(--color-darkslategray-200);
  text-align: left;
  display: inline-block;
  }
  .navigationMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-11xl);
  }
  .hamburgerMenuIcon {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  overflow: hidden;
  display: none;
  }
  .notificationBellIcon {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  overflow: hidden;
  }
  .avatarIcon {
  border-radius: var(--br-19xl);
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  object-fit: cover;
  }
  .accountSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
  }
  .navigationRight {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-17xl);
  }
  .topContainer {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }
  .topHeader {
  align-self: stretch;
  background-color: var(--color-white-100);
  height: 77px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xl) var(--padding-61xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: sticky;
  width: 100%;
  top: 0;
  background: #ffffff;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-cornflowerblue-200);
  font-family: var(--font-roboto);
  }
  .recentSearches {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  }
  .departure {
  position: relative;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  }
  .planeicon {
  position: relative;
  width: 118px;
  height: 24px;
  flex-shrink: 0;
  }
  .arrival {
  position: relative;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  text-align: right;
  }
  .toAndFrom {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }
  .departureInfo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-xl);
  color: var(--color-black);
  }
  .recentSearch {
  flex: 1;
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl);
  align-items: center;
  justify-content: center;
  gap: var(--gap-2xl);
  }
  .recentSearchesSection {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mini);
  }
  .iconVector {
  position: relative;
  width: 45px;
  height: 39px;
  flex-shrink: 0;
  }
  .icon {
  border-radius: var(--br-base);
  background-color: var(--color-palevioletred);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .text {
  position: relative;
  font-size: var(--font-size-mini);
  letter-spacing: 0.04em;
  font-family: var(--font-roboto);
  color: var(--color-gray-100);
  text-align: center;
  }
  .tripMenuItem {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  }
  .icon1 {
  border-radius: var(--br-base);
  background-color: var(--color-sandybrown);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .icon2 {
  border-radius: var(--br-base);
  background-color: var(--color-mediumspringgreen);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .icon3 {
  border-radius: var(--br-base);
  background-color: var(--color-gold);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .icon4 {
  border-radius: var(--br-base);
  background-color: var(--color-cornflowerblue-100);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .icon5 {
  border-radius: var(--br-base);
  background-color: var(--color-yellowgreen);
  display: flex;
  flex-direction: column;
  padding: var(--padding-smi) var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .tripMenu {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  }
  .prepareMenu {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
  font-size: var(--font-size-lg);
  color: var(--color-lightgray);
  }
  .flightDetails {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-17xl);
  font-size: var(--font-size-5xl);
  color: var(--color-cornflowerblue-300);
  }
  .upcomingFlightSection {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  font-size: var(--font-size-lg);
  }
  .mostPopularLocofy {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-11xl);
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--color-darkslategray-400);
  }
  .titleContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  }
  .viewAllDestinations {
  position: relative;
  font-size: var(--font-size-lg);
  letter-spacing: 0.04em;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: var(--color-cornflowerblue-300);
  text-align: right;
  }
  .viewAllTop {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-white-100);
  border-radius: var(--br-12xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  }
  .destinationsTitles {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  }
  .cardimageIcon {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-3xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 0;
  }
  .destination {
  flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.02em;
  font-family: var(--font-roboto);
  color: var(--color-white-100);
  text-align: left;
  }
  .from {
  position: relative;
  font-size: var(--font-size-base);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: var(--font-roboto);
  color: var(--color-white-100);
  text-align: right;
  }
  .price {
  position: relative;
  font-size: var(--font-size-19xl);
  line-height: 38px;
  font-family: var(--font-baloo-bhai);
  color: var(--color-white-100);
  text-align: right;
  }
  .details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-11xs);
  }
  .destinationDetails {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xs);
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  }
  .pariscard {
  align-self: stretch;
  border-radius: var(--br-3xs);
  height: 182px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xs);
  }
  .popularDestinationCard {
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-base);
  background-color: transparent;
  width: 25%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  }
  .popDestinationItems {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -16px;
  margin-right: -16px;
  }
  .viewAllDestinations1 {
  position: relative;
  letter-spacing: 0.04em;
  font-weight: 500;
  }
  .viewAllBottom {
  border-radius: var(--br-12xl);
  background-color: var(--color-white-100);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: right;
  }
  .popDestinationsMain {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-lg);
  color: var(--color-cornflowerblue-300);
  }
  .recommendedLocofyHolidays {
  flex: 1;
  position: relative;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  }
  .recHolidaysTitle {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  }
  .imageIcon {
  align-self: stretch;
  position: relative;
  border-radius: var(--br-3xs) var(--br-3xs) 0px 0px;
  max-width: 100%;
  overflow: hidden;
  height: 242px;
  flex-shrink: 0;
  object-fit: cover;
  }
  .duration {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  letter-spacing: 0.02em;
  font-family: var(--font-roboto);
  color: var(--color-darkgray-100);
  text-align: left;
  }
  .destinationParent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  }
  .holidayDetails {
  align-self: stretch;
  border-radius: 0px 0px var(--br-3xs) var(--br-3xs);
  background-color: var(--color-white-100);
  border: 1px solid var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl) var(--padding-base);
  align-items: center;
  justify-content: center;
  }
  .recommendedHolidayCard {
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-base);
  background-color: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  }
  .swiss {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.02em;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: var(--color-darkslategray-200);
  text-align: left;
  }
  .div {
  position: relative;
  font-size: var(--font-size-13xl);
  line-height: 34px;
  font-family: var(--font-baloo-bhai);
  color: var(--color-cornflowerblue-200);
  text-align: right;
  }
  .recommendedHolidayCard2 {
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-base);
  background-color: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  }
  .recommendedHolidayCard3 {
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-base);
  background-color: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  }
  .recCardsContainer {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -16px;
  margin-right: -16px;
  }
  .viewHolidaysBottom {
  border-radius: var(--br-12xl);
  background-color: var(--color-white-100);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: right;
  font-size: var(--font-size-lg);
  color: var(--color-cornflowerblue-300);
  }
  .recommendedHolidaysContainer {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xl);
  }
  .popularStays1 {
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  display: inline-block;
  width: 1126px;
  }
  .popularStaysTitle {
  flex: 1;
  position: relative;
  height: 35px;
  }
  .popularStaysHeader {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  }
  .imageIcon1 {
  align-self: stretch;
  position: relative;
  border-radius: var(--br-3xs);
  max-width: 100%;
  overflow: hidden;
  height: 200px;
  flex-shrink: 0;
  object-fit: cover;
  }
  .type {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.02em;
  color: var(--color-gray-100);
  }
  .title {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-3xl);
  letter-spacing: 0.04em;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipses;
  }
  .price5 {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  letter-spacing: 0.04em;
  }
  .stayDetailsRows {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  }
  .videoIcon {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  }
  .video {
  cursor: pointer;
  border: none;
  padding: var(--padding-12xs);
  background-color: transparent;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  }
  .stayDetails {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  }
  .staricon {
  position: relative;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  }
  .rating1 {
  position: relative;
  letter-spacing: 0.04em;
  font-weight: 500;
  }
  .stars {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  }
  .reviews {
  position: relative;
  letter-spacing: 0.04em;
  color: var(--color-cornflowerblue-200);
  }
  .rating {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  }
  .button {
  position: relative;
  font-size: var(--font-size-mini);
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: var(--color-cornflowerblue-200);
  text-align: left;
  }
  .moreDetailsButton {
  cursor: pointer;
  border: 1px solid var(--color-lavender);
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  border-radius: var(--br-9xs);
  box-sizing: border-box;
  height: 46px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .hotelCard {
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-3xs);
  background-color: var(--color-white-100);
  border: 1px solid var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  padding: var(--padding-mini) var(--padding-smi);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  }
  .hotelCard:hover {
  background-color: var(--color-gainsboro-100);
  cursor: pointer;
  }
  .popularHotelCard {
  flex: 1;
  height: 442px;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 16px;
  }
  .popularHotelCard3 {
  flex: 1;
  height: 442px;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  }
  .hotelCards {
  align-self: stretch;
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  font-size: var(--font-size-base);
  }
  .mobileViewAllStays {
  border-radius: var(--br-12xl);
  background-color: var(--color-white-100);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: right;
  font-size: var(--font-size-lg);
  color: var(--color-cornflowerblue-300);
  }
  .popularStays {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  }
  .homeContents {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--padding-51xl) var(--padding-61xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-61xl);
  max-width: 1280px;
  }
  .formTitle {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-100);
  }
  .formHeadingSection {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6xs);
  }
  .formDescription {
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 34px;
  font-family: var(--font-roboto);
  color: var(--color-slategray);
  text-align: left;
  }
  .formText {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  }
  .op {
  align-self: stretch;
  flex: 1;
  position: relative;
  font-size: var(--font-size-xs);
  letter-spacing: 0.4px;
  line-height: 166%;
  font-family: var(--font-roboto);
  color: var(--grey-grey-700);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .avatar {
  border-radius: var(--br-45xl);
  background-color: var(--grey-grey-400);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  }
  .chip1 {
  position: relative;
  font-size: var(--font-size-smi);
  letter-spacing: 0.16px;
  line-height: 18px;
  font-family: var(--font-roboto);
  color: var(--text-primary);
  text-align: left;
  }
  .typography {
  display: flex;
  flex-direction: column;
  padding: var(--padding-10xs) var(--padding-7xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .container {
  border-radius: var(--br-base);
  background-color: var(--grey-grey-300);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
  }
  .chip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  }
  .muiautocompletetag {
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  }
  .yourName {
  flex: 1;
  position: relative;
  font-size: var(--font-size-base);
  letter-spacing: 0.15px;
  line-height: 24px;
  font-family: var(--font-roboto);
  color: var(--color-gray-200);
  text-align: left;
  }
  .closeIcon {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  overflow: hidden;
  }
  .unstylediconbutton {
  border-radius: var(--br-29xl);
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
  }
  .iconbutton {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  }
  .muiAutocompleteIndicator {
  position: relative;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: none;
  }
  .arrow {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  }
  .inactive {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) 0px;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  }
  .input {
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-xs);
  align-items: flex-start;
  justify-content: flex-start;
  }
  .formFields {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  }
  .submit {
  position: relative;
  font-size: var(--font-size-mini);
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: var(--color-white-100);
  text-align: center;
  }
  .searchButton {
  border-radius: var(--br-9xs);
  background-color: var(--color-orange);
  width: 164px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  }
  .searchButton:hover {
  background-color: var(--color-darkgoldenrod-100);
  }
  .form {
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-white-100);
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.03);
  border: 1px solid var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xl) var(--padding-11xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
  }
  .shareYourTravelsForm {
  width: 549px;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  margin-left: auto;
  margin-right: auto;
  position: relative!important;
  left: auto!important;
  }
  .subscribeSection {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-33xl) var(--padding-xl);
  align-items: center;
  justify-content: center;
  background-image: url("/subscribe-section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  }
  .logoIcon {
  position: relative;
  width: 174px;
  height: 33px;
  flex-shrink: 0;
  overflow: hidden;
  }
  .fickleFlightDescription {
  align-self: stretch;
  position: relative;
  line-height: 27px;
  }
  .facebookIcon {
  position: relative;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  overflow: hidden;
  }
  .socialIcons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
  }
  .fickleflightBio {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  margin-bottom: 40px!important;
  }
  .seperator {
  align-self: stretch;
  position: relative;
  border-right: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  width: 1px;
  flex-shrink: 0;
  }
  .company {
  position: relative;
  line-height: 27px;
  font-weight: 500;
  }
  .howWeWork {
  position: relative;
  display: inline-block;
  width: 197px;
  }
  .companyLinks {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-base);
  }
  .companySection {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
  }
  .moreSection {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xl);
  }
  .footerLinks {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: var(--font-size-xl);
  }
  .footer {
  align-self: stretch;
  background: linear-gradient(91.74deg, #0b5ba8 25.38%, #299bd8);
  display: flex;
  flex-direction: row;
  padding: var(--padding-14xl) var(--padding-65xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-25xl);
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white-100);
  font-family: var(--font-roboto);
  }
  .footerSection {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-cornflowerblue-300);
  }
  .homepageTestCase {
  position: relative;
  background-color: var(--color-white-100);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-400);
  font-family: var(--font-roboto);
  }
  .homepageTestCase:hover {
  background: linear-gradient(#fff, #fff), #87550a;
  }
  
  @media screen and (max-width: 1200px) {
  .topHeader {
  padding-left: var(--padding-21xl);
  padding-right: var(--padding-21xl);
  box-sizing: border-box;
  }
  
  .recentSearch {
  width: 520px;
  }
  
  .footer {
  padding: var(--padding-21xl);
  box-sizing: border-box;
  }
  
  }
  @media screen and (max-width: 960px) {
  .navigationMenu {
  display: none;
  }
  
  .hamburgerMenuIcon {
  display: flex;
  }
  
  .topHeader {
  padding-left: var(--padding-5xl);
  padding-right: var(--padding-5xl);
  box-sizing: border-box;
  }
  
  .recentSearch {
  width: 100%;
  }
  
  .prepareMenu {
  width: 100%;
  }
  
  .flightDetails {
  flex-direction: column;
  }
  
  .viewAllTop {
  display: none;
  }
  
  .popularDestinationCard {
  padding: var(--padding-base);
  box-sizing: border-box;
  width: 50%;
  }
  
  .popDestinationItems {
  margin-left: -16px;
  margin-right: -16px;
  flex-wrap: wrap;
  margin-top: -16px;
  margin-bottom: -16px;
  }
  
  .viewAllDestinations1 {
  width: auto;
  }
  
  .viewAllBottom {
  display: flex;
  margin-top: 16px;
  }
  
  .recommendedHolidayCard {
  width: 50%;
  margin-bottom: 32px;
  }
  
  .recommendedHolidayCard2 {
  width: 50%;
  }
  
  .recommendedHolidayCard3 {
  width: 50%;
  }
  
  .recCardsContainer {
  margin-left: -16px;
  margin-right: -16px;
  flex-wrap: wrap;
  }
  
  .viewHolidaysBottom {
  display: flex;
  mrgin-top: 16px;
  }
  
  .mobileViewAllStays {
  display: flex;
  margin-top: 16px;
  }
  
  .homeContents {
  padding-left: var(--padding-11xl);
  padding-right: var(--padding-11xl);
  box-sizing: border-box;
  }
  
  .shareYourTravelsForm {
  padding: var(--padding-5xl) 0px;
  box-sizing: border-box;
  }
  
  .fickleflightBio {
  flex: unset;
  align-self: stretch;
  }
  
  .seperator {
  display: none;
  }
  
  .footerLinks {
  flex: unset;
  align-self: stretch;
  }
  
  .footer {
  flex-direction: column;
  padding: var(--padding-21xl) var(--padding-5xl) var(--padding-11xl);
  box-sizing: border-box;
  }
  
  }
  @media screen and (max-width: 420px) {
  .navigationRight {
  display: flex;
  }
  
  .recentSearch {
  flex: unset;
  align-self: stretch;
  }
  
  .recentSearchesSection {
  flex-direction: column;
  }
  
  .tripMenuItem {
  padding-bottom: var(--padding-xl);
  box-sizing: border-box;
  width: 33.33%;
  text-align: center;
  }
  
  .tripMenu {
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -28px;
  margin-right: -28px;
  }
  
  .mostPopularLocofy {
  font-size: var(--font-size-3xl);
  }
  
  .titleContainer {
  flex: unset;
  align-self: stretch;
  }
  
  .destinationsTitles {
  flex-direction: column;
  align-self: flex-start;
  }
  
  .popularDestinationCard {
  width: 100%;
  }
  
  .recommendedLocofyHolidays {
  font-size: var(--font-size-3xl);
  }
  
  .recommendedHolidayCard {
  width: 100%;
  margin-bottom: 32px;
  }
  
  .recommendedHolidayCard2 {
  width: 100%;
  margin-bottom: 32px;
  }
  
  .recommendedHolidayCard3 {
  width: 100%;
  }
  
  .popularStays1 {
  font-size: var(--font-size-3xl);
  }
  
  .title {
  font-size: var(--font-size-xl);
  }
  
  .moreDetailsButton {
  width: 100%!important;
  }
  
  .searchButton {
  width: 100%;
  }
  
  .shareYourTravelsForm {
  padding-left: var(--padding-5xl);
  padding-right: var(--padding-5xl);
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: relative!important;
  left: auto!important;
  width: 100%;
  }
  
  .companySection {
  margin-bottom: 40px!important;
  }
  
  .footerLinks {
  flex-direction: column;
  }
  
  .footer {
  padding: var(--padding-11xl) var(--padding-5xl);
  box-sizing: border-box;
  }
  
  .homepageTestCase {
  width: 100%;
  }
  .homepageTestCase:hover {
  background-color: var(--color-orange);
  }
  
  }
  </style>