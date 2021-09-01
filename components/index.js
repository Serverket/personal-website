import React from 'react';
import Head from 'next/head';

export default function Layout (props) {
    return(
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Serverket's Website - Jesus is Savior" />


                //TODO This icons are compatible with most device resolutions, please create them with those and make them work
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}