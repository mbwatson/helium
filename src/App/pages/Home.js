import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core'

import Container from '../../components/Container/Container'
import Hero from '../../components/Hero/Hero'
import Heading from '../../components/Heading/Heading'
import TextLink from '../../components/Links/TextLink'
import Tiles from '../../components/Tiles/Tiles'


const homePage = ( props ) => {
    const tiles = [
        {
            icon: 'rocket',
            color: 'var(--color-lilac)',
            title: 'What is Helium?',
            body: 'Team Helium accelerates biomedical discoveries by providing a cloud-based platform for investigators to store, share, access, and compute with biomedical research data.',
            linkText: 'More about Helium',
            linkHref: '/about',
        },
        {
            icon: 'flask',
            color: 'var(--color-sky)',
            title: 'Demos',
            body: 'Lorem ipsum dolor sit ametsint, accusamus quas molestiae, provident saepe nostrum similique, eos veniam tempora porro cumque itaque in odio qui laborum modi, labore repudiandae.',
            linkText: 'View all Helium Demos',
            linkHref: '/demos',
        },
        {
            icon: 'users',
            color: 'var(--color-tan)',
            title: 'The Team',
            body: 'Helium is a diverse, highly collaborative, multi-institutional team working with the Data Commons Pilot Phase Consortium',
            linkText: 'Meet the Helium Team',
            linkHref: '/team',
        },
    ]       
    return (
        <Fragment>
            <Hero heading="Helium"
                subheading="A collaborative, multi-institutional team working to create a Data Commons that transforms the way we access, use, and generate data."
            />
            
            <Container>
                <Tiles tiles={ tiles }/>

                <div className="horizontalRule"></div>
                
                <Heading>About Helium</Heading>
                <Typography paragraph>
                    Team Helium is composed of data scientists, computer scientists,
                    information technology engineers, bioinformaticians, and
                    biomedical researchers from <TextLink new to="https://www.renci.org">UNC-CH/RENCI</TextLink>, <TextLink new to="https://www.rti.org/">RTI</TextLink>, <TextLink new to="https://www.lbl.gov/">Lawrence Berkeley National Lab</TextLink>, <TextLink new to="http://www.unm.edu/">University of New Mexico</TextLink>, <TextLink new to="https://oregonstate.edu/">Oregon State University</TextLink>, <TextLink new to="https://www.jax.org/">Jackson Laboratory</TextLink>, <TextLink new to="https://www.maastrichtuniversity.nl/">Maastricht University</TextLink>, and <TextLink new to="https://www.jhu.edu/">Johns Hopkins University</TextLink>. 
                </Typography>
                <Typography paragraph>
                    The NIH Data Commons will accelerate biomedical discovery by providing a cloud-based platform where investigators can store, share, access, and compute on digital objects including data, software, workflows, and more. The initial implementation is a Pilot Phase in which targeted high-value data sources will serve as test cases for the infrastructure to be developed. The test datasets come from the <TextLink new to="https://commonfund.nih.gov/gtex">Genotype-Tissue Expression</TextLink> (GTEx) and the <TextLink new to="https://www.nhlbi.nih.gov/science/trans-omics-precision-medicine-topmed-program">Trans-Omics for Precision Medicine</TextLink> (TOPMed) efforts, as well as several Model Organism Databases (MODs). Particular attention will be paid to ensuring that the resources produced by the NIH Data Commons Pilot will adhere to FAIR principles. This work is being carried out by the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> (DCPPC).
                </Typography>
                <Typography paragraph>
                    Researchers funded as part of the pilot phase of the DCPPC are iteratively building and testing a series of key capabilities &mdash; fundamental computational units &mdash; needed for the Commons to operate and meet standards for being FAIR &mdash; findable, accessible, interoperable, and reusable. Engaging the biomedical research community to develop the Data Commons helps ensure the needs of the research community are met. Each of the three different and high-value test case data sets help in setting policies, processes, and architecture for the Data Commons Pilot Phase with the aim of being able to use all three data sets simultaneously in analyses. The tools and best practices developed by the DCPPC will help researchers discover and interpret connections between human genes and traits and those of model organisms like fruit flies or mice.
                </Typography>
            </Container>
        </Fragment>
    )
}

export default homePage