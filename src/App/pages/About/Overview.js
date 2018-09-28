import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'

import Title from '../../../components/Typography/Title'
import Paragraph from '../../../components/Typography/Paragraph'
import TextLink from '../../../components/Links/TextLink'

import GraphicPlaceholder from '../../../devComponents/GraphicPlaceholder'

const overviewPage = ( props ) => {
    return (
        <Fragment>

            <Title>Overview</Title>
        
            <Paragraph>
                Team Helium is composed of data scientists, computer scientists,
                information technology engineers, bioinformaticians, and biomedical researchers
                from <TextLink new to="https://www.renci.org">UNC-CH/RENCI</TextLink>, <TextLink new to="https://www.rti.org/">RTI</TextLink>, <TextLink new to="https://www.lbl.gov/">Lawrence Berkeley National Lab</TextLink>, <TextLink new to="http://www.unm.edu/">University of New Mexico</TextLink>, <TextLink new to="https://oregonstate.edu/">Oregon State University</TextLink>, <TextLink new to="https://www.jax.org/">Jackson Laboratory</TextLink>, and <TextLink new to="https://www.maastrichtuniversity.nl/">Maastricht University</TextLink>. 
            </Paragraph>

            <Grid container spacing={ 32 }>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }><GraphicPlaceholder height="100px" text="Partner"/></Grid>
            </Grid>
            
            <Paragraph>
                The NIH Data Commons will accelerate biomedical discovery by providing a cloud-based platform where investigators can store, share, access, and compute on digital objects including data, software, workflows, and more.
            </Paragraph>
            
            <GraphicPlaceholder height="200px" text="Cloud-based Architecture"/>
            
            <Grid container spacing={ 32 }>
                <Grid item xs={ 12 } sm={ 6 } md={ 8 } style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', } }>
                    <Paragraph>
                        The initial implementation is a Pilot Phase in which targeted <TextLink new to="https://commonfund.nih.gov/commons/testcasedatasets">high-value data sources</TextLink>
                        will serve as test cases for the infrastructure to be developed.
                        The test datasets come from the <TextLink new to="https://commonfund.nih.gov/gtex">Genotype-Tissue Expression</TextLink> (GTEx) and
                        the <TextLink new to="https://www.nhlbi.nih.gov/science/trans-omics-precision-medicine-topmed-program">Trans-Omics for Precision Medicine</TextLink> (TOPMed) efforts,
                        as well as several Model Organism Databases (MODs).
                        Particular attention will be paid to ensuring that the resources produced by the NIH Data Commons Pilot will adhere to FAIR principles.
                        This work is being carried out by the <TextLink new to="https://nihdatacommons.us/">Data Commons Pilot Phase Consortium</TextLink> (DCPPC).
                    </Paragraph>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 } style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', } }>
                    <GraphicPlaceholder height="300px" text="DCPPC"/>
                </Grid>
            </Grid>

            <Paragraph>
                This vision requires the efforts of a multidisciplinary investigative team with complementary expertise in biomedicine, cloud architecture, software engineering, analytical tools, and data harmonization. Each of eight defined Key Capabilities (KCs) addresses specific challenges faced by scientists working with large-scale biomedical data. The proposed projects are designed so that each KC has unique objectives and deliverables in the form of stand-alone demonstrations and products.
                Yet together, the KCs form a continuum of insights and approaches that capture the five "V"s of data (Velocity, Volume, Value, Variety, and Veracity) and reflect FAIR principles (Findable, Accessible, Interoperable, and Reusable).
            </Paragraph>

            <Paragraph>
                Researchers funded as part of the pilot phase of the <TextLink new to="https://nihdatacommons.us/">DCPPC</TextLink> are iteratively building and testing a series of <TextLink to="dcppc">key capabilities</TextLink> &mdash; fundamental computational units &mdash; needed for the Commons to operate and meet standards for being FAIR &mdash; findable, accessible, interoperable, and reusable.
                Engaging the biomedical research community to develop the Data Commons helps ensure the needs of the research community are met.
                Each of the three different and high-value test case data sets help in setting policies, processes, and architecture for the Data Commons Pilot Phase with the aim of being able to use all three data sets simultaneously in analyses.
                The tools and best practices developed by the <TextLink new to="https://nihdatacommons.us/">DCPPC</TextLink> will help researchers discover and interpret connections between human genes and traits and those of model organisms like fruit flies or mice.
            </Paragraph>
            
        </Fragment>
    )
}

export default overviewPage