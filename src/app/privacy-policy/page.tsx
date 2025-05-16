
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 pb-2 border-b border-border">Privacy Policy</h1>
          
          <p className="text-lg">To offer you our products and services in the most effective way for you, we need to collect certain data. We treat this information responsibly so that your data is secure and remains private.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Data Controller</h2>
          
          <div className="overflow-x-auto my-6 shadow-md rounded-lg border border-border">
            <table className="min-w-full bg-card text-card-foreground">
              <caption className="p-4 text-xl font-semibold text-left text-foreground bg-muted border-b border-border rounded-t-lg">Client Data Processing</caption>
              <thead>
                <tr>
                  <th colSpan={2} className="p-3 sm:p-4 text-left text-lg font-medium bg-muted/50 text-muted-foreground border-b border-border">Basic Information on Data Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold w-1/3">Controller:</td>
                  <td className="p-3 sm:p-4">TOTAL HEALTH SAFETY ENVIRONMENT S.L.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Purpose:</td>
                  <td className="p-3 sm:p-4">To provide the requested services and send commercial communications electronically.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Legitimation:</td>
                  <td className="p-3 sm:p-4">
                    Execution of a contract. Legitimate interest of the Controller.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Recipients:</td>
                  <td className="p-3 sm:p-4">Data transfers are planned to: Tax Administration; Financial entities.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Rights:</td>
                  <td className="p-3 sm:p-4">You have the right to access, rectify, and delete data, as well as other rights, indicated in the additional information, which you can exercise by contacting <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Origin:</td>
                  <td className="p-3 sm:p-4">The interested party.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Additional Information:</td>
                  <td className="p-3 sm:p-4">You can consult additional and detailed information on data protection here: by sending an email to <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Who is responsible for the processing of your personal data?</h2>
          <p><strong>Identity:</strong> Total Health Safety Environment S.L.</p>
          <p><strong>VAT ID:</strong> B71325575.</p>
          <p><strong>Registered Office:</strong> Polígono Industrial El Mallatón, Parcela 12, Calle B-9. 31579, Cárcar, Navarra.</p>
          <p><strong>Phone:</strong> 948674881.</p>
          <p><strong>Email:</strong> <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a></p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">For what purpose do we collect your data?</h2>
          <p>At TOTAL HEALTH SAFETY ENVIRONMENT S.L., we process the information provided by interested parties to carry out administrative, accounting, and fiscal management of the requested services. It will also be used to develop and send commercial communications about our products and services, and to maintain and manage the relationship with interested parties. If you do not provide your personal data, we will not be able to fulfill the functionalities described above.</p>
          <p>Depending on the case, automatic assessments may be made, profiles obtained, and interested parties segmented to personalize treatment according to their characteristics and needs, with the aim of offering the best possible customer experience.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">How long will we keep your data?</h2>
          <p>The data will be kept as long as the interested party does not request its deletion, and, if applicable, for the years necessary to comply with legal obligations.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">What is the legal basis for processing your data?</h2>
          <p>We indicate the legal basis for the processing of your data:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Execution of a contract:</strong> To carry out administrative, accounting, and fiscal management of the requested services.</li>
            <li><strong>Legitimate interest of the Controller:</strong> To send commercial communications electronically about our products and services.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">To which recipients will your data be communicated?</h2>
          <p>The data will be communicated to the following recipients:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Tax Administration, for the purpose of complying with legal obligations (legal requirement).</li>
            <li>Financial entities, for the purpose of issuing the corresponding receipts (contractual requirement).</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Data transfers to third countries</h2>
          <p>No data transfers to third countries are planned.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">What are your rights when you provide us with your data?</h2>
          <p>Anyone has the right to obtain confirmation as to whether or not TOTAL HEALTH SAFETY ENVIRONMENT S.L. is processing personal data concerning them.</p>
          <p>Interested parties have the right to access their personal data, as well as to request the rectification of inaccurate data or, where appropriate, request its deletion when, among other reasons, the data is no longer necessary for the purposes for which it was collected. They also have the right to data portability.</p>
          <p>In certain circumstances, interested parties may request the limitation of the processing of their data, in which case we will only keep it for the exercise or defense of claims.</p>
          <p>In certain circumstances and for reasons related to their particular situation, interested parties may object to the processing of their data. In this case, TOTAL HEALTH SAFETY ENVIRONMENT S.L. will stop processing the data, except for compelling legitimate reasons, or the exercise or defense of possible claims.</p>
          <p>You can materially exercise your rights by contacting <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</p>
          <p>When commercial communications are sent using the legitimate interest of the controller as a legal basis, the interested party may object to the processing of their data for that purpose.</p>
          <p>If you feel your rights concerning the protection of your personal data have been violated, especially when you have not obtained satisfaction in the exercise of your rights, you can file a complaint with the competent Data Protection Control Authority through its website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Where do we obtain your data from?</h2>
          <p>The personal data we process at TOTAL HEALTH SAFETY ENVIRONMENT S.L. comes from: The interested party.</p>
          <p>The categories of data processed are:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Identifying data.</li>
            <li>Postal and email addresses.</li>
            <li>Commercial information.</li>
            <li>Economic data.</li>
          </ul>
          <p>The following categories of special data are processed: health</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

  