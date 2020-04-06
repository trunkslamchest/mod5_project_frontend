import React from 'react'

import trafficFunctions from '../utility/trafficFunctions'

import './Docs.css'

export default class Privacy extends React.Component {

	componentDidMount(){
		this.onPageLoadFunctions()

	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'privacy_policy',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		return(
			<div className="terms_wrapper">
				<h1>PRIVACY POLICY</h1>

				<span>Last updated Last updated December 28, 2019</span>

				<p>
				Thank you for choosing to be part of our community at SmartApp™ (“Company”, “we”, “us”, or “our”).
				</p>
				<p>
				We are committed to protecting your personal information and your right to privacy. 
				If you have any questions or concerns about our policy, 
				or our practices with regards to your personal information, please contact us at (555) 123-4567.
				When you visit our and use our services, you trust us with your personal information. 
				We take your privacy very seriously. 
				In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, 
				how we use it and what rights you have in relation to it. 
				We hope you take some time to read through it carefully, as it is important. 
				If there are any terms in this privacy policy that you do not agree with, please discontinue use of our and our services. 
				</p>
				<p>
				This privacy policy applies to all information collected through our and/or any related services, sales, marketing or 
				events (we refer to them collectively in this privacy policy as the "Services"). 
				</p>
				<p>
				Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us. 
				</p>
				
				<h2>WHAT INFORMATION DO WE COLLECT?</h2>
				<h3>Personal information you disclose to us </h3>
				<p>
				We collect personal information that you voluntarily provide to us when registering at the expressing an interest in obtaining information about us 
				or our products and services, when participating in activities on the (such as posting messages in our online forums or entering competitions, contests or giveaways) 
				or otherwise contacting us.
				The personal information that we collect depends on the context of your interactions with us, the choices you make and the products and features you use. 
				</p>
				<h3>Credentials</h3>
				<p>
				We collect passwords, password hints, and similar security information used for authentication and account access. 
				</p>
				<h3>Social Media Login Data</h3>
				<p>
				We provide you with the option to register using social media account details. 
				If you choose to register in this way, we will collect the Information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below.
				All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information. 
				</p>

				<h3>Information automatically collected</h3>
				<p>
				We automatically collect certain information when you visit, use or navigate SmartApp™. 
				This information does not reveal your specific identity (like your name or contact information) 
				but may include device and usage information, 
				such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, 
				information about how and when you use our and other technical information. 
				This information is primarily needed to maintain the security and operation of SmartApp™, and for our internal analytics and reporting purposes.
				</p>
				<p>
				Like many businesses, we also collect information through cookies and similar technologies.
				</p>
				
				<h2>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
				<p>
				We may process or share data based on the following legal basis:
				</p>

				<h3>Consent</h3>
				<p>
				We may process your data if you have given us specific consent to use your personal information in a specific purpose. 
				</p>
				<h3>Legitimate Interests </h3>
				<p>
				We may process your data when it is reasonably necessary to achieve our legitimate business interests. 
				</p>

				<h3>Performance of a Contract</h3>
				<p>
				Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract. 
				</p>
				<h3>Legal Obligations</h3>
				<p>
				We may disclose your information where we are legally required to do so in order to comply with applicable 
				law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or 
				a subpoena (including in response to public authorities to meet national security or law enforcement requirements). 
				</p>

				<h3>Vital Interests</h3>
				<p>
				We may disclose your information where we believe it is necessary to investigate, prevent, 
				or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person 
				and illegal activities, or as evidence in litigation in which we are involved.
				</p>

				<h3>Vendors, Consultants and Other Third-Party Service Providers</h3>
				<p>
				We may share your data with third party vendors, service providers, contractors or 
				agents who perform services for us or on our behalf and require access to such information to do that work. 
				Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. 
				We may allow selected third parties to use tracking technology on SmartApp™, which will enable them to collect data about how you interact with SmartApp™ over time. 
				This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. 
				Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes. 
				</p>

				<h3>Business Transfers</h3>
				<p>
				We may share or transfer your information in connection with, or during negotiations of,
				any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
				</p>

				<h3>Third-Party Advertisers</h3>
				<p>
				We may use third-party advertising companies to serve ads when you visit SmartApp™. 
				These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies 
				and other tracking technologies in order to provide advertisements about goods and services of interest to you. 
				</p>

				<h3>Affiliates</h3>
				<p>
				We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. 
				Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
				</p>

				<h3>Business Partners</h3>
				<p>
				We may share your information with our business partners to offer you certain products, services or promotions.
				</p>

				<h3>Other Users</h3>
				<p>
				When you share personal information or otherwise interact with public areas of SmartApp™, such personal information may be viewed by all users 
				and may be publicly distributed outside the in perpetuity. If you interact with other users of our and register through a social network (such as Facebook), 
				your contacts on the social network will see your name, profile photo, and descriptions of your activity. 
				Similarly, other users will be able to view descriptions of your activity, communicate with you within our , and view your profile. 
				</p>
				
				<h2>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
				<p>
				We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
				Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.      
				</p>
				
				<h2>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
				<p>
				Our offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). 
				Where you choose to do this, we will receive certain profile information about you from your social media provider. 
				The profile Information we receive may vary depending on the social media provider concerned, 
				but will often include your name, e-mail address, friends list, profile picture as well as other information you choose to make public.
				</p>
				<p>
				We will use the information we receive only for the purposes that are described in this privacy policy or 
				that are otherwise made clear to you on SmartApp™. Please note that we do not control, and are not responsible for, 
				other uses of your personal information by your third party social media provider. 
				We recommend that you review their privacy policy to understand how they collect, use and share your personal information, 
				and how you can set your privacy preferences on their sites and apps. 
				</p>
				
				<h2>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
				<p>
				Our servers are located on Mars. If you are accessing our from outside, 
				please be aware that your information may be transferred to, stored, and processed by us in our facilities 
				and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), 
				on other planets.
				</p>
				<p>
				If you are a resident in the European Economic Area, then these countries and/or planets may not have data protection or 
				other laws as comprehensive as those in your country and/or planet. 
				We will however take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
				</p>
				
