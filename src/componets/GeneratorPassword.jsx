import { Form } from '../assets/styles/StyleFom';
import { Section } from '../assets/styles/StyleSection';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast, } from 'react-hot-toast';
import { useForm } from '../hook/useForm';

const GeneratorPassword = () => {
    const notify = () => toast.success("¡Password Copiado!");

    const initialForm = {
        range: 5,
        lowercase: false,
        uppercase: false,
        number: false,
        symbols: false,
        capitalize: false
    }

    const { handleSubmit, handleChange, handleChangeOptions, form, password, generatedPassword, disabled, errorMessage, handleClear } = useForm(initialForm);

    return (
        <main>
            <Form onSubmit={handleSubmit}>
                <div className="container__form--input">
                    <label htmlFor="character">
                        Número de caracteres {form.range}
                        <input type="range" id="character" name="range" min="5" max="10" value={form.range} onChange={handleChange} />
                    </label>
                </div>

                <div className="container__form--options">
                    <label className="switch">
                        Letras Minúsculas
                        <input type="checkbox" name="lowercase" onChange={handleChangeOptions} checked={form.lowercase ? true : false} />
                        <span className="slider"></span>
                    </label>

                    <label className="switch">
                        Letras Mayúsculas
                        <input type="checkbox" name="uppercase" onChange={handleChangeOptions} checked={form.uppercase ? true : false} />
                        <span className="slider"></span>
                    </label>

                    <label className="switch">
                        <span>Números</span>
                        <input type="checkbox" name="number" onChange={handleChangeOptions} checked={form.number ? true : false} />
                        <span className="slider"></span>
                    </label>

                    <label className="switch">
                        <span> Símbolos</span>
                        <input type="checkbox" name="symbols" onChange={handleChangeOptions} checked={form.symbols ? true : false} />
                        <span className="slider"></span>
                    </label>
                </div>


                <div className="container__form--capitalize">
                    <label className="switch">
                        <span>Primera letra en mayúscula</span>
                        <input type="checkbox" name="capitalize" onChange={handleChangeOptions} checked={form.capitalize ? true : false} disabled={disabled ? true : false} />
                        <span className="slider"  ></span>
                    </label>
                </div>

                <div className="container__form--button">
                    <button type="submit">Generar Contraseña</button>
                </div>
            </Form>

            <Section>
                {errorMessage && <p className="error__message">{errorMessage}</p>}
                {password &&
                    <div className="container__password">
                        <p>Contraseña: <span>{generatedPassword}</span></p>

                        <div className="container__buttons">
                            <CopyToClipboard text={generatedPassword}>
                                <button onClick={notify}>Copiar</button>
                            </CopyToClipboard>

                            <button onClick={handleClear}>Limpiar</button>

                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </div>
                    </div>
                }

            </Section>
        </main>
    )
}

export default GeneratorPassword;