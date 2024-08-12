import { useState } from "react"

const ToggleValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => {
        setValue(!value);
    };

    return [value, toggleValue]

}

export default ToggleValue