import React, { useEffect } from "react";
import "./styles/index.scss";
import WatchList from "./components/WatchList.js";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: SigninInput!) {
    signin(input: $input) {
      user {
        id
        username
        phone
        created_at
      }
      token
    }
  }
`;

const App = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN, {
    onError(err) {
      //onError grabs server specifed error, just if(error) look for everything

      //this is handling the error, then i can do if(error) return <modal>
      console.log(err.graphQLErrors);
    },
  });
  useEffect(() => {
    login({
      variables: {
        input: {
          username: "",
        },
      },
    });
  }, [login]);
  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="wrapper">
      <WatchList></WatchList>
    </div>
  );
};
export default App;
