const client = require('rippled-ws-client')

new client('wss://fh.xrpl.ws').then(connection => {
    console.log('Connected')

    connection.send({
        command: 'account_info',
        account: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh'
    }).then(reply => {
        connection.close()
        const balance = parseInt(reply.account_data.Balance) / 1000000
        console.log('The balance is:')
        console.log(balance)
    })

})