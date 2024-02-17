export function handleError(error: any | unknown): string {
    if (error instanceof Error) return error.message

    return `${error}`
}