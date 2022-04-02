const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10';

const SUPABASE_URL = 'https://kdjfwswcqlsfuhtembua.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createParticipant(participant) {
    const response = await client
        .from('participants')
        .insert(participant);

    return response.body;
}

export async function deleteParticipant(id) {
    const response = await client
        .from('participants')
        .delete()
        .match({ id:id });

    return response.body;
}

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select('*, participants (*)');

    return response.body;

}



export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
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


export async function createWorkshop(workshop) {
    const response = await client
        .from('workshops')
        .insert(workshop);
        
    return response.body;

}

export async function getParticipant(id) {
    const response = await client
        .from('participants')
        .select('*')
        .match({ id: id })
        .single();

    return response.body;

}

export async function updateParticipant() {
    const response = await client
        .from('participants')
        .match({ id: id })
        .single();

    return response.body;
}
// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
