import consola from 'consola'

const userLogin = async (req, res) => {
    consola.log('hey user, please login!')
    res.send("Hey! you're logged in!")
};

export {
    userLogin,
}

