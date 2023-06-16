export default async function signIn(email: any, password: any) {
    const apiUrl = "http://localhost:5000/login";
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
    };

    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    return data;
}