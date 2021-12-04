const fs = require('fs');
const axios = require('axios');


const data = JSON.stringify({
    query: `
    query I18N {
        i18n (
            filter: {
                module: {
                    _eq: "locale"
                }
            }
        ){
            name
            value
            lang {
                code
            }
        }
    }
`,
});

const config = {
    method: 'post',
    url: 'https://psb-adm.volki.digital/graphql',
    headers: {
        'Content-Type': 'application/json',
    },
    data,
};

axios(config)
    .then(response => {
        fs.writeFileSync('lib/i18n/translations.json', JSON.stringify(response.data.data.i18n));
    })
    .catch(error => {
        console.log(error);
    });

