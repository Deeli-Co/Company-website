import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  useMediaQuery, 
  CircularProgress,
  AppBar,
  Toolbar,
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowLeft } from "phosphor-react";
import ReactMarkdown from "react-markdown";
import Logo from "../assets/logo.svg";

const TERMS_CONTENT = `**Deeli AI’s Privacy Policy**

**Last updated: June 15, 2025**

This Privacy Policy explains how Deeli AI, Inc. (“we,” “us,” “our”) collects, uses, and discloses personal information about individuals who use our websites [portal.deeli.ai](portal.deeli.ai) to access the free version of our product, purchase our products, or otherwise interact with us (collectively referred to as the “Services”). For the purposes of this Privacy Policy, we act as the data controller, and “you” and “your” refer to users of the Services, whether as a customer, website visitor, representative of a business partner, or any other individual whose information we have collected in accordance with this Privacy Policy.

Please review this Privacy Policy thoroughly. By using the Services, you consent to the collection, use, and disclosure of your information as outlined herein. This consent also extends to any information collected from you prior to your acceptance of this Privacy Policy. If you do not agree to these terms, please refrain from using or accessing the Services.

**UPDATES TO THIS POLICY**

We may update this Privacy Policy periodically, and any changes will be reflected by the “Last Updated” date at the top of this document. All changes take effect immediately upon posting, unless otherwise specified. Your continued use of the Services after any changes become effective constitutes your acceptance of the revised Privacy Policy. If you do not agree with any updates to this Privacy Policy, please discontinue using or accessing the Services.

**COLLECTION AND USE OF YOUR INFORMATION**

When you use or access the Services, we collect various categories of information about you from different sources.

Information You Provide through the Services

Certain features of the Services may require you to provide specific information about yourself. While you may choose not to provide this information, doing so could limit your ability to use or access certain features. The information you provide directly through our Services includes:

- **Identifiers**: Basic details such as your name, address, and email. We use this information as necessary to perform our contract with you to provide the Services and to communicate with you. With your consent, where required, we may also use this information to inform you about promotions, products, or services that may interest you.

- **Account Information**: Details such as your name, username, email, and password. We use this information to perform our contract with you by providing the Services and maintaining and securing your account. If you register an account, it is your responsibility to keep your login credentials secure. We recommend not sharing your access details with others. If you suspect that your account has been compromised, contact us immediately at <support@deeli.ai>.

- **Other Information You Provide**: Any additional information you include in communications with us that is necessary to perform our contract with you—for example, when sending a message through the Services or providing specific details for a requested report or analysis.

Automatically Collected Information

We, along with certain third parties, automatically collect specific information about your interaction with the Services (“Usage Data”) through the use of cookies, pixels, tags, and other tracking technologies (“Tracking Technologies”). Usage Data includes:

- **Device Information**: Details about your device, such as device type, operating system, unique device identifier, and Internet Protocol (IP) address.

- **Location Information**: Approximate geographic location.

- **Interaction Information**: Details about how you interact with the Services, including browser type, log data, date and time stamps, clickstream data, interactions with marketing emails, and ad impressions. Your inputs and outputs, including search queries, prompts, and other content that you input, upload, or submit to the Services, as well as the outputs generated—such as search results containing emerging technologies and AI-generated technical reports—and any collections or pages you create using the Services. This content may include personal information depending on its nature and association with your account. We use this information to perform our contract with you by generating and delivering new content as part of the Services. If you make this content publicly available or share it with third parties, please be aware that it may be stored, displayed, reproduced, published, or otherwise used or disclosed without your permission and may or may not be attributed to you.

We use Usage Data in our legitimate interests to customize features and content for you, perform analytics, and better understand user interactions with the Services. We may also allow third parties to use Usage Data for similar purposes.

Information Collected From External Sources  

We may gather information about you from external sources, including data we collect directly from third parties and information from third parties that you choose to share with us. Such information includes:

- **Analytics Information**: Data received from analytics providers such as Google Analytics, which we use in our legitimate interests to understand user interactions and improve our Services.

- **Public Information**: Information available through publicly accessible sources, such as articles, websites, journals, or other publicly available materials. We use this information where necessary to perform our contract with you.

Additional Uses of Personal Information\
In addition to the specific purposes mentioned above, we may use any of the personal information collected to:

- Provide and enhance the Services, including improving our AI models, matchmaking mechanisms, and recommendation algorithms.

- Maintain our business relationship by enhancing the safety and security of the Services (e.g., troubleshooting, data analysis, testing, system maintenance, and reporting).

- Provide customer support and send non-marketing communications related to the Services.

- Monitor and analyze trends, conduct internal research and development, and comply with applicable legal obligations.

- Enforce any applicable terms of service and protect the Services, our rights, and the rights of our employees, users, or other individuals.

If the laws in your jurisdiction do not recognize the legal basis of legitimate interest or another specified legal basis for certain uses of your personal data, your use of the Services constitutes consent to the processing of your personal data for those purposes. 

**COOKIES AND TRACKING TECHNOLOGIES**

As described in the above section titled, “Automatically Collected Information,” we collect personal information through certain Tracking Technologies. The use of such Tracking Technologies are deemed to be a “sale” / “sharing” / “targeted advertising” under applicable laws as further described below in the section titled, “Notice of Right to Opt-Out of Sale/Sharing.”

**THIRD-PARTY WEBSITES AND LINKS**

We may provide links to third-party websites or platforms, such as ArXiv and USPTO. If you choose to follow these links to sites or platforms that are not under our control or affiliated with us, we encourage you to review their applicable privacy notices, policies, and terms. We are not responsible for the privacy, security, or information practices of these sites or platforms.

Information you share on public or semi-public venues, such as third-party social networking platforms, may also be visible to other users of the Services and/or users of those third-party platforms without limitations on its use. Our inclusion of these links does not imply any endorsement of the content, owners, or operators of such platforms.

**HOW WE DISCLOSE YOUR PERSONAL INFORMATION**

In the last twelve months, we have shared the following categories of personal information with the following categories of recipients for business purposes:

- Company Group and Affiliate Entities 

  - **Identifiers**: Name, email address, and IP address.

Additionally, we may also disclose your information as needed to comply with applicable law or any obligations thereunder or to cooperate with law enforcement, judicial orders, and regulatory inquiries, to enforce any applicable terms of service, and to ensure the safety and security of our business, employees, and users. We do this in our legitimate interest to protect our Service and business and to comply with applicable law. If we are involved in a merger, sale, or acquisition of corporate entities or business units, the personal information we have collected from you may be part of the assets shared in connection with the due diligence process or the change of ownership.

We only use and disclose sensitive personal information for the purposes permitted under the CCPA or in accordance with your consent. 

**INFORMATION DEIDENTIFICATION** 

In our legitimate interests, we may deidentify or anonymize your information to ensure it cannot reasonably be used to infer personal details about you or be linked back to you (“Deidentified Information”). This process involves transforming data into a format that is no longer attributable to any specific individual or using information that has already been deidentified. Deidentified Information, along with data derived from further processing (“Derived Data”), may be used for various purposes, including but not limited to improving and optimizing our products and services. We ensure that any deidentified or derived data remains in its anonymized form and will not attempt to reidentify it, except as necessary to validate our deidentification methods in compliance with legal standards. We may share Deidentified Information and Derived Data with third parties, such as journal publisher, research partners, academic institutions, and other collaborators, to advance the training and performance of our AI models and enhance the quality of our product outputs.

**CHILDREN’S PRIVACY**

Children under the age of 18 are not permitted to use the Services. We do not intentionally seek or collect personal information from children under 18 years of age, or under the minimum age for processing personal information in regions where the age differs. If you are between the age of 18 and the minimum age required to consent to the processing of your personal information, please obtain consent from your parent or guardian before using the Services.

If we become aware that we have inadvertently collected information about a child under the age of 18 or the relevant minimum age in your jurisdiction, we will take commercially reasonable steps to delete such information. If you are a parent or guardian of a child under the applicable minimum age who has provided us with their personal information, please contact us using the information provided below to request its deletion.

**DATA PROTECTION, RETENTION, AND LIABILITY**

Despite our reasonable efforts to protect your information, no security measures are impenetrable, and we cannot guarantee “perfect security.” Any information you send to us electronically, while using the Services or otherwise interacting with us, may not be secure while in transit. We recommend that you do not use unsecure channels to send us sensitive or confidential information.

We retain your personal information for as long as is reasonably necessary for the purposes specified in this Privacy Policy. When determining the length of time to retain your information, we consider various criteria, including whether we need the information to continue to provide you the Services, resolve a dispute, enforce our contractual agreements, prevent harm, promote safety, security and integrity, or protect ourselves, including our rights, property, or products.

To the fullest extent permitted by applicable law, we disclaim liability for any disputes, claims, or damages arising from the collection, use, or disclosure of your information, provided such activities have been conducted in accordance with this Privacy Policy and any applicable agreements made with you.

**NOTICE OF RIGHT TO OPT-OUT OF SALE/SHARING**

Our use of Tracking Technologies is deemed to be a “sale” / “sharing” / “targeted advertising” under applicable laws and may result in the disclosure of your internet or other electronic network activity with third party advertising platforms and analytics providers. To opt-out of Sale/Share please refer to the section below titled “Your Privacy Rights And Choices.” Additionally, we have no actual knowledge of selling or sharing personal information of residents under the age of 16.

**DATA TRANSFERS**

The personal information we collect may be transferred to, stored in, processed in, or accessed from countries outside your jurisdiction of residence, as necessary for the purposes outlined in this Privacy Policy. This includes countries where our service providers or other third parties are located. Specifically, we maintain servers for the Services in the United States and have support, engineering, and other teams who may assist with the Services, including from the United States.

We process the personal information you provide by creating an account and using our Services in countries outside your jurisdiction to fulfill our contractual obligations to you and provide the Services. By using the Services and acknowledging this Privacy Policy, you consent to the transfer of your personal information to third parties (if any), which may involve cross-border transfers to regions or countries where we have databases or affiliates, particularly to the jurisdictions specified herein.

For data transfers outside the relevant jurisdiction, we implement appropriate safeguards. For instance, for UK and EEA users, we rely on the European Commission’s standard contractual clauses (the “Model Clauses”) or any equivalent contracts issued by the relevant UK authority, unless the transfer is to a country deemed by the European Commission or UK authorities to offer an adequate level of protection for personal information.

If you wish to inquire further about these data transfer mechanisms or request a copy of the Model Clauses, please contact us at <support@deeli.ai>.

**YOUR PRIVACY RIGHTS AND CHOICES**

Depending on where you reside, you may have some or all of the rights outlined below concerning the personal information we have collected about you. Please note that these rights are not absolute, and in some cases, we may decline your request as permitted by law.

- Right to Access / Know: You may have the right to request access to the personal information we hold about you or information about our collection, use, and disclosure practices, including the categories of personal information collected or disclosed for a business purpose.

- Right to Delete: You may have the right to request the deletion of personal information we maintain about you.

- Right to Correct: You may have the right to request corrections to inaccurate personal information we maintain about you.

- Right to Portability: You may have the right to receive a copy of the personal information we hold about you and request its transfer to a third party.

- Restriction of Processing: You may have the right to ask us to stop, suspend, or restrict the processing of your personal information.

- Right to Object: You may have the right to object to our processing of your personal information.

- Withdrawal of Consent: Where we rely on your consent to process personal information, you may withdraw this consent at any time by contacting us at <support@deeli.ai>. Please note that withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal. However, withdrawing consent may prevent us from delivering certain Services to you.

- Right to Opt-Out of Sale, Share, and Targeted Advertising: You have the right to opt-out of having your personal information sold or shared to third parties.  

To exercise any of these rights, you may contact us using the information provided below. We do not discriminate against individuals for exercising their rights. With the exception of submitting a request to opt-out of sale, share or targeted advertising, we may need to verify your identity by collecting information such as your email address or government-issued ID. You may also designate an authorized agent, in writing or through a power of attorney, to act on your behalf. We will require proof of authorization from the agent and may also need to verify your identity directly. You may also request to delete your account through the settings page or by contacting us at <support@deeli.ai>. Please contact us at <support@deeli.ai> to request deletion. 

**DO NOT TRACK**

Our website does not respond to “Do Not Track” (DNT) signals or similar mechanisms transmitted by web browsers. DNT is a preference you can set in your browser to inform websites that you do not want to be tracked. Since there is no universally accepted standard for how to respond to DNT signals, we currently do not take action in response to them.

**SHINE THE LIGHT DISCLOSURE**

Under California Civil Code Section 1798.83, California residents may opt out of the sharing of their Personal Information with unaffiliated third parties for those third parties’ direct marketing purposes. If you would like to opt out, you may do so by emailing us at the information in the Contact Us section.

**CONTACT US**

If you have any questions about our privacy practices or this Privacy Policy, please feel free to contact us at <support@deeli.ai>. If applicable, you may also reach out to your local representative using the contact details provided above. 
`;

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the terms of service markdown file
    const loadTerms = async () => {
      try {
        const response = await fetch("/privacy-policy.md");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        setTermsContent(`**Deeli AI's Privacy Policy**

Last updated: August 1st, 2024

This Privacy Policy explains how Deeli AI, Inc. (“we,” “us,” “our”) collects, uses, and discloses information about individuals who use our websites (portal.deeli.ai) to access the free version of our product, purchase our products, or otherwise interact with us (collectively referred to as the “Services”). For the purposes of this Privacy Policy, we act as the data controller, and “you” and “your” refer to users of the Services, whether as a customer, website visitor, representative of a business partner, or any other individual whose information we have collected in accordance with this Privacy Policy.

Please review this Privacy Policy thoroughly. By using the Services, you consent to the collection, use, and disclosure of your information as outlined herein. This consent also extends to any information collected from you prior to your acceptance of this Privacy Policy. If you do not agree to these terms, please refrain from using or accessing the Services.

 

**UPDATES TO THIS POLICY**

We may update this Privacy Policy periodically, and any changes will be reflected by the “Last Updated” date at the top of this document. If we make significant changes to how we use or disclose the information we collect, we will make reasonable efforts to notify you. This may include sending an email to the most recent email address you provided, posting a notice of the changes on the Services, or using other methods consistent with applicable law. Where required by applicable law, we will take additional steps to ensure compliance. If you do not agree with any updates to this Privacy Policy, please discontinue using or accessing the Services.

 

**COLLECTION AND USE OF YOUR INFORMATION**

When you use or access the Services, we collect various categories of information about you from different sources.

 

Information You Provide through the Services

Certain features of the Services may require you to provide specific information about yourself. While you may choose not to provide this information, doing so could limit your ability to use or access certain features. The information you provide directly through our Services includes:

- Contact Information: Basic details such as your name, address, and email. We use this information as necessary to perform our contract with you to provide the Services and to communicate with you. With your consent, where required, we may also use this information to inform you about promotions, products, or services that may interest you.

- Account Information: Details such as your name, username, email, and password. We use this information to perform our contract with you by providing the Services and maintaining and securing your account. If you register an account, it is your responsibility to keep your login credentials secure. We recommend not sharing your access details with others. If you suspect that your account has been compromised, contact us immediately at <support@deeli.ai>.

- Service Interaction Information: Your inputs and outputs, including search queries, prompts, and other content that you input, upload, or submit to the Services, as well as the outputs generated—such as search results containing emerging technologies and AI-generated technical reports—and any collections or pages you create using the Services. This content may include personal information depending on its nature and association with your account. We use this information to perform our contract with you by generating and delivering new content as part of the Services. If you make this content publicly available or share it with third parties, please be aware that it may be stored, displayed, reproduced, published, or otherwise used or disclosed without your permission and may or may not be attributed to you.

- Other Information You Provide: Any additional information you include in communications with us that is necessary to perform our contract with you—for example, when sending a message through the Services or providing specific details for a requested report or analysis.

 

Automatically Collected Information

We, along with certain third parties, automatically collect specific information about your interaction with the Services (“Usage Data”) through the use of cookies, pixels, tags, and other tracking technologies (“Tracking Technologies”). Usage Data includes:

- **Device Information**: Details about your device, such as device type, operating system, unique device identifier, and Internet Protocol (IP) address.

- **Location Information**: Approximate geographic location.

- **Interaction Information**: Details about how you interact with the Services, including browser type, log data, date and time stamps, clickstream data, interactions with marketing emails, and ad impressions.

We use Usage Data in our legitimate interests to customize features and content for you, perform analytics, and better understand user interactions with the Services. We may also allow third parties to use Usage Data for similar purposes.

 

Information Collected From External Sources  

We may gather information about you from external sources, including data we collect directly from third parties and information from third parties that you choose to share with us. Such information includes:

- **Analytics Information**: Data received from analytics providers such as Google Analytics, which we use in our legitimate interests to understand user interactions and improve our Services.

- **Public Information**: Information available through publicly accessible sources, such as articles, websites, journals, or other publicly available materials. We use this information where necessary to perform our contract with you.

 

Additional Uses of Information\
In addition to the specific purposes mentioned above, we may use any of the information collected to:

- Provide and enhance the Services, including improving our AI models, matchmaking mechanisms, and recommendation algorithms.

- Maintain our business relationship by enhancing the safety and security of the Services (e.g., troubleshooting, data analysis, testing, system maintenance, and reporting).

- Provide customer support and send non-marketing communications related to the Services.

- Monitor and analyze trends, conduct internal research and development, and comply with applicable legal obligations.

- Enforce any applicable terms of service and protect the Services, our rights, and the rights of our employees, users, or other individuals.

Any information we receive from external sources will be treated in accordance with this Privacy Policy. However, we are not responsible for the accuracy of the information provided to us by third parties or their policies and practices.

If the laws in your jurisdiction do not recognize the legal basis of legitimate interest or another specified legal basis for certain uses of your personal data, your use of the Services constitutes consent to the processing of your personal data for those purposes. 

 

**COOKIES AND TRACKING TECHNOLOGIES**

Most web browsers automatically accept cookies, but you can control how Tracking Technologies are used on your devices. You can block or delete cookies from your browser or limit cross-site tracking if you prefer. However, doing so may impact the functionality of certain features or the general operation of the Services.

 

**THIRD-PARTY WEBSITES AND LINKS**

We may provide links to third-party websites or platforms, such as ArXiv and USPTO. If you choose to follow these links to sites or platforms that are not under our control or affiliated with us, we encourage you to review their applicable privacy notices, policies, and terms. We are not responsible for the privacy, security, or information practices of these sites or platforms.

Information you share on public or semi-public venues, such as third-party social networking platforms, may also be visible to other users of the Services and/or users of those third-party platforms without limitations on its use. Our inclusion of these links does not imply any endorsement of the content, owners, or operators of such platforms.

 


## **INFORMATION DEIDENTIFICATION AND DISCLOSURE**

In our legitimate interests, we may deidentify or anonymize your information to ensure it cannot reasonably be used to infer personal details about you or be linked back to you (“Deidentified Information”). This process involves transforming data into a format that is no longer attributable to any specific individual or using information that has already been deidentified. Deidentified Information, along with data derived from further processing (“Derived Data”), may be used for various purposes, including but not limited to improving and optimizing our products and services. We ensure that any deidentified or derived data remains in its anonymized form and will not attempt to reidentify it, except as necessary to validate our deidentification methods in compliance with legal standards. We may share Deidentified Information and Derived Data with third parties, such as journal publisher, research partners, academic institutions, and other collaborators, to advance the training and performance of our AI models and enhance the quality of our product outputs.

 

We may also disclose your information as needed to comply with applicable law or any obligations thereunder or to cooperate with law enforcement, judicial orders, and regulatory inquiries, to enforce any applicable terms of service, and to ensure the safety and security of our business, employees, and users. We do this in our legitimate interest to protect our Service and business and to comply with applicable law.

**CHILDREN’S PRIVACY**

Children under the age of 13 are not permitted to use the Services. We do not intentionally seek or collect personal information from children under 13 years of age, or under the minimum age for processing personal information in regions where the age differs. If you are between the age of 13 and the minimum age required to consent to the processing of your personal information, please obtain consent from your parent or guardian before using the Services.

If we become aware that we have inadvertently collected information about a child under the age of 13 or the relevant minimum age in your jurisdiction, we will take commercially reasonable steps to delete such information. If you are a parent or guardian of a child under the applicable minimum age who has provided us with their personal information, please contact us using the information provided below to request its deletion.

 

**DATA PROTECTION, RETENTION, AND LIABILITY**

Despite our reasonable efforts to protect your information, no security measures are impenetrable, and we cannot guarantee “perfect security.” Any information you send to us electronically, while using the Services or otherwise interacting with us, may not be secure while in transit. We recommend that you do not use unsecure channels to send us sensitive or confidential information.

We retain your information for as long as is reasonably necessary for the purposes specified in this Privacy Policy. When determining the length of time to retain your information, we consider various criteria, including whether we need the information to continue to provide you the Services, resolve a dispute, enforce our contractual agreements, prevent harm, promote safety, security and integrity, or protect ourselves, including our rights, property, or products.

To the fullest extent permitted by applicable law, we disclaim liability for any disputes, claims, or damages arising from the collection, use, or disclosure of your information, provided such activities have been conducted in accordance with this Privacy Policy and any applicable agreements made with you.

 

**U.S. RESIDENTS**

This section supplements the other sections of this Privacy Policy and applies exclusively to residents of California or other U.S. states with privacy laws similar to the California Consumer Privacy Act (“CCPA”) that apply to us and require specific privacy notice disclosures. For the purposes of this section, references to “personal information” include “sensitive personal information,” as defined under the CCPA.

**Processing of Personal Information**

In the past 12 months, we have collected and disclosed the following categories of personal information and sensitive personal information (denoted by \*) about residents for business purposes:

- **Company Group**

  - Identifiers: Name, email address, and IP address.

- **Service Providers**

  - Identifiers: Name, email address, and IP address.

  - Personal information categories listed in the California Customer Records statute: Name, address, and telephone number.

  - Commercial information: Records of products or services purchased.

  - Internet or similar network activity: Usage Data.

  - Geolocation data: IP address.

  - Professional or employment-related information: Title, employer, professional background, and other information provided when applying for a job with us.

  - Non-public education information: Education records provided when applying for a job with us (collected by certain federally funded institutions).

  - Account access credentials\*: For accessing the Services.

The specific business or commercial purposes for collecting and disclosing your personal information, along with the categories of sources from which we collect your personal information, are detailed in the section above, **Collection and Use of Your Information**. We only use and disclose sensitive personal information for the purposes permitted under the CCPA or in accordance with your consent. The criteria for determining the retention period for your personal information are described in the section above, **Data Protection, Retention**, **and Liability**. 

 

**Selling and/or Sharing of Personal Information**

We do not “sell” or “share” (as defined under the CCPA) personal information, nor have we done so in the past 12 months. Additionally, we have no actual knowledge of selling or sharing personal information of residents under the age of 16.

**California Account Holders Under 18**

California residents under the age of 18 who have registered to use the Services and have posted content or information available to others on the Services may request its removal by contacting us at the email address provided in the section below, **Contact Us**. The request must specify that they personally posted the content or information and detail its location.

We will make reasonable good-faith efforts to remove the content from prospective public view or anonymize it so the resident cannot be individually identified. However, this process does not guarantee complete or comprehensive removal. For instance, third parties may have republished the content, and archived copies may be stored by search engines or other entities beyond our control.

 

 

**DATA TRANSFERS**

The personal information we collect may be transferred to, stored in, processed in, or accessed from countries outside your jurisdiction of residence, as necessary for the purposes outlined in this Privacy Policy. This includes countries where our service providers or other third parties are located. Specifically, we maintain servers for the Services in the United States and have support, engineering, and other teams who may assist with the Services, including from the United States.

We process the personal information you provide by creating an account and using our Services in countries outside your jurisdiction to fulfill our contractual obligations to you and provide the Services. By using the Services and acknowledging this Privacy Policy, you consent to the transfer of your personal information to third parties (if any), which may involve cross-border transfers to regions or countries where we have databases or affiliates, particularly to the jurisdictions specified herein.

For data transfers outside the relevant jurisdiction, we implement appropriate safeguards. For instance, for UK and EEA users, we rely on the European Commission’s standard contractual clauses (the “Model Clauses”) or any equivalent contracts issued by the relevant UK authority, unless the transfer is to a country deemed by the European Commission or UK authorities to offer an adequate level of protection for personal information.

If you wish to inquire further about these data transfer mechanisms or request a copy of the Model Clauses, please contact us at <support@deeli.ai>.

**YOUR RIGHTS AND CHOICES** Depending on your location, you may have some or all of the rights outlined below concerning the personal information we have collected about you. Please note that these rights are not absolute, and in some cases, we may decline your request as permitted by law.

- Right to Access / Know: You may have the right to request access to the personal information we hold about you or information about our collection, use, and disclosure practices, including the categories of personal information collected or disclosed for a business purpose.

- Right to Delete: You may have the right to request the deletion of personal information we maintain about you.

- Right to Correct: You may have the right to request corrections to inaccurate personal information we maintain about you.

- Right to Portability: You may have the right to receive a copy of the personal information we hold about you and request its transfer to a third party.

- Restriction of Processing: You may have the right to ask us to stop, suspend, or restrict the processing of your personal information.

- Right to Object: You may have the right to object to our processing of your personal information.

- Withdrawal of Consent: Where we rely on your consent to process personal information, you may withdraw this consent at any time by contacting us at <support@deeli.ai>. Please note that withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal. However, withdrawing consent may prevent us from delivering certain Services to you.

To exercise any of these rights, you may contact us using the information provided below. We do not discriminate against individuals for exercising their rights. Before responding to your request, we may need to verify your identity by collecting information such as your email address or government-issued ID. You may also designate an authorized agent, in writing or through a power of attorney, to act on your behalf. We will require proof of authorization from the agent and may also need to verify your identity directly. You may also request to delete your account through the settings page or by contacting us at <support@deeli.ai>. If you delete your account, we aim to delete your personal information from our servers within 30 days. Please contact us at <support@deeli.ai> to request deletion. 

 

**CONTACT US**

If you have any questions about our privacy practices or this Privacy Policy, please feel free to contact us at <support@deeli.ai>. If applicable, you may also reach out to your local representative using the contact details provided above.

 
`);
      } catch (error) {
        console.error("Error loading terms of service:", error);
        // Fallback content if markdown file is not found
        setTermsContent(`# Terms of Service

**Last Updated:** ${new Date().toLocaleDateString()}

Welcome to Deeli AI. These Terms of Service govern your use of our website and services.

## 1. Acceptance of Terms

By accessing or using our Service, you agree to be bound by these Terms.

## 2. Description of Service

Deeli AI provides AI-powered insights and analytics services designed to help businesses understand trends and make data-driven decisions.

## 3. Contact Information

If you have any questions about these Terms, please contact us at support@deeli.ai.

---

*Please note: This is fallback content. The full terms of service should be loaded from the markdown file.*`);
      } finally {
        setLoading(false);
      }
    };

    loadTerms();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const markdownComponents = {
    h1: ({ children }) => (
      <Typography
        variant="h1"
        sx={{
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: 700,
          color: "#132B24",
          marginBottom: "1.5rem",
          marginTop: "2rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h2"
        sx={{
          fontSize: isMobile ? "1.5rem" : "2rem",
          fontWeight: 600,
          color: "#132B24",
          marginBottom: "1rem",
          marginTop: "2rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h3"
        sx={{
          fontSize: isMobile ? "1.25rem" : "1.5rem",
          fontWeight: 600,
          color: "#132B24",
          marginBottom: "0.75rem",
          marginTop: "1.5rem",
          fontFamily: "Manrope",
        }}
      >
        {children}
      </Typography>
    ),
    p: ({ children }) => (
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: "#333333",
          marginBottom: "1rem",
          fontFamily: "Aileron",
        }}
      >
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <Box
        component="ul"
        sx={{
          paddingLeft: "1.5rem",
          marginBottom: "1rem",
          "& li": {
            marginBottom: "0.5rem",
            color: "#333333",
            fontFamily: "Aileron",
          },
        }}
      >
        {children}
      </Box>
    ),
    ol: ({ children }) => (
      <Box
        component="ol"
        sx={{
          paddingLeft: "1.5rem",
          marginBottom: "1rem",
          "& li": {
            marginBottom: "0.5rem",
            color: "#333333",
            fontFamily: "Aileron",
          },
        }}
      >
        {children}
      </Box>
    ),
    strong: ({ children }) => (
      <Typography
        component="strong"
        sx={{
          fontWeight: 600,
          color: "#132B24",
        }}
      >
        {children}
      </Typography>
    ),
    em: ({ children }) => (
      <Typography
        component="em"
        sx={{
          fontStyle: "italic",
          color: "#555555",
        }}
      >
        {children}
      </Typography>
    ),
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          color: "#132B24",
        }}
      >
        <Toolbar>
          <Button
            startIcon={<ArrowLeft size={20} />}
            onClick={handleBack}
            sx={{
              color: "#132B24",
              textTransform: "none",
              fontFamily: "Aileron",
              fontSize: "1rem",
            }}
          >
            Back
          </Button>
          <Box 
            sx={{ 
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              loading="lazy"
              src={Logo}
              alt="Logo"
              style={{
                height: 33.28,
                width: 105.42,
              }}
            />
          </Box>
          <Box sx={{ width: "80px" }} /> {/* Spacer for centering */}
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="md"
        sx={{
          paddingTop: "2rem",
          paddingBottom: "3rem",
          paddingX: isMobile ? "1rem" : "2rem",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <CircularProgress sx={{ color: "#096B5F" }} />
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: isMobile ? "1.5rem" : "2rem",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ReactMarkdown components={markdownComponents}>
              {TERMS_CONTENT}
            </ReactMarkdown>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;