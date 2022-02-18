const SUPABASE_URL = 'https://mjukwettrllpfumtwijm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdWt3ZXR0cmxscGZ1bXR3aWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1MzEwMzMsImV4cCI6MTk2MDEwNzAzM30.VlBzi13QTeywkUF1tXU8yRtqiGbDi25VyV5V__o3rk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./shopping');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function fetchItems() {
    const resp = await client.from('shopping-list').select().order('id');
    console.log(resp);
    return checkError(resp);
}

export async function completeItem(id) {
    const resp = await client
        .from('shopping-list')
        .update({ complete: true })
        .match({ user_id: client.auth.user().id, id: id });
    return checkError(resp);
}
