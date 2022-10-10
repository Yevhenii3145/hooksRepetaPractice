import {useState,useEffect,useRef} from "react"
export default function Clock() {
    const [time,setTime] = useState(() => new Date());
    const intervalId = useRef(null)


    useEffect(() => {
        intervalId.current = setInterval(() => {
            console.log("Это интервал каждые 2000ms" + Date.now());
            setTime(new Date())
        },2000);
        // console.log(time);
        return () => {
            console.log("Это функция очистки перед следующим вызовом useEffect")
            stop()
        }
    }, [])

    const stop = () => {
        clearInterval(intervalId.current)
    }

    return (
        <div className={styles.container}>
            <button onClick={() => setTime(new Date())}>Обновить стейт time</button>
            <p className={styles.clockface}>
                Текущее время: {time.toLocaleTimeString()}
            </p>
            <button type="button" onClick={this.stop}>Остановить</button>
        </div>
    )
}