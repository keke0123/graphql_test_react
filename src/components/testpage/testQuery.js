import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

class TestQuery extends Component {
    render(){
        return (
            <Query
                query={gql`
                    {
                        allAnimal {
                            edges {
                            node {
                                id
                                name
                            }
                            }
                        }
                    }
                `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error ...</p>;

                    return data.allAnimal.edges.map(({node}) => (
                        <div key={node.id}>
                            <h3>{node.name}</h3>
                        </div>
                        
                    ));
                }}
            </Query>
        );
    }
}

export default TestQuery;