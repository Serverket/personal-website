import React from "react";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Link } from "react-router-dom";
import { Text } from "../components/Multilanguage/Text";
import { LanguageContext } from "../components/Multilanguage/LanguageProvider";

export default function ImprintPrivacyPolicy() {
  const { userLanguage } = React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }
    w-full min-h-screen font-noto`}
    >
      <h1 className="text-3xl font-bold underline text-center">
        <Text tid="imprintPrivacyPolicy" />
      </h1>
      <div className="flex justify-center">
        <div className="mt-4 w-2/3 h-auto text-justify">
          {userLanguage === "english" ? (
            <>
              <h1 className="text-2xl text-center font-bold mb-10">
                Privacy Policy for Serverket.dev
              </h1>
              <p>
                At Serverket.dev, one of our main priorities is the privacy of
                our visitors. This Privacy Policy document contains types of
                information that is collected and recorded by Serverket.dev and
                how we use it.
              </p>
              <br />
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in Serverket.dev.
                This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>
              <h2 className="mt-4 text-xl text-center font-bold">Consent</h2>
              <br />
              <h2 className="font-bold">Information we collect</h2>
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
                <br />
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and any other information you may choose to provide. We really care about privacy, that's why:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>We do not hold log files.</li>
                <li>We do not use tracking cookies.</li>
                <li>We do not track user behavior.</li>
                <li>We do not sell any user information.</li>
                <li>We do not permanently save any user information.</li>
              </ul>
              <h2 className="font-bold mt-6">Log Files</h2>
              <p>
                Serverket.dev follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. We do not access or use this information for tracking purposes.
              </p>
              <h2 className="font-bold mt-6">Vercel</h2>
              <p>
                We do not hold log files in our end, however we use Vercel as our deployment platform and it has its own Privacy Policy in regards to this matter, you can review their policies at <a href="https://vercel.com/legal/privacy-policy#customers" target="_blank" rel="noreferrer" className="underline text-blue-400">https://vercel.com/legal/privacy-policy#customers</a>.
              </p>


              <h2 className="font-bold mt-6">
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h2>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
                <br />
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
                <br />
                Request that a business delete any personal data about the
                consumer that a business has collected.
                <br />
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <h2 className="font-bold mt-6">GDPR Data Protection Rights</h2>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
                <br />
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
                <br />
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
                <br />
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
                <br />
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
                <br />
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
                <br />
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <h2 className="font-bold mt-6">Children's Information</h2>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
                <br />
                Serverket.dev does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
              <h2 className="font-bold mt-6">Inquiries</h2>
              <p className="mb-20">
                Any inquiries shall be sent to <Link to="/contact" className="underline text-blue-400"><Text tid="navContact" /></Link>.
                <br />
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl text-center font-bold mb-10">
                Política de Privacidad de Serverket.dev
              </h1>
              <p>
                En Serverket.dev, una de nuestras principales prioridades es la privacidad de
                nuestros visitantes. Este documento de Política de Privacidad contiene tipos de
                información que es recopilada y registrada por Serverket.dev y
                cómo la utilizamos.
              </p>
              <br />
              <p>
                Si tiene alguna pregunta o necesita más información
                sobre nuestra Política de Privacidad, no dude en ponerse en contacto con nosotros.
              </p>
              <p>
                La presente Política de Privacidad se aplica únicamente a nuestras actividades en línea y es
                válida para los visitantes de nuestro sitio web con respecto a la
                información que compartan y/o recopilen en Serverket.dev.
                Esta política no es aplicable a ninguna información recogida
                fuera de línea o a través de canales distintos de este sitio web.
              </p>
              <h2 className="mt-4 text-xl text-center font-bold">
                Consentimiento
              </h2>
              <br />
              <h2 className="font-bold">Información que recolectamos</h2>
              <p>
                La información personal que se le solicite y las razones por las que
                razones por las que se le pide que la proporcione, se le explicarán
                en el momento en que le pidamos sus datos personales.
                personales.
                <br />
                Si se pone en contacto con nosotros directamente, es posible que recibamos
                información adicional sobre usted, como su nombre, dirección de correo
                número de teléfono, el contenido del mensaje y cualquier otra información que decida facilitarnos.
              </p>
              <h2 className="font-bold mt-6">Archivos de registro</h2>
              <p>
                Serverket.dev sigue un procedimiento estándar de uso de archivos de registro.
                Estos archivos registran a los visitantes cuando visitan los sitios web. Todas las empresas
                empresas de hosting hacen esto y es una parte de los servicios analíticos de hosting. La información recogida por los archivos de registro en
                información recogida por los archivos de registro
                (IP), tipo de navegador, proveedor de servicios de Internet (ISP),
                sello de fecha y hora, páginas de referencia/salida y, posiblemente, el
                número de clics. Estos datos no están vinculados a ninguna información
                de identificación personal. No accedemos ni utilizamos esta información para fines de seguimiento.
              </p>
              <h2 className="font-bold mt-6">
                Derechos de privacidad de CCPA (No vender mi información
                personal)
              </h2>
              <p>
                Según la CCPA, entre otros derechos, los consumidores de
                California tienen el derecho a:
                <br />
                Solicitar que una empresa que recopila datos personales de un
                consumidor divulgar las categorías y piezas específicas de datos
                personales que una empresa ha recopilado sobre los consumidores.
                <br />
                Solicitar que una empresa elimine cualquier dato personal sobre
                el consumidor que una empresa ha recopilado.
                <br />
                Solicitar que una empresa que vende los datos personales de un
                consumidor, no vender los datos personales del consumidor.
                <br />
                Si realiza una solicitud, tenemos un mes para responderle. Si
                desea ejercer alguno de estos derechos, póngase en contacto con
                a nosotros.
              </p>
              <h2 className="font-bold mt-6">
                Derechos de protección de datos RGPD
              </h2>
              <p>
                Nos gustaría asegurarnos de que esté plenamente consciente de
                todos sus derechos de protección de datos. Todo usuario tiene
                derecho a lo siguiente:
                <br />
                Derecho de acceso - Tiene derecho a solicitar copias de sus
                datos personales. Es posible que le cobremos una pequeña tarifa
                por este servicio.
                <br />
                Derecho a la rectificación - Tiene derecho a solicitar que
                corrijamos cualquier información que usted crea que es inexacta.
                También tiene derecho a solicitar que completemos la información
                que usted crea está que incompleta.
                <br />
                Derecho a borrar - Tiene derecho a solicitar que borremos sus
                datos personales, bajo ciertas condiciones.
                <br />
                Derecho a restringir el tratamiento - Tiene derecho a solicitar
                que restrinjamos el tratamiento de sus datos personales, bajo
                determinadas condiciones.
                <br />
                El derecho a oponerse al procesamiento - Tiene derecho a oponerse
                a nuestro procesamiento de sus datos personales, bajo ciertas
                condiciones.
                <br />
                Derecho a la portabilidad de datos - Tiene derecho a solicitar
                que transfiramos los datos que hemos recopilado a otra
                organización, o directamente a usted, bajo ciertas condiciones.
                <br />
                Si realiza una solicitud, tenemos un mes para responderle. Si
                desea ejercer alguno de estos derechos, póngase en contacto con
                nosotros.
              </p>
              <h2 className="font-bold mt-6">Información para niños</h2>
              <p>
                Otra parte de nuestra prioridad es agregar protección para los
                niños mientras usan Internet. Alentamos a los padres y tutores a
                observar, participar y/o monitorear y guiar sus actividades en
                línea.
                <br />
                Serverket.dev no recopila a sabiendas ninguna Información
                Personal ni Información Identificable de niños menores de 13
                años. Si cree que su hijo proporcionó este tipo de información
                en nuestro sitio web, le recomendamos encarecidamente que se
                ponga en contacto con nosotros inmediatamente y haremos todo lo
                posible para eliminar de inmediato dicha información de nuestros
                registros.
              </p>
              <h2 className="font-bold mt-6">Consultas</h2>
              <p className="mb-20">
                Cualquier consulta deberá ser enviada a <Link to="/contact" className="underline text-blue-400"><Text tid="navContact" /></Link>.
                <br />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
