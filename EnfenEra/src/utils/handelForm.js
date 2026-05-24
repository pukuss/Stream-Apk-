export function HandelForm(e) {
    const { name, value } = e.target;

    if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setDETA((prev) => ({
            ...prev, [parent]: { ...prev[parent], [child]: value }
        }))
    }

    else {
        setDETA((prev) => ({
            ...prev, [name]: value
        }))
    }
}