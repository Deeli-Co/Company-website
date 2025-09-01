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

const TERMS_CONTENT = `**Deeli AI, Inc. Terms of Service**

**Last Updated: June 15, 2025**

Thank you for using Deeli AI!

These Terms of Service (the “Terms”) apply to your access to and use of Deeli’s website available at www\.deeli.ai (the “Website”) and the artificial-intelligence powered platform detailed on the Website, specifically Deeli Intelligence (the “Platform”, and collectively with the Website, the “Services”). These Terms form an agreement between you or the entity you represent (“Customer” or “you”) and Deeli AI, Inc. (“Deeli” or “we”). By accessing or using the Services, you agree to these Terms.

If you do not understand or agree to these Terms, please do not use the Services. For purposes of these Terms, “you” and “your” means you as the user of the Services. If you use the Services on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.

**1. Who We Are**

- Deeli is an AI-driven technology scouting and matchmaking company. Our mission is to enable algorithmic discovery of emerging technologies and the innovators developing them⁠. Our Services aim to provide an intelligence layer for frontier technology—turning scattered academic papers, patents, grants, startup signals, and market trends into actionable insights.

**2. Who You Are**

- Customers may be individuals or organizations who seek to explore, analyze, or track emerging technologies and the pioneering entities behind them, or the individuals or organizations pioneering, researching, or innovating such novel technologies, solutions, or products. In accordance with these Terms, Customers may provide different Customer Content to Deeli in connection with their use of the Services.

 **3. Use of the Services** 

- Generally. Subject to these Terms and the terms of any applicable Order, we grant you and your Users a limited, non-exclusive, non-sublicensable, non-transferable, revokable right to do the following during the Term: (a) access and use the Services and Documentation in accordance with these Terms; and (b) copy and use the Deeli Content solely in connection with Customer’s permitted use of the Services.  

- Account Registration. You must register an account to access the Services and certain functionality we may develop from time to time (“Account”). Each User shall have and maintain a User Account, which may only be provisioned to, registered for, and used by, a single User. You are responsible for all use of the Services and Documentation and other activities that occur under your Account, including the activities of Users with a User Account. Customer must provide and maintain accurate and current account information. Customer will not share Account access credentials or individual login credentials between multiple Users. Customer may not resell or lease access to its Account or any User Account. Customer will promptly notify Deeli if it becomes aware of unauthorized access to the Account or the Services. You will use reasonable efforts to make all Users aware of these Terms to the extent applicable to such User’s use of the Services and shall cause Users to comply with such applicable provisions.

* Use Restrictions. You will not, and will not permit your Users to: (a) use the Services or Deeli Content in a way that violates applicable laws or policies that may be posted on the Website or Platform from time to time; (b) use the Services or Deeli Content in a way that violates third parties’ rights; (c) copy, modify, or create derivative works of the Services or Documentation, in whole or in part; (d) reverse engineer, disassemble, decompile, decode, or duplicate the Services, reproduce training data, engage in model extraction, or otherwise attempt to derive or gain access to any source code, algorithm, model, model weights and parameters, or other underlying AI technology or component of the Services, in whole or in part; (e) use the Services or Deeli Content to develop, train, or improve a competing or similar product or service; (f) extract data from the Services other than as permitted through the Services; or (g) remove any proprietary notices from the Services or Documentation.

* Third Party Services. The Services may incorporate or permit access to third-party content, data, information, materials, services, websites, or other materials (“Third-Party Services”). Third-Party Services are not under our control and we are not responsible for them or any changes or updates thereto. By using the Services, you acknowledge and agree that we are not responsible for examining or evaluating the content accuracy, completeness, availability, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of Third-Party Services. Third-Party Services may be subject to their own terms, as they may be updated, and we do not assume and will not have any liability or responsibility to you or any other person for them.

**4. Intellectual Property Rights**

- Customer Content. 

  - As between Customer and Deeli, Customer or Customer’s licensors own all right, title, and interest in and to Customer Content.  Except as provided in these Terms, Deeli obtains no rights from Customer or Customer’s licensors to Customer Content. 

  - By submitting, posting, displaying, providing, or otherwise making available any Customer Content on or through the Services, you expressly grant, and you represent and warrant that you have all rights necessary to grant, to Deeli a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to reproduce, distribute, and otherwise use and display the Customer Content and process the Customer Content to (i) provide the Services to Customer, and (ii) exercise our rights under these Terms, including the right to develop, train, improve, commercially offer, and create derivative works of the Services and new products and services. You further acknowledge that we may aggregate some or all of Customer Content and may share that aggregated information with third parties; provided, however, that such aggregated information will not identify you or any User individually. 

  - Notwithstanding anything in these Terms to the contrary, unless prohibited by applicable law, we may delete Customer Content at any time if we determine that Customer Content violates these Terms or that the deletion is necessary to comply with applicable law.

- Services. As between Customer and Deeli, Deeli or its licensors own all right, title, and interest in and to the Services and Deeli Content, and any modifications, enhancements, improvements, and derivative works thereof. Customer may access and use the Services and Deeli Content in accordance with Section 3. Except as provided in these Terms or the applicable Order, Customer does not obtain rights under these Terms from Deeli or its licensors to the Services, including any related intellectual property rights. 

- Publicity. Customer grants to Deeli a limited, non-exclusive, worldwide, royalty-free license to use its name and logo solely to identify Customer as a user of the Services, on its Website, in customer lists, and in other standard marketing materials. Such use shall be in accordance with any reasonable brand guidelines provided by Customer. This license does not include the right to make any public statements or endorsements without the other party’s prior written consent.

- Usage Data. Deeli may collect and compile data and information related to Customer’s use of the Services to be used by Deeli in an aggregated and anonymized manner, including to compile statistical and performance information related to the provision and operation of the Services (the “Usage Data”). As between Deeli and Customer, all right, title, and interest in Usage Data belong to Deeli. You agree that Deeli may use and make publicly available Usage Data to the extent and in the manner permitted under applicable law, provided that such Usage Data do not identify Customer or Customer’s Confidential Information.

- Feedback. If you or your Users provide Feedback, you grant us the right to use and exploit Feedback without restriction or compensation.

**5. Fees**

- Fees. Certain aspects of the Services may be provided for a fee or other charge. If you start a paid subscription to the Services, Customer shall pay Deeli the fees as described in any applicable Order without offset or deduction. Customer shall make all payments thereunder on or before the applicable due date and in the currency specified in the Order. If Customer fails to make any payment when due, without limiting Deeli’s other rights and remedies: (i) Deeli may charge interest on the past due amount at the rate of 1.5% per month calculated daily and compounded monthly or, if lower, the highest rate permitted under applicable law; (ii) Customer shall reimburse Deeli for all reasonable costs incurred by Deeli in collecting any late payments or interest, including attorneys’ fees, court costs, and collection agency fees; and (iii) if the failure continues for thirty (30) days or more, Deeli may suspend Customer’s and all other Users’ access to any portion or all of the Services until such amounts are paid in full. Deeli may add new services for additional fees and charges or amend fees and charges for existing services, at any time in its sole discretion. Fees are non-refundable except as required by law or as otherwise specifically permitted in these Terms.

- Payment; Taxes. The parties shall mutually agree on the currency and payment terms related to any paid Services in the applicable Order. Deeli may suspend or terminate the Services if fees are past due. Customer will provide complete and accurate billing and contact information to Deeli. All fees and other amounts payable by Customer under such Order are exclusive of taxes and similar assessments. Customer is responsible for all sales, use, and excise taxes, and any other similar taxes, duties, tariffs, and charges of any kind imposed by any federal, state, or local governmental or regulatory authority on any amounts payable by Customer, other than any taxes imposed on Deeli’s income.

- Trial Period. We may offer free trials for the Services. The Services Term for any free trial, and any extensions thereto, will be set forth in applicable Order. Customer may terminate a trial period at any time upon notice to Deeli, without penalty or payment. We may automatically bill your payment method on the later of the day your free trial ends or on the day you start a paid subscription, and on each recurring billing date thereafter unless you notify us that you want to cancel your subscription.

 **6. Confidentiality**

- From time to time during the Term, Deeli and Customer may disclose or make available to the other party Confidential Information. The receiving party shall not disclose the disclosing party’s Confidential Information to any person or entity, except to the receiving party’s employees, agents, or subcontractors who have a need to know the Confidential Information for the receiving party to exercise its rights or perform its obligations hereunder and who are required to protect the Confidential Information in a manner no less stringent than required under these Terms. Notwithstanding the foregoing, each party may disclose Confidential Information to the limited extent required (i) to comply with the order of a court or other governmental body, or as otherwise necessary to comply with applicable law, provided that the party making the disclosure pursuant to the order shall first have given written notice to the other party and made a reasonable effort to obtain a protective order; or (ii) to establish a party’s rights under these Terms, including to make required court filings. Each party’s obligations of non-disclosure regarding Confidential Information are effective as of the date the Confidential Information is first disclosed to the receiving party and will expire three years thereafter; provided, however, for any Confidential Information that constitutes a trade secret (as determined under applicable law), those obligations of non-disclosure will survive the termination or expiration of these Terms for as long as the Confidential Information remains subject to trade secret protection under applicable law.

 **7. Privacy Policy**

- In providing the Services, Deeli complies with its privacy policy provided separately to Customer (the “Privacy Policy”). The Privacy Policy is subject to change as described therein. By accessing, using, and providing information to or through the Services, you acknowledge that you have reviewed and accepted our Privacy Policy, and you consent to all actions taken by us with respect to your information in compliance with the then-current version of our Privacy Policy.

 **8. Term; Termination**

- Term. The “Term” of these Terms will commence upon the earlier of your acceptance of these Terms, any Order, or the date you first use the Services, and will remain in effect so long as any Service Term remains in effect unless terminated earlier as described herein. The “Services Term” will be set forth in the Order agreed by parties, or the Deeli webpage that you use to register and access the Services, and upon expiration will automatically renew for successive periods unless either of us gives the other notice of its intent not to renew at least thirty (30) days before the start of the next renewal period.

* Suspension. Deeli may limit or suspend a User Account or Customer’s access to the Services if: (a) it is required to do so by law; (b) Customer or a User violates these Terms; or (c) doing so is necessary to prevent or terminate a security risk or other credible risk of harm or liability to us, the Services, or any third party. Deeli will use reasonable efforts to notify Customer before limiting to or suspending the User Account or the Services altogether pursuant to the preceding sentence but may do so without prior notice to the extent reasonably necessary. Deeli will use reasonable efforts to: (i) narrowly tailor a limitation or suspension to prevent or terminate the security risk or other credible risk of harm or liability to us, the Services, or any third party; and (ii) cooperate with Customer to promptly restore access to the Services once it verifies Customer has resolved the condition requiring suspension.

* Termination. Either party may terminate these Terms or any Order upon written notice (a) if the other party materially breaches this Agreement and does not cure the breach within thirty (30) days after receiving written notice of the breach or (b) if the other party ceases its business operations or becomes subject to insolvency proceedings. 

* Effect of Termination. Upon expiration or termination of these Terms, the rights granted in Section 3 will terminate and Customer will immediately discontinue use of the Services and Deeli Content. Deeli will delete Customer Content from its systems  upon Customer’s written request following expiration or termination of these Terms. Termination or expiration will not affect any rights or obligations, including the payment of amounts due, which may have accrued under these Terms up to the date of termination or expiration. If Customer terminates these Terms or any Order due to Deeli’s material breach of these Terms, Deeli shall pay to Customer a prorated refund of any prepaid fees based on the date of termination. If Deeli terminates these Terms or any Order due to Customer’s material breach of these Terms, Customer shall not be entitled to any refund of any prepaid fees. Upon any termination or expiration of these Terms, the provisions that are intended by their nature to survive termination will survive and continue in full force and effect in accordance with their terms, including confidentiality obligations, limitations of liability, and disclaimers. 

 **9. Warranties.**

- Deeli warrants that, during the Term, when used in accordance with these Terms, the Services will conform in all material respects with any applicable Documentation.

- THE SERVICES, DOCUMENTATION, AND DEELI CONTENT ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS. USE OF THE SERVICES AND DEELI CONTENT IS AT YOUR OWN RISK. DEELI AND ITS LICENSORS MAKE NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. DEELI MAKES NO WARRANTY OF ANY KIND THAT THE SERVICES, DOCUMENTATION, OR DEELI CONTENT WILL MEET YOUR OR ANY OTHER PERSON’S OR ENTITY’S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY OF YOUR OR ANY THIRD PARTY’S SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR-FREE, OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED. 

 **10. Indemnification**

- By Customer. You agree to defend, hold harmless, and indemnify us and our officers, directors, agents, and employees, from and against any third-party claims, including any liability or expense arising from any claims, losses, damages (actual and consequential, direct, indirect, and punitive), suits, judgments, litigation costs, and attorneys’ fees, of every kind and nature (collectively, “Claims”), arising from or in any way related to your or any of your or your Users’: (i) use of the Services in violation of these Terms; (ii) Customer Content; and/or (iii) Customer’s gross negligence or willful misconduct.

- By Us. We agree to defend, hold harmless, and indemnify you and your officers, directors, agents, and employees, from and against any Claims alleging your access to or use of the Services infringe any third-party intellectual property right. This excludes claims to the extent the Claim arises from: (a) combination of any Services with any non-Deeli products, services, content, data or software; (b) Customer Content; (c) Customer’s use of or modification to the Services or Deeli Content in violation of these Terms; (d) Third-Party Services; or (e) Customer’s gross negligence, willful misconduct, or breach of these Terms. If we reasonably believe that all or any portion of the Services or Deeli Content is likely to become the subject of any infringement claim, we may (x) procure, at its expense, the right for you to continue using the Services or Deeli Content in accordance with these Terms, (y) replace or modify the allegedly infringing Service or Deeli Content so it is non- infringing, or (z), if (x) and (y) are not commercially practicable, terminate these Terms upon written notice and refund any prepaid amounts for unused paid Services. Customer shall promptly comply with all reasonable instructions we provide with respect to (x) and (y) above.

- Indemnification Procedures. If any third party makes a Claim covered by Section 10 against an indemnitee (a “Covered Party”) with respect to which the Covered Party intends to seek indemnification under these Terms, the Covered Party shall give prompt written notice of the Claim to the indemnifying party, including a brief description of the amount and basis for the Claim, if known. Upon receiving such notice, the indemnifying party shall be obligated to defend the Covered Party against the Claim, and shall be entitled to assume control of the defense and settlement of the Claim. The Covered Party may participate in the defense and settlement of the Claim at its own expense, using its own counsel, but without any right of control. The indemnifying party shall keep the Covered Party reasonably apprised as to the status of the Claim. Neither the indemnifying party nor any Covered Party shall be liable for any settlement of a Claim made without its consent. Notwithstanding the foregoing, the Covered Party shall retain responsibility for all aspects of the Claim that are not subject to indemnification by the indemnifying party hereunder.

 **11. Limitation of Liability**

- EXCEPT AS PROHIBITED BY LAW, IN NO EVENT WILL EITHER PARTY BE LIABLE UNDER OR IN CONNECTION WITH THESE TERMS UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, FOR ANY: (A) CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, ENHANCED, OR PUNITIVE DAMAGES; (B) INCREASED COSTS, DIMINUTION IN VALUE OR LOST BUSINESS, PRODUCTION, REVENUES, OR PROFITS; (C) LOSS OF GOODWILL OR REPUTATION; (D) USE, INABILITY TO USE, LOSS, INTERRUPTION, DELAY OR RECOVERY OF ANY DATA, OR BREACH OF DATA OR SYSTEM SECURITY; OR (E) COST OF REPLACEMENT GOODS OR SERVICES, IN EACH CASE REGARDLESS OF WHETHER DEELI WAS ADVISED OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE. 

- EXCEPT AS PROHIBITED BY LAW, IN NO EVENT WILL EITHER PARTY’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE EXCEED THE TOTAL AMOUNTS PAID TO DEELI UNDER THESE TERMS IN THE TWELVE (12) MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM.

**12. General Terms**

- Changes to these Terms or our Services. We are continuously working to develop and improve our Services. We may update these Terms or our Services accordingly from time to time. For example, we may make changes to these Terms or the Services due to: (i) changes in applicable law or regulatory requirements; (ii) security or safety reasons; (iii) circumstances beyond our reasonable control; (iv) changes we make in the usual course of developing our Services; and (v) to adapt to new technologies. We will endeavor to provide you with at least 30 days advance notice of changes to these Terms that materially adversely impact you either via email or an in-product notification. All other changes will be effective as soon as we post them to our website. You are responsible for reviewing and becoming familiar with any modifications. If you do not agree to the changes, you must stop using our Services. Your continued use of the Services after the effective date of the modifications will be deemed acceptance of the modified terms.

- AI Features. The Services may incorporate or utilize artificial intelligence features and technologies (“AI Technology”). “Output” means any Content generated by AI Technology as output. Notwithstanding any recommendation contained within Output, reliance on Output is in Customer’s discretion. Customer will assess Output before using or relying on the Output for any purpose. Customer acknowledges that AI Technology consists of emerging technologies and, given the nature of such technologies, their use may result in incorrect, biased, unfair, or inaccurate Output and/or Output that may be nonsensical or untruthful in relation to certain sources. Customer further acknowledges that (i) due to the nature of artificial intelligence generally, Output may not be unique, and other users may receive similar Content from the Services; (ii) Customer is solely responsible for all use of the Output, including evaluating the accuracy and appropriateness of the Output; and (iii) neither the Services nor any Output is intended or designed to provide financial or other professional advice or recommendations without human intervention or involvement by a qualified and/or licensed professional. 

- Governing Law; Dispute Resolution. California law will govern these Terms except for its conflicts of laws principles. The parties shall try in good faith to resolve any dispute or claim related to or arising out of these Terms, or the interpretation, making, performance, breach or termination thereof, amicably by themselves. If the dispute or claim cannot be resolved by the parties themselves, then it shall be adjudicated exclusively by the state and federal courts located in San Francisco County, California. Notwithstanding the foregoing, the parties may apply to any court of competent jurisdiction for temporary or permanent injunctive relief.

- Assignment. You may not assign or transfer any rights or obligations under these Terms without our prior written consent and any attempt to do so will be void. We may assign our rights or obligations under these Terms to any affiliate, subsidiary, or successor in interest of any business associated with our Services.

- Independent Contractors. Deeli and Customer are not legal partners or agents but are independent contractors.

- Force Majeure. Except for payment obligations, neither Customer nor Deeli will have any liability for failures or delays resulting from conditions beyond Customer’s or Deeli’s reasonable control, including but not limited to governmental action or acts of terrorism, pandemics or epidemics, earthquake or other acts of God, labor conditions, or power failures.

- No Third-Party Beneficiaries. There are no intended third-party beneficiaries to these Terms, and it is Customer and Deeli’s specific intent that nothing contained in these Terms will give rise to any right or cause of action, contractual or otherwise, in or on behalf of any third party.

- Trade Controls. The Services utilize software and technology that may be subject to trade control laws. You must comply with all applicable trade laws, including sanctions and export control laws. Our Services may not be used in or for the benefit of, or exported or re-exported to (a) any U.S. embargoed country or territory or (b) any individual or entity with whom dealings are prohibited or restricted under applicable trade laws. Our Services may not be used for any end use prohibited by applicable trade laws, and your Input may not include material or information that requires a government license for release or export. 

- Entire Agreement. These Terms, together with any amendments and any additional agreements you may enter into with Deeli in connection with the Services, contain the entire agreement between you and Deeli regarding the Services and supersedes any prior or contemporaneous agreements between you and Deeli. In the event of any inconsistency between these Terms and any Order you may enter into with Deeli, these Terms controls unless the parties expressly indicate an intent to modify these Terms.

- Waiver; Severability. Our delay or failure to enforce a provision of these Terms is not a waiver of our right to do so later. Except as provided in the dispute resolution section above, if any portion of these Terms is determined to be invalid or unenforceable, that portion will be enforced to the maximum extent permissible and it will not affect the enforceability of any other terms.

- Notices. All requests and notices under these Terms shall be given in writing and shall be delivered to Deeli at support\@deeli.ai, with a copy to 2 F., No. 453, Fuxing N. Rd., Songshan Dist., Taipei City 105003, Taiwan, and to Customer using the contact information Customer provided to Deeli when Customer signed up for the Services, or, in each case, to such other addresses as may be designated in writing by the parties from time to time. Any notices under these Terms must be sent via email, first class, airmail, or overnight courier and are deemed given when received. 

**13. Definitions.** The following terms shall be defined as follows:

- “Confidential Information” means information about either party’s business affairs, products, confidential intellectual property, trade secrets, third-party confidential information, and other sensitive or proprietary information, in any form, which information is marked confidential, restricted, proprietary, or with a similar designation, or which a reasonable person would determine, by virtue of the nature of the information or the method under which it was disclosed or other facts and circumstances, should be treated as confidential. Confidential Information does not include information that, at the time of disclosure, is: (a) in the public domain; (b) known to the receiving party; (c) rightfully obtained by the receiving party on a non-confidential basis from a third party; or (d) independently developed by the receiving party.

- “Content” means software, data, information, text, images or other content.

- “Customer Content” means any Content supplied by or on behalf of Customer to Deeli for processing in connection with the Services. 

- “Deeli Content” means all Content supplied by Deeli in connection with the Services. For the avoidance of doubt, Deeli Content includes Usage Data and Output, but does not include Customer Content or Third-Party Services. 

- “Documentation” means any technical guides, reference materials, tutorials, FAQs, and instructional videos relating to the Services provided by Deeli to you electronically and relating to the Services.

- “Feedback” means any suggestions, ideas, recommendations or feedback provided by Customer or Users to Deeli regarding the Services.

- “Order” means any ordering agreement, document or online order, including a trial, entered into by the parties specifying the Services and Services Term, including free trials, to be provided pursuant to these Terms.

- “User(s)” means Customer’s employees, consultants, contractors, and agents (i) who are authorized by Customer to access and use the Services.

                        © Deeli AI, Inc. 2025 – All Rights Reserved
`;

const TermsOfService = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [termsContent, setTermsContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the terms of service markdown file
    const loadTerms = async () => {
      try {
        const response = await fetch("/terms-of-service.md");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        setTermsContent(content);
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

export default TermsOfService;