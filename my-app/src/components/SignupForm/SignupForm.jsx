import {useState, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export default function SignupForm() {
    const [email,setEmail] = useLocalStorage("email", "")
    const [password,setPassword] = useLocalStorage("password", "")


    const handleChange = event => {
        console.log(event.target.name);

        switch(event.target.name) {
            case "email":
                setEmail(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            default: 
            return;
        }
    };

    return (
        <form autoComplete = "off">
        <label>
        <span>Почта</span>
        <input
        type="email"
        name="email"
        onChange={handleChange}
        value={email} />
        </label>

        <label>
            <span>Пароль</span>
            <input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                />
        </label>
        <button type="submit">Зарегистрироваться</button>
        </form>
    );
}