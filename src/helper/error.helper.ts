const reportError:any = (err:any, message:any) => {
    if (err instanceof Error) message = err.message
    return message;
}

export default reportError;