import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Nav from "../components/nav";
import Corner from "../components/corner";
import axios from "axios";
import Contacts from "./contacts";
import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";



const Home = (props: { initialAuth: AuthTokens }) => {
  const auth = useAuth(props.initialAuth);
  const { login, logout } = useAuthFunctions();
  
  return (
    <React.Fragment>
      <style>{`p { max-width: 400pt; }`}</style>
      <div className="container">
        
      
        {auth ? (
          <button type="button" onClick={() => logout()}>
            sign out
          </button>
        ) : (
          <React.Fragment>
            <button type="button" onClick={() => login()}>
              sign in
            </button>
          </React.Fragment>
        )}

        {auth ? (
          <React.Fragment>
            {console.log(auth.accessToken)}
            
            <h4>IdTokenData</h4>
            <div>
              <React.Fragment>
                <p>{auth.idTokenData.email}</p>
                <p>{auth.idTokenData["cognito:username"]}</p>
              </React.Fragment>
            </div>
            <h4>Access Token</h4>
            <div>{auth.accessToken}</div>
         
         <Contacts />
         
            
          </React.Fragment>
        ) : (
          <p>
            <small>
              Your email address will not be shared. You will not get any spam.
              It is only needed for the example.
            </small>
          </p>
      )
      
      }
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<{
  initialAuth: AuthTokens;
}> = async (context) => {
  const initialAuth = getServerSideAuth(context.req);

  return { props: { initialAuth } };
};


export default Home;