
    <template>
        <div :style={position: 'relative', backgroundColor: '#fff', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', textAlign: 'left', fontSize: '16px', color: '#0c0047', fontFamily: ''Be Vietnam Pro'',}>
          <div :style={alignSelf: 'stretch', backgroundColor: '#00218f', display: 'flex', flexDirection: 'column', padding: '0px 0px 100px', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', gap: '50px', zIndex: '5', color: '#fff',}>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', padding: '40px 40px 0px', alignItems: 'center', justifyContent: 'space-between', zIndex: '0',}>
              <button :style={cursor: 'pointer', border: 'none', padding: '0', backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '10px',} @click='onFrameButtonClick'>
                <img :style={position: 'relative', width: '37.34px', height: '36px', flexShrink: '0',} alt='' src='/vector.svg' />
                <div :style={position: 'relative', fontSize: '18px', lineHeight: '21px', fontWeight: '600', fontFamily: ''Be Vietnam Pro'', color: '#fff', textAlign: 'left',}>GroundDesk</div>
              </button>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '40px',}>
                <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '40px',}>
                  <div :style={position: 'relative', letterSpacing: '-0.32px', lineHeight: '21px',}>Product</div>
                  <div :style={position: 'relative', letterSpacing: '-0.32px', lineHeight: '21px',}>Solution</div>
                  <div :style={position: 'relative', letterSpacing: '-0.32px', lineHeight: '21px',}>Customer</div>
                  <div :style={position: 'relative', letterSpacing: '-0.32px', lineHeight: '21px',}>Pricing</div>
                  <div :style={position: 'relative', letterSpacing: '-0.32px', lineHeight: '21px',}>About us</div>
                </div>
                <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '30px',}>
                  <button :style={cursor: 'pointer', border: '1px solid #fff', padding: '12px 45px', backgroundColor: 'transparent', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}>
                    <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', lineHeight: '22px', fontFamily: ''Be Vietnam Pro'', color: '#fff', textAlign: 'left',}>Login</div>
                  </button>
                  <button :style={cursor: 'pointer', border: 'none', padding: '12px 45px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}>
                    <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', lineHeight: '22px', fontFamily: ''Be Vietnam Pro'', color: '#6a4bff', textAlign: 'left',}>Sign up</div>
                  </button>
                </div>
              </div>
            </div>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '40px', zIndex: '1', textAlign: 'center', fontSize: '64px',}>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center',}>
                <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '81px', textTransform: 'capitalize', fontWeight: '700', display: 'inline-block', width: '813px', flexShrink: '0',}>We help to get Business solution ever</div>
              </div>
              <div :style={position: 'relative', fontSize: '17px', letterSpacing: '-0.41px', lineHeight: '32px', display: 'inline-block', width: '579px',}>We provide many features that you can use cheaply and easily. Try it now and get an interesting promo</div>
              <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '25px',}>
                <button :style={cursor: 'pointer', border: 'none', padding: '12px 45px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}>
                  <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', lineHeight: '22px', fontFamily: ''Be Vietnam Pro'', color: '#6a4bff', textAlign: 'left',}>Try for free</div>
                </button>
                <button :style={cursor: 'pointer', border: '1px solid #fff', padding: '12px 45px', backgroundColor: 'transparent', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}>
                  <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', lineHeight: '22px', fontFamily: ''Be Vietnam Pro'', color: '#fff', textAlign: 'left',}>Watch a demo</div>
                </button>
              </div>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}>
                <img :style={position: 'relative', borderRadius: '20px 0px 0px 20px', width: '599px', height: '777px', flexShrink: '0', objectFit: 'cover',} alt='' src='/dashboard--light-1@2x.png' />
                <img :style={position: 'relative', borderRadius: '0px 20px 20px 0px', width: '598px', height: '777px', flexShrink: '0', objectFit: 'cover',} alt='' src='/dashboard--dark-1@2x.png' />
              </div>
            </div>
            <button :style={cursor: 'pointer', border: 'none', padding: '0', backgroundColor: 'transparent', position: 'absolute', margin: '0', height: '2.33%', width: '3.13%', top: '3.76%', right: '3.7%', bottom: '93.91%', left: '93.17%', display: 'none', zIndex: '2',}>
              <img :style={position: 'absolute', height: '143.99%', width: '120.96%', top: '-21.99%', right: '-10.48%', bottom: '-21.99%', left: '-10.48%', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%',} alt='' src='/group.svg' />
            </button>
          </div>
          <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', padding: '40px 100px', alignItems: 'flex-start', justifyContent: 'space-between', zIndex: '4',}>
            <img :style={position: 'relative', width: '240px', height: '80px', flexShrink: '0', overflow: 'hidden',} alt='' src='/servicenow.svg' />
            <img :style={position: 'relative', width: '240px', height: '80px', flexShrink: '0', overflow: 'hidden',} alt='' src='/paychex.svg' />
            <div :style={position: 'relative', width: '240px', height: '80px', flexShrink: '0',}>
              <div :style={position: 'absolute', top: '0px', left: '0px', width: '160px', height: '80px',}>
                <img :style={position: 'absolute', top: 'calc(50% - 24px)', left: 'calc(50% - 82px)', width: '163.49px', height: '48px', objectFit: 'cover', display: 'none',} alt='' src='/freshbookslogo1-1@2x.png' />
                <div :style={position: 'absolute', width: '100%', top: '0px', right: '0px', left: '0px', height: '80px', overflow: 'hidden', display: 'none', opacity: '0.4',}>
                  <div :style={position: 'absolute', width: '100%', top: '0px', right: '0px', left: '0px', backgroundColor: '#37b8af', height: '24px', opacity: '0.24',} />
                  <div :style={position: 'absolute', top: '0px', left: '0px', backgroundColor: '#37b8af', width: '16px', height: '80px', opacity: '0.24',} />
                  <div :style={position: 'absolute', top: '0px', right: '0px', backgroundColor: '#37b8af', width: '16px', height: '80px', opacity: '0.24',} />
                  <div :style={position: 'absolute', width: '100%', top: '56px', right: '0px', left: '0px', backgroundColor: '#37b8af', height: '24px', opacity: '0.24',} />
                </div>
              </div>
              <img :style={position: 'absolute', top: 'calc(50% - 28px)', left: 'calc(50% - 68px)', width: '136.59px', height: '56px', objectFit: 'cover',} alt='' src='/github-logo-1@2x.png' />
            </div>
            <img :style={position: 'relative', width: '240px', height: '80px', flexShrink: '0', overflow: 'hidden',} alt='' src='/stripe.svg' />
            <img :style={position: 'relative', width: '240px', height: '80px', flexShrink: '0', overflow: 'hidden',} alt='' src='/zendesk.svg' />
          </div>
          <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '40px', zIndex: '3', textAlign: 'center', fontSize: '36px',}>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '25px',}>
              <b :style={position: 'relative', letterSpacing: '0.01em', textTransform: 'capitalize',}>Our Solution for your business</b>
              <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', color: '#969696', textAlign: 'left',}>We make it easy for users to use our platform, that's why we provide this benefit.</div>
            </div>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', padding: '0px 60px 50px', alignItems: 'flex-start', justifyContent: 'space-between', textAlign: 'left', fontSize: '14px', color: '#969696',}>
              <div :style={position: 'relative', width: '276px', height: '344px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '276px', height: '344px',} />
                <div :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '15px', backgroundColor: '#f2f2ff', width: '64px', height: '64px',} />
                <img :style={position: 'absolute', top: '44px', left: '44px', borderRadius: '15px', width: '40px', height: '40px', overflow: 'hidden',} alt='' src='/protect-cloud.svg' />
                <div :style={position: 'absolute', top: '166px', left: '32px', letterSpacing: '-0.41px', lineHeight: '170%', display: 'inline-block', width: '212px',}>All information and transactions will be well encrypted and double security in every activity. Safer transactions, calmer users</div>
                <div :style={position: 'absolute', top: '289px', left: '32px', fontSize: '16px', textDecoration: 'underline', letterSpacing: '-0.41px', fontWeight: '600', color: '#6a4bff',}>Learn more</div>
                <div :style={position: 'absolute', top: '120px', left: '32px', fontSize: '22px', letterSpacing: '-0.41px', lineHeight: '30px', fontWeight: '600', color: '#343434',}>Finance Security</div>
              </div>
              <div :style={position: 'relative', width: '276px', height: '344px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '276px', height: '344px',} />
                <div :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '15px', backgroundColor: '#f2f2ff', width: '64px', height: '64px',} />
                <img :style={position: 'absolute', top: '44px', left: '44px', borderRadius: '15px', width: '40px', height: '40px', overflow: 'hidden',} alt='' src='/secure.svg' />
                <div :style={position: 'absolute', top: '166px', left: '32px', letterSpacing: '-0.41px', lineHeight: '170%', display: 'inline-block', width: '212px',}>Synced from a Windows, Mac, or Ubuntu Linux computer to the cloud and vice versa without any problems.</div>
                <div :style={position: 'absolute', top: '286px', left: '32px', fontSize: '16px', textDecoration: 'underline', letterSpacing: '-0.41px', fontWeight: '600', color: '#6a4bff',}>Learn more</div>
                <div :style={position: 'absolute', top: '120px', left: '32px', fontSize: '22px', letterSpacing: '-0.41px', lineHeight: '30px', fontWeight: '600', color: '#343434',}>Synchronization</div>
              </div>
              <div :style={position: 'relative', width: '276px', height: '344px', flexShrink: '0', fontSize: '22px', color: '#343434',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '276px', height: '344px',} />
                <div :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '15px', backgroundColor: '#f2f2ff', width: '64px', height: '64px',} />
                <img :style={position: 'absolute', top: '44px', left: '44px', borderRadius: '15px', width: '40px', height: '40px', overflow: 'hidden',} alt='' src='/protect-cloud1.svg' />
                <div :style={position: 'absolute', top: '120px', left: '32px', letterSpacing: '-0.41px', lineHeight: '30px', fontWeight: '600',}>Cloud Drive</div>
                <div :style={position: 'absolute', top: '166px', left: '32px', fontSize: '14px', letterSpacing: '-0.41px', lineHeight: '170%', color: '#969696', display: 'inline-block', width: '212px',}>It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.</div>
                <div :style={position: 'absolute', top: '286px', left: '32px', fontSize: '16px', textDecoration: 'underline', letterSpacing: '-0.41px', fontWeight: '600', color: '#6a4bff',}>Learn more</div>
              </div>
              <div :style={position: 'relative', width: '276px', height: '344px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '276px', height: '344px',} />
                <div :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '15px', backgroundColor: '#f2f2ff', width: '64px', height: '64px',} />
                <img :style={position: 'absolute', top: '44px', left: '44px', borderRadius: '15px', width: '40px', height: '40px', overflow: 'hidden',} alt='' src='/target.svg' />
                <div :style={position: 'absolute', top: '166px', left: '32px', letterSpacing: '-0.41px', lineHeight: '170%', display: 'inline-block', width: '212px',}>Ease of accessing files locked by someone with the sharing with friend feature so you can enjoy it together.</div>
                <div :style={position: 'absolute', top: '286px', left: '32px', fontSize: '16px', textDecoration: 'underline', letterSpacing: '-0.41px', fontWeight: '600', color: '#6a4bff',}>Learn more</div>
                <div :style={position: 'absolute', top: '120px', left: '32px', fontSize: '22px', letterSpacing: '-0.41px', lineHeight: '30px', fontWeight: '600', color: '#343434',}>File Sharing</div>
              </div>
            </div>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'column', padding: '0px 0px 40px', alignItems: 'center', justifyContent: 'flex-start', gap: '22px', fontSize: '52px',}>
              <b :style={position: 'relative', letterSpacing: '0.01em', display: 'inline-block', width: '534px',}>Our pricing</b>
              <div :style={position: 'relative', fontSize: '14px', letterSpacing: '-0.41px', color: '#969696', display: 'inline-block', width: '537px',}>{`Pay securely online and manage the booking via desktop or via the mobile app.  `}</div>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', gap: '24px', textAlign: 'left', fontSize: '16px', color: '#343434',}>
                <div :style={position: 'relative', letterSpacing: '-0.41px', lineHeight: '24px', fontWeight: '500', display: 'inline-block', width: '61px', flexShrink: '0', zIndex: '0',}>Monthly</div>
                <div :style={position: 'relative', borderRadius: '48px', backgroundColor: '#f2f2ff', width: '100px', height: '48px', flexShrink: '0', zIndex: '1',} />
                <div :style={position: 'relative', letterSpacing: '-0.41px', lineHeight: '24px', fontWeight: '500', display: 'inline-block', width: '62px', flexShrink: '0', zIndex: '2',}>Annualy</div>
                <img :style={position: 'absolute', margin: '0', top: '8px', left: '103.5px', width: '32px', height: '32px', flexShrink: '0', zIndex: '3',} alt='' src='/ellipse-262.svg' />
              </div>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', fontSize: '24px',}>
                <div :style={borderRadius: '14px', backgroundColor: '#fff', boxShadow: '0px 10px 56px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'row', padding: '50px 24px', alignItems: 'flex-start', justifyContent: 'flex-start', cursor: 'pointer',} @click='onPricingClick'>
                  <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '48px',}>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '42px',}>
                      <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '37px',}>
                        <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px',}>
                          <b :style={position: 'relative', lineHeight: '32px', display: 'inline-block', width: '336px',}>Standart</b>
                          <div :style={position: 'relative', fontSize: '16px', lineHeight: '24px', color: '#969696', display: 'inline-block', width: '296px', height: '52px', flexShrink: '0',}>The national average cost of buying coin easy.</div>
                        </div>
                        <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', textAlign: 'left', fontSize: '56px',}>
                          <b :style={position: 'relative', lineHeight: '60px',}>$5</b>
                          <div :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', fontWeight: '500', color: '#969699', display: 'inline-block', width: '68px', flexShrink: '0',}>/month</div>
                        </div>
                      </div>
                      <button :style={cursor: 'pointer', border: 'none', padding: '12px 65px', backgroundColor: '#00218f', borderRadius: '8px', width: '336px', overflow: 'hidden', display: 'flex', flexDirection: 'row', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center',} @click='onCTASELECTPLANClick'>
                        <b :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', display: 'flex', fontFamily: ''Be Vietnam Pro'', color: '#fff', textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '288px', flexShrink: '0',}>Select Plan</b>
                      </button>
                    </div>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', textAlign: 'left', fontSize: '14px',}>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '11px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '305px', flexShrink: '0',}>5 collections</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>{`Worldwide accessbility `}</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>25 automation actions</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Access all features</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>24 hours support</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2156.svg' />
                        <div :style={position: 'relative', textDecoration: 'line-through', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Sync accross devices</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2156.svg' />
                        <div :style={position: 'relative', textDecoration: 'line-through', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Share with more 5 users</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div :style={borderRadius: '14px', backgroundColor: '#00218f', boxShadow: '0px 10px 56px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'row', padding: '50px 24px', alignItems: 'flex-start', justifyContent: 'flex-start', cursor: 'pointer', color: '#fff',} @click='onPricing1Click'>
                  <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '48px',}>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '42px',}>
                      <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '37px',}>
                        <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px',}>
                          <b :style={position: 'relative', lineHeight: '32px', display: 'inline-block', width: '336px',}>Extended</b>
                          <div :style={position: 'relative', fontSize: '16px', lineHeight: '24px', color: '#ececec', display: 'inline-block', width: '296px', height: '52px', flexShrink: '0',}>The national average cost of buying coin easy.</div>
                        </div>
                        <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', textAlign: 'left', fontSize: '56px',}>
                          <b :style={position: 'relative', lineHeight: '60px', display: 'inline-block', width: '98px', flexShrink: '0',}>$12</b>
                          <div :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', fontWeight: '500', color: '#969699', display: 'inline-block', width: '68px', flexShrink: '0',}>/month</div>
                        </div>
                      </div>
                      <button :style={cursor: 'pointer', border: 'none', padding: '12px 65px', backgroundColor: '#fff', borderRadius: '8px', width: '336px', overflow: 'hidden', display: 'flex', flexDirection: 'row', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center',} @click='onCTASELECTPLAN1Click'>
                        <b :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', display: 'flex', fontFamily: ''Be Vietnam Pro'', color: '#152c5b', textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '288px', flexShrink: '0',}>Select Plan</b>
                      </button>
                    </div>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', textAlign: 'left', fontSize: '14px',}>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '11px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '305px', flexShrink: '0',}>Unlimited collections</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Worldwide accessbiliy</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Unlimited automation actions</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Access all features</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>24 hours support</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Sync accross devices</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-21481.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Share with more 5 users</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div :style={borderRadius: '14px', backgroundColor: '#fff', boxShadow: '0px 10px 56px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'row', padding: '50px 24px', alignItems: 'flex-start', justifyContent: 'flex-start', cursor: 'pointer',} @click='onPricing2Click'>
                  <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '48px',}>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '42px',}>
                      <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '37px',}>
                        <div :style={display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px',}>
                          <b :style={position: 'relative', lineHeight: '32px', display: 'inline-block', width: '336px',}>Premium+</b>
                          <div :style={position: 'relative', fontSize: '16px', lineHeight: '24px', color: '#969696', display: 'inline-block', width: '296px', height: '52px', flexShrink: '0',}>The national average cost of buying coin easy.</div>
                        </div>
                        <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', textAlign: 'left', fontSize: '56px',}>
                          <b :style={position: 'relative', lineHeight: '60px',}>$16</b>
                          <div :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', fontWeight: '500', color: '#969699', display: 'inline-block', width: '68px', flexShrink: '0',}>/month</div>
                        </div>
                      </div>
                      <button :style={cursor: 'pointer', border: 'none', padding: '12px 65px', backgroundColor: '#00218f', borderRadius: '8px', width: '336px', overflow: 'hidden', display: 'flex', flexDirection: 'row', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center',} @click='onCTASELECTPLAN2Click'>
                        <b :style={position: 'relative', fontSize: '16px', letterSpacing: '0.01em', lineHeight: '24px', display: 'flex', fontFamily: ''Be Vietnam Pro'', color: '#fff', textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '288px', flexShrink: '0',}>Select Plan</b>
                      </button>
                    </div>
                    <div :style={display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', textAlign: 'left', fontSize: '14px',}>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '11px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '305px', flexShrink: '0',}>Unlimited collections</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Worldwide accessbiliy</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Unlimited automation actions</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Access all features</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>24 hours support</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Sync accross devices</div>
                      </div>
                      <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px',}>
                        <img :style={position: 'relative', width: '20px', height: '20px', flexShrink: '0',} alt='' src='/group-2148.svg' />
                        <div :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', width: '306px', flexShrink: '0',}>Share with more 10 users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :style={alignSelf: 'stretch', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '100px 120px', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '60px', zIndex: '2', fontSize: '40px',}>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}>
              <b :style={position: 'relative', letterSpacing: '0.01em', lineHeight: '81px',}>GroundDesk is loved by users</b>
              <div :style={display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '20px',}>
                <img :style={position: 'relative', width: '64px', height: '64px', flexShrink: '0', overflow: 'hidden', opacity: '0.5',} alt='' src='/arrowleftcircle.svg' />
                <img :style={position: 'relative', width: '64px', height: '64px', flexShrink: '0', overflow: 'hidden',} alt='' src='/arrowrightcircle.svg' />
              </div>
            </div>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', fontSize: '14px', color: '#969696',}>
              <div :style={position: 'relative', width: '384px', height: '376px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '384px', height: '376px',} />
                <div :style={position: 'absolute', top: '40px', left: '124px', fontSize: '18px', lineHeight: '28px', fontWeight: '600', color: '#343434',}>Briana Patton</div>
                <div :style={position: 'absolute', top: '74px', left: '124px', lineHeight: '22px',}>{`Manager `}</div>
                <div :style={position: 'absolute', top: '128px', left: '32px', lineHeight: '24px', display: 'inline-block', width: '320px',}>Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.</div>
                <img :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '20px', width: '72px', height: '72px', objectFit: 'cover',} alt='' src='/mask@2x.png' />
                <img :style={position: 'absolute', top: '320px', left: '32px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '58px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '84px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '110px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '136px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
              </div>
              <div :style={position: 'relative', width: '384px', height: '376px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '384px', height: '376px',} />
                <div :style={position: 'absolute', top: '40px', left: '124px', fontSize: '18px', lineHeight: '28px', fontWeight: '600', color: '#343434',}>Imelda Cowen</div>
                <div :style={position: 'absolute', top: '74px', left: '124px', lineHeight: '22px',}>Consultant</div>
                <div :style={position: 'absolute', top: '128px', left: '32px', lineHeight: '24px', display: 'inline-block', width: '320px',}>Sapien praesent tristique iaculis amet sit odio pellentesque. Sit nulla pretium amet, fames aenean. Nascetur augue vulputate sed pretium pretium. Scelerisque amet facilisis ut pulvinar morbi a egestas. Vel vulputate dolor nisl in non. Amet enim ultricies imperdiet ac.</div>
                <img :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '20px', width: '72px', height: '72px', objectFit: 'cover',} alt='' src='/mask1@2x.png' />
                <img :style={position: 'absolute', top: '320px', left: '32px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star1.svg' />
                <img :style={position: 'absolute', top: '320px', left: '58px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star1.svg' />
                <img :style={position: 'absolute', top: '320px', left: '84px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star1.svg' />
                <img :style={position: 'absolute', top: '320px', left: '110px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star1.svg' />
                <img :style={position: 'absolute', top: '320px', left: '136px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star1.svg' />
              </div>
              <div :style={position: 'relative', width: '384px', height: '376px', flexShrink: '0',}>
                <div :style={position: 'absolute', top: '0px', left: '0px', borderRadius: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', boxSizing: 'border-box', width: '384px', height: '376px',} />
                <div :style={position: 'absolute', top: '40px', left: '124px', fontSize: '18px', lineHeight: '28px', fontWeight: '600', color: '#343434',}>Alfred Walton</div>
                <div :style={position: 'absolute', top: '74px', left: '124px', lineHeight: '22px',}>Manager</div>
                <div :style={position: 'absolute', top: '128px', left: '32px', lineHeight: '24px', display: 'inline-block', width: '320px',}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra bibendum feugiat diam egestas ornare quisque tincidunt. Ipsum tortor, pretium lectus urna felis condimentum cursus at. Platea a, pulvinar lacinia id. Augue tortor nunc, ultrices nam in augue a.</div>
                <img :style={position: 'absolute', top: '32px', left: '32px', borderRadius: '20px', width: '72px', height: '72px', objectFit: 'cover',} alt='' src='/mask2@2x.png' />
                <img :style={position: 'absolute', top: '320px', left: '32px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '58px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '84px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '110px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
                <img :style={position: 'absolute', top: '320px', left: '136px', borderRadius: '20px', width: '24px', height: '24px', overflow: 'hidden',} alt='' src='/star.svg' />
              </div>
            </div>
          </div>
          <div :style={alignSelf: 'stretch', backgroundColor: '#f9f9f9', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '20px 120px', alignItems: 'flex-start', justifyContent: 'flex-start', zIndex: '1', fontSize: '18px', color: '#343434',}>
            <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '58px',}>
              <div :style={alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '319px',}>
                <div :style={position: 'relative', width: '235px', height: '137px', flexShrink: '0',}>
                  <div :style={position: 'absolute', top: '73px', left: '0px', lineHeight: '32px', display: 'inline-block', width: '235px',}>Manage file easily. Everywhere, everytime.</div>
                  <div :style={position: 'absolute', top: '0px', left: '0px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', color: '#0c0047',}>
                    <img :style={position: 'relative', width: '37.34px', height: '36px', flexShrink: '0',} alt='' src='/vector1.svg' />
                    <div :style={position: 'relative', lineHeight: '21px', fontWeight: '600',}>GroundDesk</div>
                  </div>
                </div>
                <div :style={position: 'relative', width: '645px', height: '226px', flexShrink: '0', fontSize: '16px',}>
                  <div :style={position: 'absolute', top: '30px', left: '159px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '29px',}>
                    <b :style={position: 'relative', fontSize: '18px', lineHeight: '20px', fontFamily: 'Manrope',}>Support</b>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>FAQ</div>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Privacy Policy</div>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Terms of Services</div>
                  </div>
                  <div :style={position: 'absolute', top: '30px', left: '366px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '29px',}>
                    <b :style={position: 'relative', fontSize: '18px', lineHeight: '20px', fontFamily: 'Manrope',}>Our Works</b>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Pricing</div>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Customer</div>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Product</div>
                  </div>
                  <div :style={position: 'absolute', top: '29px', left: '0px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '29px', fontFamily: 'Manrope',}>
                    <b :style={position: 'relative', fontSize: '18px', lineHeight: '20px',}>Company</b>
                    <div :style={position: 'relative', lineHeight: '20px', fontFamily: ''Be Vietnam Pro'', opacity: '0.8',}>About Us</div>
                    <div :style={position: 'relative', lineHeight: '20px', opacity: '0.8',}>Product</div>
                    <div :style={position: 'relative', lineHeight: '20px', fontFamily: ''Be Vietnam Pro'', opacity: '0.8',}>Testimonial</div>
                  </div>
                  <img :style={position: 'absolute', top: '29px', left: '525px', width: '120px', height: '167px', objectFit: 'cover',} alt='' src='/mask-group@2x.png' />
                </div>
              </div>
              <div :style={position: 'relative', fontSize: '16px', lineHeight: '28px', opacity: '0.6',}>©2022 GrounDesk. All right reserved</div>
            </div>
          </div>
          <img :style={position: 'absolute', margin: '0', top: '200px', left: '1967px', width: '2794px', height: '2336px', flexShrink: '0', zIndex: '0',} alt='' src='/ellipse-257.svg' />
        </div></template>
        <script lang='ts'>
        import { defineComponent } from 'vue'
            
            
    
        export default defineComponent({
          name: 'LandingPage',
          
          
          methods: {
      onFrameButtonClick() {
        window.open('https://one.google.com/about/plans');
      }
    ,
      onPricingClick() {
        window.open('https://google.com');
      }
    ,
      onCTASELECTPLANClick() {
        window.open('https://one.google.com/about/plans');
      }
    ,
      onPricing1Click() {
        window.open('https://google.com');
      }
    ,
      onCTASELECTPLAN1Click() {
        window.open('https://one.google.com/about/plans');
      }
    ,
      onPricing2Click() {
        window.open('https://google.com');
      }
    ,
      onCTASELECTPLAN2Click() {
        window.open('https://one.google.com/about/plans');
      }
    }
          })
        </script>