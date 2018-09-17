3.16 Helium Demo 1: Workflow Execution
The user initiates a workspace for computation in the form of a Docker container. The workspace provides a set of
tools for executing workflows including workflow execution engines modified to execute in the context of a cluster
scheduler and distributed file system such as those provided by PIVOT.
3.16.1 Workflow Execution (A): Via CWLTool Directly
The user connects to a Jupyter notebook executing in the container. The user uses Coil, Helium’s modified CWLTool,
to execute a workflow on the cluster. The user collects and reviews results.
3.16.2 Workflow Execution (B): Via a GA4GH Workflow Execution Service (WES)
The user loads a Python client for a Workflow Execution Service (WES). The user invokes the WES to execute a
specified workflow. The workflow is executed on the distributed cluster infrastructure via the Coil WES. The user
collects and reviews results via the distributed file system (iRODS).
3.17 Helium Demo 10: FAIRness Assessment of test data sets
FAIRness feedback via score:
The first 180 days simulated users (uploading datasets for the first time) will be given preliminary but real-time feedback
about their FAIR-TLC score.
For instance:
• Findability scores will be higher for longer metadata descriptions, and when a data dictionary is provided.
• Interoperability and connectivity scores will be higher when standard vocabularies and proper bioentity identifiers
have been used.
• Reusable scores will be higher when less restrictive licenses and when data exchange formats are used (where
applicable).
• Traceability scores will be higher when the provenance is documented and when any source data is properly
attributed. Note that
• Accessibility scores will be high for all contributions by virtue of being in the commons.
3.18 Helium Demo 11: Perform a FAIRness assessment of test data
sets via a web interface.
A specific example of how the aforementioned Fairness Assessment of a test dataset may be manually assessed and
scored via a Data Commons web interface is as follows:
• A user logs into CommonsShare web interface to perform FAIR-TLC actions demonstrating
FAIR-TLC (Findable, Accessible, Interoperable, Reusable, Traceable, Licensed, Connected;
http://dx.doi.org/10.5281/zenodo.203295).
• In this demo/assessment, we’ll use the example resource created in the “Upload and annotate novel data to at
least one stack via a web interface” demo titled “My Novel CWL Resource” that has has its Sharing status set
to “Public” indicating it can be viewed and downloaded by anyone.
• To demonstrate/assess Findable, the user navigates to the “Discover” tab and and enters into the text entry search
box any combination and/or subset of the resource’s Title, GUID, and/or Subject Keywords.
• For example, the user types in “novel” and the desired resource is demonstrated/assessed to be Findable with
rich metadata clearly associated with the resource.
• The resource is demonstrated/assessed to be Accessible by being retrievable via a public CommonsShare REST
API within a Swagger Framework that allows the resource data, metadata to be accessible with authentication
and authorization.
• The resource is demonstrated/assessed to be Interoperable by storing all resources in BagIt hierarchical file
packaging format (https://en.wikipedia.org/wiki/BagIt) downloadable with a resourcemap and resourcemetadata
stored in XML, i.e. a broadly applicable language for knowledge representation.
• The resource is demonstrated/assessed to be Reusable by basing the resourcemap and resourcemetadata
on the Open Archives Initiative’s Object Reuse and Exchange (OAI-ORE) standard
(https://www.openarchives.org/ore/).
• The resource is demonstrated/assessed to be Traceable with clearly denoted Attribution and Provenance with
derived content credited using its original identifier and linked using a persistent GUID reference clearly visible
below the resource title.
• The resource is demonstrated/assessed to be Licensed with clearly denoted licensure on the resource landing
page and clearly selectable choices of standard licenses as well as the ability for the user to enter an “other”
license with area to enter a License Statement, URL, and a checkbox to require agreement to rights statement
before downloading.
• The resource is demonstrated/assessed to be Connected to other resources including one or more resources the
current resource is derived from and/or is a version of by clearly denoting “Related” resources on the resource
landing page; related is the ability to denote the Relationship type from a drop-down menu of choices.
• As each aspect of this demonstration is performed via the Data Commons web interface, its Fairness is assessed
and scored.
3.19 Helium Demo 2: Register users via a web interface
• A new user without an account on CommonsShare goes to the CommonsShare landing page and selects “Sign
up now” or alternately selects “join CommonsShare” on the Sign In page.
• Upon clicking either of these links, the user is presented a form on the web page requesting the user’s First name,
Last name, Email address, Username, Organization, Password, Password (again), and a CAPTCHA verification
image/phrase. The user fills out the form and selects “Join CommonsShare & start collaborating.”
• Upon selecting that link, a message appears on the page saying “A verification email has be sent to {the email
address the user entered} with a link that must be clicked prior to your account being activated. If you do not
receive this email please check that you entered your address correctly, or your spam folder as sometimes the
email gets flagged as spam. If you entered an incorrect email address, please request an account again.”
• The user receives an email that states: “Welcome to CommonsShare. This email address was used
to request an account on commonsshare.org. If you originated the request, please use the link below
to verify your email address and activate your account. https://commonsshare.org/accounts/verify/f/4srdc98a07f2ea6d2bebbf4/?next=/
.If you did not originate this request you may ignore this email. The CommonsShare
Team. Upon clicking the verification link, the user lands on the CommonsShare landing page already
authenticated for the first time into their new CommonsShare account receiving a message that they were
“Successfully signed up.”
• If the user interacts erroneously in any of these steps, appropriate error messages are conveyed to the user so
that the user may adjust and pursue the correct course of action.
3.20 Helium Demo 3: Log-in newly registered users from another
stack
The steps are similar as helium demo 2: Register users via a Web interface above recognizing that the authentication
of stacks is based on OAuth with credentials common to these stacks.
• A Client_ID key, Client_Secret key, and Redirect_URL are provided on the RemoteStack.
• A “Login via CommonsShare” button is presented on the RemoteStack.
• Selecting the button takes the user to the following URL for CommonsShare login:
https://www.commonsshare.org/o/authorize/?redirect_uri=${ENCODED_REDIRECT_URL}&client_id=${CLIENT_ID}&response_type=code.
• Once user logs in CommonsShare, CommonsShare takes user back to REDIRECT_URL and append
a parameter code=${CODE} to the end REDIRECT_URL/?code=${CODE} https://remotestack.org/hsoauth/?code=${CODE}.
RemoteStack backend should extract this CODE and make a POST request to
https://www.commonsshare.org/o/token/.
• Note: this CODE has a very short life time. So the POST request should be made ASAP. The response of this
POST request is a json string contains ACCESS_TOKEN, and RemoteStack should save it on backend {"access_token":
${ACCESS_TOKEN}, "token_type": "Bearer", "expires_in": 2592000, "refresh_token": ${REFRESH_CODE},
"scope": "read write"}. RemoteStack uses this ACCESS_TOKEN to access CommonsShare
REST API (or cs_restclient).
3.21 Helium Demo 4: Access restricted data based on an authentication
system
• A user authenticates in CommonsShare via an Oauth-based system.
• Using the steps outlined in the “Upload and annotate novel data to at least one stack via a web interface” herein,
the user similarly uploads secure data and creates a resource with Abstract, Keywords, metadata, and GUID.
• The user may elect to make the resource Private to share only with trusted colleagues, Discoverable so the public
may discover the metadata but not access the secure data itself, or Public that enables the public to both discover
and download the secure data.
• For this demo, the user selects Private.
• The user selects the icon on the resource landing page to Manage who has access to the secure resource.
• A “Manage access” inset window pops-up enabling the user to add individual Users or Groups with “Can view,”
“Can edit,” or “Is owner” access controls.
3.22 Helium Demo 5: Displays an audit trail for access to restricted
data, including access to the same data from multiple stacks
• A user authenticates in CommonShare via an Oauth-based system and browses all the data sets for which she
has an owner role.
• Each dataset is displayed as an icon on which she can right click to display a menu of options. Among these
options she selects “Request audit trail” and is prompted with a window that displays logs with detailed information
about time of access, user and data operations performed on the data object such permission changes,
move, get and put.
• Similarly, a user with audit role can authenticates through a private API in CommonShare only accessible
through a VPN and request audit trail for active and inactive users that include all data access operations that
the user has performed in the last 30 days.
3.23 Helium Demo 6: Upload and annotate novel data to at least one
stack via a web interface
• A user navigates to the CommonsShare resource landing page.
• The user selects the appropriate typed resource, e.g. Composite.
• The user then drags-and-drops one or more novel datasets via the CommonsShare Web User Interface and also
enters a title for the resource.
• The user then selects “Create Resource.”
• CommonsShare responds back with a new web page indicating the CommonsShare resource with the novel data
has been successfully created, and prompts the user to enter an Abstract and Keywords for annotation.
• The user selects the edit icon to enter this information and annotate the resource.
• The user enters the appropriate text to annotate the novel data in the Abstract text entry box and selects “Save
Changes” when complete.
The user enters Keywords to add in the Subject area of the same page and selects “Add” for each individual
keyword.
• The user may elect to make the resource Private to share only with trusted colleagues, Discoverable so the public
may discover the metadata but not access the novel data itself, or Public that enables the public to both discover
and download the novel data.
• The user may choose from a list of standard licenses, but must pick one.
• The user can additionally edit the regular or add extended metadata in the process of annotating the novel data.
3.24 Helium Demo 7: Upload data and mint GUIDs on at least one
stack to via web interface
• A user navigates to the CommonsShare resource landing page.
• The user selects the appropriate typed resource, e.g. Composite.
• The user then drags-and-drops one or more datasets via the CommonsShare Web User Interface and also enters
a title for the resource.
• The user then selects “Create Resource.”
• CommonsShare responds back with a new web page indicating the CommonsShare resource with the data has
been successfully created and denoting the newly minted unique GUID, obtained from a Minid service, in the
URL of the browser as well as in the “How to Cite” area of the web page.
• The newly minted GUID is thus registered with Data Commons global GUID service.
3.25 Helium Demo 8: Full Text Search
Indexing:
• The user modifies or creates a data artifact within the commons. As the data is persisted, iRODS notices the
action and notifies the indexing pipeline. The pipeline indexes the content.
Search:
• The user is a data commons participant looking for information pertaining to a natural language word or phrase.
• The user goes to a web based user interface provided by CommonShare connected to the Helium ElasticSearch
infrastructure.
• The user enters a query, the query is processed by the infrastructure, and a list of relevant resources is displayed
to the user.
• The user selects the desired resource and navigates to it.
3.26 Helium Demo 9: Search over public knowledge resources for
omics data for tissue of interest
• The user is a bioinformatician looking to search public knowledge resources such as public data from data
stewards for data about gene expression in a particular tissue, perhaps to explore differences in gene regulation
across some parameter e.g. sex.
The user environment is a Jupyter notebook.
• The user invokes the CommonShare search API via a lightweight python client (transparently and reproducibly
downloaded in advance from pypi as specified in the notebook’s requirements.txt file).
• The user experiments with different search parameters, e.g. ‘kidney’.
• The API invocation triggers a search over standard semantic search APIs including the Monarch search API,
which returns a payload indicating data types available for tissue of interest, including MOD data, GO data and
GTEx, rendered in the notebook as a standard python dataframe.
• The payload also indicates data available for finer-grained or coarser-grained queries (based on the hierarchy of
the standard multi-species Uberon tissue anatomy), and based on this the user decides to generalize the search
to ‘genitourinary system’.
• This search profile includes gene interaction data from GTEx broken down by tissues in this system, pathway
and function data for genes involved in embryonic development of this system in GO, and model organism
gene expression data aggregated via Bgee, relevant phenotypes of interest [these could later be linked to dbgap
variables and used for interrogating TopMed data but this is out of scope for 180 days]. From here the user can
import the relevant data into the notebook environment.