
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 pb-2 border-b border-border">Cookie Policy</h1>

          <p className="text-lg">Like many others, our website uses cookies. Here we explain what they are and what we use them for.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">What are cookies?</h2>
          <p>A cookie is a file that is downloaded to your device when you access web pages. Cookies allow a web page, among other things, to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information they contain and the way you use your equipment, they can be used to recognize the user, and thus improve the service offered.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Types of cookies used by this website</h2>
          <p>There are different types of cookies depending on their functionality and origin.</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
            <li>
              <strong>Technical cookies:</strong> these allow the user to navigate through a web page, platform or application and use the different options or services that exist in it, such as: controlling traffic and data communication, identifying the session, carrying out the purchase process of an order, making the registration request, using security elements during navigation, storing content for the dissemination of videos or sound or sharing content through social networks.
            </li>
            <li>
              <strong>Personalization cookies:</strong> these allow the user to navigate the website with some predefined characteristics according to the characteristics of the user's device, such as language or the type of browser through which they access.
            </li>
            <li>
              <strong>Analysis cookies:</strong> these are cookies that are processed by us or by third parties, allowing us to quantify the number of users and thus carry out the measurement and statistical analysis of the use made by users of the service offered. For this, navigation on our website is analyzed in order to improve it. In no case do they collect personal data.
            </li>
          </ul>

          <p className="mt-4">The application we use to obtain and analyze information is Google Analytics.</p>
          <p>The cookies used for this (_utma, _utmb, _utmc, _utmt, and _utmz) are third-party cookies.</p>
          <p>These cookies are used to collect information about users' navigation on the site in order to know the origin of visits and other similar data at a statistical level.</p>
          <p>Through the following links, you can see the details of the cookies used by Google Analytics and their purpose: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Center</a>.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Deleting or blocking cookies</h2>
          <p>You can allow, block, or delete cookies installed on your computer by configuring the browser options installed on your computer.</p>
          <p>You can find more information about your browser and cookies at the following links:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
            <li>Firefox: <a href="http://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
            <li>Chrome: <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647</a></li>
            <li>Internet Explorer: <a href="http://windows.microsoft.com/en-us/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://windows.microsoft.com/en-us/windows7/how-to-manage-cookies-in-internet-explorer-9</a></li>
            <li>Safari: <a href="http://support.apple.com/kb/ph5042" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://support.apple.com/kb/ph5042</a></li>
            <li>Opera: <a href="http://help.opera.com/Windows/11.50/en-US/cookies.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://help.opera.com/Windows/11.50/en-US/cookies.html</a></li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Google Analytics Opt-out Browser Add-on</h2>
          <p>If you wish to reject Google Analytics analytical cookies in all browsers, so that your information is not sent to Google Analytics, you can download an add-on that performs this function from this link: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
