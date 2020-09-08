import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, Grid, Item, Content } from './styles';
import { Container } from '../common/Container';
import { Card } from '../common/Card';

const Repository = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        github {
          viewer {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on GitHub_Repository {
                  id
                  name
                  url
                  description
                  homepageUrl
                }
              }
            }
          }
        }
      }
    `)

    return(
        <Wrapper as={Container} id="projects">
            <Grid>
                {data.github.viewer.pinnedItems.nodes.map((repository, i) => (
                    <Item key={i} as="a" href={repository.url} target="_blank" rel="noopener noreferrer">
                        <Card>
                            <Content>
                            <h4>{repository.name}</h4>
                            <p>{repository.description}</p>
                            </Content>
                        </Card>
                    </Item>
                ))}
            </Grid>
        </Wrapper>
    )
};

export default Repository;