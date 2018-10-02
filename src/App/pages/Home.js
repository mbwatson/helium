import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core'

import Container from '../../components/Layout/Container'
import Hero from '../../components/Hero/Hero'
import Paragraph from '../../components/Typography/Paragraph'
import TextLink from '../../components/Links/TextLink'

import GraphicPlaceholder from '../../devComponents/GraphicPlaceholder'

const homePage = ( props ) => {
    return (
        <Fragment>
        
            <Hero
                heading="Helium"
                subheading="A collaborative, multi-institutional team working to create a Data Commons that transforms the way we access, use, and generate data."
            />
            
            <Container>
                <Paragraph>
                    Team Helium is a member of the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> (DCPPC), which is working to build a <TextLink new to="https://www.nih.gov/">National Institute of Health</TextLink> (NIH) Data Commons with funding from the <TextLink new to="https://www.nih.gov/">NIH</TextLink> Office of the Directors.
                    We are one of the many highly collaborative and multi-institutional <TextLink new to="https://nihdatacommons.us/">DCPPC</TextLink>-funded teams to create a Data Commons that will transform the way we access, use, and generate data.
                </Paragraph>

                <GraphicPlaceholder height="300px" text="Team Flow to DCPPC"/>

                <Paragraph>
                    Each team has the name of an element, highlighting the synergistic nature of our endeavors.
                    We are <strong>Team Helium</strong>.
                </Paragraph>

                <Grid container spacing={ 16 }>
                    <Grid item xs={ 12 } sm={ 5 }>
                        <GraphicPlaceholder height="300px" text="Workstream, Briefly"/>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 7 } style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '1rem',
                    }}>    
                        <Paragraph>
                            We help accelerate new biomedical discoveries by providing a cloud-based platform
                            for investigators to store, share, access and compute on digital objects
                            (data, software, etc.) generated from biomedical research.
                        </Paragraph>
                    </Grid>
                </Grid>

            </Container>
        </Fragment>
    )
}

export default homePage

// These were on the Home page.
// Removed, but may decide to bring them back.
//
// import { Grid, Typography, Button } from '@material-ui/core'
// import Tiles from '../../components/Tiles/Tiles'
//
    // const tiles = [
    //     {
    //         icon: 'rocket',
    //         color: 'var(--color-lilac)',
    //         title: 'What is Helium?',
    //         body: 'Team Helium accelerates biomedical discoveries by providing a cloud-based platform for investigators to store, share, access, and compute with biomedical research data.',
    //         linkText: 'More about Helium',
    //         linkHref: '/about',
    //     },
    //     {
    //         icon: 'flask',
    //         color: 'var(--color-sky)',
    //         title: 'Demos',
    //         body: 'Lorem ipsum dolor sit ametsint, accusamus quas molestiae, provident saepe nostrum similique, eos veniam tempora porro cumque itaque in odio qui laborum modi, labore repudiandae.',
    //         linkText: 'View all Helium Demos',
    //         linkHref: '/demos',
    //     },
    //     {
    //         icon: 'users',
    //         color: 'var(--color-tan)',
    //         title: 'The Team',
    //         body: 'Helium is a diverse, highly collaborative, multi-institutional team working with the Data Commons Pilot Phase Consortium',
    //         linkText: 'Meet the Helium Team',
    //         linkHref: '/team',
    //     },
    // ]       
    //             <div className="horizontalRule"></div>
                
    //             <Tiles tiles={ tiles }/>

