const passwordValidator = (password) => {
    if (!password || password.length <= 0) return "Password can't be empty"
    return ''
}

export default passwordValidator;