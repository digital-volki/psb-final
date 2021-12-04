import React from 'react';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';
import moment from 'moment/moment';


class AppDocument extends Document {
    componentDidMount() {
        moment.locale('ru');
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/sw.js', { scope: '/' })
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    render() {
        // noinspection HtmlRequiredTitleElement
        return (
            <Html>
                <Head title=''>
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src='https://kit.fontawesome.com/cbf0515d21.js' crossOrigin='anonymous' />
                    <link rel='apple-touch-icon' href='/favicon.png' />
                    <link rel='manifest' href='/manifest.json' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
