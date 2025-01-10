import * as Yup from "yup"

const validation = Yup.object().shape({
    text: Yup.string().required('Text is a required field')
})

export default validation;