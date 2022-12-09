import { useEffect, useState } from 'react';
import { generatorPassword } from '../helpers/Generator';

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const [password, setPassword] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    const handleChangeOptions = (e) => {
        const { name, checked } = e.target;
        setForm({
            ...form,
            [name]: checked
        });
        setErrorMessage(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.lowercase && !form.uppercase && !form.number && !form.symbols) {
            setErrorMessage("Selecciona una opción");
            return;
        }

        let generatorPass = generatorPassword(form);
        setPassword(generatorPass);
        setErrorMessage(null);
    }

    const handleClear = () => {
        setForm(initialForm);
        setPassword(null);
    }

    useEffect(() => {
        if (form.uppercase && !form.lowercase && !form.number && !form.symbols) form.capitalize = false;

        if (!form.lowercase && !form.uppercase) form.capitalize = false;

        if (form.number || form.symbols || form.uppercase) setDisabled(true);

        if (form.lowercase || form.lowercase && form.uppercase || form.uppercase && form.number || form.uppercase && form.symbols) setDisabled(false);

        if (!form.lowercase && !form.uppercase && !form.number && !form.symbols) {
            setPassword(null);
        }

    }, [form]);

    let generatedPassword;

    if (password) generatedPassword = password.join("");

    return { handleSubmit, handleChange, handleChangeOptions, form, password, generatedPassword, disabled, errorMessage, handleClear }
}



