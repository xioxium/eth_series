// requires
const fs = require('fs')

/**
 * creation of the .gitignore file to exclude:
 * - node_modules
 * - .env
 * to be excluded from git repository when pushing the changes online
 */
function gitignoreGeneration(){
    const gitignore = 'node_modules\n.env'
    fs.writeFile('./.gitignore', gitignore, (error)=>{
        if (error) throw error
        console.log('.gitignore written on disk')

        // check if the data into the file is correct
        fs.readFile('./.gitignore',(error, data) => {
            if (error) throw err
            console.log(data.toString())
        })
    })
}


/**
 * creation of the .env file
 * log into Alchemy and use your private key as parameter
 * be sure that includes the full https link to your key
 * @param {string} AlchemyProjectKey
 */
function envGeneration(AlchemyProjectKey){

    // inclusion of the ethereumjs-wallet
    const Wallet = require('ethereumjs-wallet')

    // generation of address and private-key
    const xioxium = Wallet.default.generate()

    let env = `ALCHEMY_KEY = "${AlchemyProjectKey}"\n`
    env += `WALLET_ADDRESS = "${xioxium.getAddressString()}"\n`
    env += `WALLET_PRIVATE_KEY = "${xioxium.getPrivateKeyString()}"\n`

    fs.writeFile('./.env', env, (error)=>{
        if (error) throw error
        console.log('.env written on disk')

        // check if the data into the file is correct
        fs.readFile('./.env',(error, data) => {
            if (error) throw err
            console.log(data.toString())
        })
    })
}

/**
 * this is a simple function that checks if the files .env and .gitignore have been created
 * if files exist both it prevents to overwrite the files.
 * in the case just one of the file is missing it creates the file
 *  * log into Alchemy and use your private key as parameter
 * be sure that includes the full https link to your key
 * @param {string} AlchemyProjectKey
 */
function initialization(AlchemyProjectKey){
    const files = [
        './.gitignore',
        './.env'
    ]

    files.forEach(( file )=>{
        if (!fs.existsSync( file ))
            if(file ==='./.gitignore'){
                gitignoreGeneration()
            }else if(file === './.env'){

                envGeneration(AlchemyProjectKey)
            }
    })
}

initialization(YOUR_ALCHEMY_API_KEY)