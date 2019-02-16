import React, {Component} from 'react';

import client from '../../providers/apollo/apollo'

import gql from 'graphql-tag';

import { ApolloProvider } from 'react-apollo';

import TestQuery from './testQuery';

class TestPage extends Component {

    constructor(props){
        super(props);
    }

    _testBtn = () => {
        console.log("testBtn start");
        client.query({
            query:gql`
                {
                    allAnimal {
                        edges {
                          node {
                            id
                          }
                        }
                      }
                }
            `
        })
        .then(result => {
            console.log(result);
        });
    }

    _testBtn2 = () => {
        console.log("testBtn2 start");
    }

    render(){
        return (
            <div>
                <h3>test page</h3>
                <button onClick={()=>{
                    console.log("click testBtn");
                    this._testBtn();
                }}>testBtn</button>
                <h5>test again</h5>
                <button onClick={() => {
                    console.log("click testBtn2");
                }}
                >testBtn2</button>
                <ApolloProvider client={client}>
                    <div>
                        <TestQuery></TestQuery>
                    </div>
                </ApolloProvider>
            </div>
        );
    }
}

export default TestPage;