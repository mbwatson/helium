import React from 'react';

import Layout from '../../../components/Layout/Layout'
import Hero from '../../../components/Hero/Hero'
import Content from '../../../components/Content/Content'
import Tile from '../../../components/Tile/Tile'

const homePage = ( props ) => {
    return (
        <Layout>
            <Hero />
            <Content>
                <div className="tileGrid">
                    <Tile
                        icon="rocket"
                        color="var(--color-lilac)"
                        title="What is Helium?"
                        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos enim, eligendi, cumque fugiat dolore eveniet doloremque, quam cupiditate modi architecto alias laborum. Modi quasi dignissimos dolor, culpa molestiae a doloribus."
                        linkText="Learn more about Helium"
                        linkHref="#"
                    />
                    <Tile
                        icon="flask"
                        color="var(--color-sky)"
                        title="Demos"
                        body="Lorem ipsum dolor sit ametsint, accusamus quas molestiae, provident saepe nostrum similique, eos veniam tempora porro cumque itaque in odio qui laborum modi, labore repudiandae."
                        linkText="View all Helium Demos"
                        linkHref="#"
                    />
                    <Tile
                        icon="users"
                        color="var(--color-tan)"
                        title="The Team"
                        body="Lorem ipsum dolor sit amet est commodi quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa assumenda repellat possimus molestiae, veniam necessitatibus quos quasi, sed esse. Molestias nihil deleniti magni voluptas, veritatis laudantium possimus amet maiores at!"
                        linkText="Meet the Helium Team"
                        linkHref="#"
                    />
                </div>

                <div className="horizontalRule"></div>

                <div className="resources">
                    <h2>Resources</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates harum saepe ad. Magni exercitationem expedita, neque eveniet id totam et, ea est aliquam in quisquam voluptatem unde, ipsum temporibus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates harum saepe ad. Magni exercitationem expedita, neque eveniet id totam et, ea est aliquam in quisquam voluptatem unde, ipsum temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates harum saepe ad. Magni exercitationem expedita, neque eveniet id totam et, ea est aliquam in quisquam voluptatem unde, ipsum temporibus?
                    </p>
                </div>
            </Content>
        </Layout>
    )
}

export default homePage