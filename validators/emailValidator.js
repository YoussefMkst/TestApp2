const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "Please provide an email"
    if (!re.test(email)) return 'Please provide a valid email'
    return ''
  }

export default emailValidator;