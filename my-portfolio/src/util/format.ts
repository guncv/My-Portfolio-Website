const formatPhoneNumber = (input: string) => {
    if (input.startsWith('0') && input.length === 10) {
        if (input.startsWith('0') && input.length === 10) {
            const formattedPhoneNumber = `+66 ${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
            return formattedPhoneNumber;
        }
    }

    return input;
};

export { formatPhoneNumber };
