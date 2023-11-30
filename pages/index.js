import React from "react";
//internal import

import { useStateContext } from "../Context/index";
import {  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale} from "../Components/index"

const index = () => {
  const {
    buyToken,
    connectWallet,
    setAddress,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address,
    TOKEN_ICO,
    transferNativeToken}=useStateContext();
  return(

    <div className="v_dark">
    <Header
    address={address}
    setAddress={setAddress}
    connectWallet={connectWallet}
    />
    <Banner transferNativeToken={transferNativeToken} />
    <Service />
    <About />
    <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
    <Distribution />
    <MobileApp/>
    
    <Contact/>
    <Footer/>

   
    </div>
  );
};

export default index;
