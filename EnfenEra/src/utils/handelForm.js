export function HandelForm(e, setdata) {
    const { name, value } = e.target;

    if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setDETA((prev) => ({
            ...prev, [parent]: { ...prev[parent], [child]: value }
        }))
    }

    else {
        setdata((prev) => ({
            ...prev, [name]: value
        }))
    }
}