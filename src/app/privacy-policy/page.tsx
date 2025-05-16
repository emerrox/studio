
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 pb-2 border-b border-border">Política de Privacidad</h1>
          
          <p className="text-lg">Para poder ofrecerte nuestros productos y servicios de la manera más eficaz para ti, debemos recoger ciertos datos. Esta información la tratamos de forma responsable para que tus datos estén seguros y sigan siendo privados.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Responsable del tratamiento de datos</h2>
          
          <div className="overflow-x-auto my-6 shadow-md rounded-lg border border-border">
            <table className="min-w-full bg-card text-card-foreground">
              <caption className="p-4 text-xl font-semibold text-left text-foreground bg-muted border-b border-border rounded-t-lg">Tratamiento de los datos de clientes</caption>
              <thead>
                <tr>
                  <th colSpan={2} className="p-3 sm:p-4 text-left text-lg font-medium bg-muted/50 text-muted-foreground border-b border-border">Información básica sobre protección de datos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold w-1/3">Responsable:</td>
                  <td className="p-3 sm:p-4">TOTAL HEALTH SAFETY ENVIRONMENT S.L.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Finalidad:</td>
                  <td className="p-3 sm:p-4">Prestar los servicios solicitados y enviar comunicaciones comerciales vía electrónica</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Legitimación:</td>
                  <td className="p-3 sm:p-4">
                    Ejecución de un contrato. Interés legítimo del Responsable.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Destinatarios:</td>
                  <td className="p-3 sm:p-4">Están previstas cesiones de datos a: Administración Tributaria; Entidades financieras.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Derechos:</td>
                  <td className="p-3 sm:p-4">Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Procedencia:</td>
                  <td className="p-3 sm:p-4">El propio interesado.</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold">Información adicional:</td>
                  <td className="p-3 sm:p-4">Puede consultar información adicional y detallada sobre protección de datos aquí: enviando un correo electrónico <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿Quién es el responsable del tratamiento de sus datos personales?</h2>
          <p><strong>Identidad:</strong> Total Health Safety Environment S.L.</p>
          <p><strong>CIF:</strong> B71325575.</p>
          <p><strong>Domicilo social:</strong> Polígono Industrial El Mallatón, Parcela 12, Calle B-9. 31579, Cárcar, Navarra.</p>
          <p><strong>Teléfono:</strong> 948674881.</p>
          <p><strong>Correo electrónico:</strong> <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a></p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿Con qué finalidad recopilamos sus datos?</h2>
          <p>En TOTAL HEALTH SAFETY ENVIRONMENT S.L. tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión administrativa, contable y fiscal de los servicios solicitados.  También se emplearán para desarrollar y enviar comunicaciones comerciales sobre nuestros productos y servicios, para mantener y gestionar la relación con las personas interesadas. En el caso de que no facilite sus datos personales, no podremos cumplir con las funcionalidades descritas anteriormente.</p>
          <p>Según caso, se podrán hacer valoraciones automáticas, obtener perfiles y segmentar a las personas interesadas para así poder personalizar el trato a medida de las características y necesidades de dichas personas interesadas, con el objetivo de ofrecer la mejor experiencia del cliente posible.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿Por cuánto tiempo conservaremos sus datos?</h2>
          <p>Los datos se conservarán mientras el interesado no solicite su supresión, y en su caso, durante los años necesarios para cumplir con las obligaciones legales.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
          <p>Le indicamos la base legal para el tratamiento de sus datos:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Ejecución de un contrato:</strong> Realizar la gestión administrativa, contable y fiscal de los servicios solicitados.</li>
            <li><strong>Interés legítimo del Responsable:</strong> Enviar comunicaciones comerciales vía electrónica sobre nuestros productos y servicios.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿A qué destinatarios se comunicarán sus datos?</h2>
          <p>Los datos se comunicarán a los siguientes destinatarios:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Administración Tributaria, con la finalidad de cumplir con las obligaciones legales (requisito legal).</li>
            <li>Entidades financieras, con la finalidad de girar los recibos correspondientes (requisito contractual).</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">Transferencias de datos a terceros países</h2>
          <p>No están previstas transferencias de datos a terceros países.</p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
          <p>Cualquier persona tiene derecho a obtener confirmación sobre si en TOTAL HEALTH SAFETY ENVIRONMENT S.L. estamos tratando, o no, datos personales que les conciernan.</p>
          <p>Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Igualmente tiene derecho a la portabilidad de sus datos.</p>
          <p>En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</p>
          <p>En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. En este caso, TOTAL HEALTH SAFETY ENVIRONMENT S.L. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</p>
          <p>Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</p>
          <p>Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus datos con ese fin.</p>
          <p>En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mt-10 mb-4 pb-1 border-b border-border">¿De dónde obtenemos sus datos?</h2>
          <p>Los datos personales que tratamos en TOTAL HEALTH SAFETY ENVIRONMENT S.L. proceden de: El propio interesado.</p>
          <p>Las categorías de datos que se tratan son:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Datos identificativos.</li>
            <li>Direcciones postales y electrónicas.</li>
            <li>Información comercial.</li>
            <li>Datos económicos.</li>
          </ul>
          <p>Se tratan las siguientes categorías de datos especiales: salud</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
