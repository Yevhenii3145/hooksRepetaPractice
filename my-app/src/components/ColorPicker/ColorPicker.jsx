import {useState} from "react";
export default function ColorPicker({options}) {
    const [activeOptionIdx,setActiveOptionIdx] = useState(0);

    const makeOptionClassName = index => {
        return index === activeOptionIdx ? styles.activOption : styles.option;
    }

    const {label} = options[activeOptionIdx];

     return (
        <div>
            <h2>Color Picker</h2>
            {/* <p>Выбран цвет: {label}</p> */}
            <div>
                {options.map(({label,color}, index) => (
                    <button
                    key={label}
                    aria-label={label}
                    className={makeOptionClassName(index)}
                    style={{backgroundColor: color}}
                    onClick={() => setActiveOptionIdx(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}