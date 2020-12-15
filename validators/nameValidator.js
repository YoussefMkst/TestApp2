const nameValidator = (name) => {
    if (!name || name.length <= 0) return "Please provide a name"
    return ''
}

export default nameValidator;