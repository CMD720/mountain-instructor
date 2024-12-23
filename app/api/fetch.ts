export const fetchInstructors= async () => {
    const response = await fetch('https://634ed67df34e1ed826979461.mockapi.io/instructor');
    return await response.json();
}