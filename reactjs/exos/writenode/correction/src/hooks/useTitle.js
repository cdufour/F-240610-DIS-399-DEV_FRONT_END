import { useEffect } from "react";

export const useTitle = (title, appName) => {
    useEffect(() => {
        document.title = `${title} | WriteNode`
    }, [title])
}