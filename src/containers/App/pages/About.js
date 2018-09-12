import React from 'react';

import Layout from '../../../components/Layout/Layout'
import ContentBlock from '../../../components/ContentBlock/ContentBlock'

const homePage = ( props ) => {
    return (
        <Layout>
            <ContentBlock>
                <h1>About Helium</h1>
                
                <h2>Data Commons Pilot Phase Consortium (DCPPC)</h2>
                
                <p>
                    The NIH Data Commons will accelerate biomedical discovery by providing a cloud-based platform
                    where investigators can store, share, access, and compute on digital objects including data,
                    software, workflows, and more. The initial implementation is a Pilot Phase in which targeted
                    high-value data sources will serve as test cases for the infrastructure to be developed.
                    The test datasets will come from the Genotype-Tissue Expression (GTEx) and the Trans-Omics
                    for Precision Medicine (TOPMed) efforts, as well as several Model Organism Databases (MODs).
                    Particular attention will be paid to ensuring that the resources produced by the NIH Data Commons Pilot
                    will adhere to FAIR principles. This work is being carried out by the Data Commons Pilot Phase Consortium (DCPPC).
                </p>

            </ContentBlock>

            <ContentBlock color="sky">
                <h3>Activities within the DCPPC are organized around establishing nine Key Capabilities:</h3>

                <ul>
                    <li>KC1: Establish community-endorsed guidelines and metrics to govern what it means for digital objects in the Commons to be FAIR.</li>
                    <li>KC2: Establish global unique identifiers (GUID) for FAIR biomedical digital objects.</li>
                    <li>KC3: Provide open standard APIs and maximize their ability to be reused. </li>
                    <li>KC4: Build cloud-agnostic architectures and frameworks for data exchange and analysis workflow use.</li>
                    <li>KC5: Create workspaces for users to engage in analysis of diverse datasets with established pipelines and then visualize the results. </li>
                    <li>KC6: Establish approaches to address concerns around research ethics, privacy, and security.</li>
                    <li>KC7: Deploy robust indexing and search systems.</li>
                    <li>KC8: Develop use cases around DCPPC resources to test the ability of the products to enable researchers to address scientific questions of interest.</li>
                    <li>KC9: Engage in training and outreach.</li>
                </ul>

            </ContentBlock>
        </Layout>
    )
}

export default homePage