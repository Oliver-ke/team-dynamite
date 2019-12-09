import consola from 'consola'

const registerUser = async (req, res) => {
    consola.log('I\'m so glad you decided to register me!')
}

const deactivateUser = async(req, res) => {
    consola.log('I don\'t want to go pleasssse!');
};


export {
    registerUser, 
    deactivateUser,
}