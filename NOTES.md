# SSL-TLS
## Self signed
Create key:
    `openssl genpkey -algorithm RSA -out .ssh/key.pem -pkeyopt rsa_keygen_bits:4096`

Self sign key:
    `openssl req -key key.pem -x509 -new -days 3650 -out cacert.pem`

## Certbot
Command:
    `sudo certbot certonly`

Certificate/Keys available at:
    /etc/letsencrypt/live/your.domain.name/*.pem


## ExpressJS - No HTTPS
```js
    const express = require('express')

    const app = express()

    app.get('/', (req, res) => res.send('Everything is fine'))

    app.listen(5000, (err) => {
      if (err) throw err
      console.log('Server running')
    })
```

## ExpressJS - Let's Encrypt
```js
const express = require('express')
const https = require('https')
const fs = require('fs')

const tls = {
  cert: fs.readFileSync(''),
  key: fs.readFileSync('')
}

const app = express()
const server = https.createServer(tls, app)

app.get('/', (req, res) => res.send('Everything is fine'))

server.listen(443, (err) => {
    if (err) throw err
    console.log('Server running')
})
```

## apache2/httpd - Let's Encrypt
Config file:
    /etc/apache2/sites-enabled/000-default.conf

To be added:
```apache
    SSLEngine on
    SSLCertificateFile /path/to/file/cert.pem
    SSLCertificateKeyFile /path/to/file/privkey.pem
    SSLCertificateChainFile /path/to/file/fullchain.pem
```

Enable SSL:
    `sudo a2enmod ssl`