				<h2>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
				<p>
				SmartApp™ may contain advertisements from third parties that are not affiliated with us 
				and which may link to other websites, online services or mobile applications. 
				We cannot guarantee the safety and privacy of data you provide to any third parties. 
				Any data collected by third parties is not covered by this privacy policy. 
				We are not responsible for the content or privacy and security practices 
				and policies of any third parties, including other websites, services or applications that may be linked to or from SmartApp™. 
				You should review the policies of such third parties and contact them directly to respond to your questions.
				</p>
				
				<h2>HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
				<p>
				We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, 
				unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). 
				No purpose in this policy will require us keeping your personal information for longer than 5000 years.
				</p>
				<p>
				When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or,
				if this is not possible (for example, because your personal information has been stored in backup archives), 
				then we will securely store your personal information and isolate it from any further processing until deletion is possible. 
				</p>
				
				<h2>DO WE COLLECT INFORMATION FROM MINORS?</h2>
				<p>
				We do not knowingly solicit data from or market to children under 18 years of age. 
				By using SmartApp™, you represent that you are at least 18 or that you are the parent or 
				guardian of such a minor and consent to such minor dependent’s use of SmartApp™. 
				If we learn that personal information from users less than 18 years of age has been collected, 
				we will deactivate the account and take reasonable measures to promptly delete such data from our records. 
				If you become aware of any data we have collected from children under age 18, please contact us at totally_real_email_address@smartapp.com.
				</p>
				
				<h2>WHAT ARE YOUR PRIVACY RIGHTS?</h2>
				<p>
				If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, 
				you also have the right to complain to your local data protection supervisory authority. 
				You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
				</p>

				<h3>Account Information</h3>
				<p>
				If you would at any time like to review or change the information in your account or terminate your account, you can: 
				</p>
				<p>
				Upon your request to terminate your account, we will deactivate or delete your account 
				and information from our active databases. 
				However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, 
				enforce our Terms of Use and/or comply with legal requirements.
				</p>
				<p>
				Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or
				by contacting us using the details provided below. 
				You will then be removed from the marketing email list – 
				however, we will still need to send you service-related emails that are necessary for the administration and use of your account.
				</p>
				
				<h2>CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
				<p>
				Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or 
				setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. 
				No uniform technology standard for recognizing and implementing DNT signals has been finalized. 
				As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. 
				If a standard for online tracking is adopted that we must follow in the future, 
				we will inform you about that practice in a revised version of this privacy policy.  
				</p>
				
				<h2>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
				<p>
				California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request 
				and obtain from us, once a year and free of charge, information about categories of personal information (if any) 
				we disclosed to third parties for direct marketing purposes and the names and 
				addresses of all third parties with which we shared personal information in the immediately preceding calendar year. 
				If you are a California resident and would like to make such a request, 
				please submit your request in writing to us using the contact information provided below. 
				</p>
				<p>
				If you are under 18 years of age, reside in California, and 
				have a registered account with SmartApp™, you have the right to request removal of unwanted data that you publicly post on SmartApp™. 
				To request removal of such data, please contact us using the contact information provided below, 
				and include the email address associated with your account and a statement that you reside in California. 
				We will make sure the data is not publicly displayed on SmartApp™, 
				but please be aware that the data may not be completely or comprehensively removed from our systems.
				</p>
				
				<h2>DO WE MAKE UPDATES TO THIS POLICY?</h2>
				<p>
				We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and 
				the updated version will be effective as soon as it is accessible. 
				If we make material changes to this privacy policy, 
				we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. 
				We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
				</p>
				
				<h2>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>

				<p>
				If you have questions or comments about this policy, please contact us at: 
					<ul>
						<li>SmartApp™</li>
						<li>420 69th Street</li>
						<li>Coopersville, NY 42069</li>
						<li>United States</li>
						<br />
						<li>(555) 123-4567</li>
						<br />
						<li>totally_real_email_address@SmartApp.com</li>
					</ul>
				</p>
			</div>
		)
	}
}