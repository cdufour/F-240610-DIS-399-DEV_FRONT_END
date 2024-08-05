import Counter from "../components/Counter";
import { UserCard } from "../components/UserCard";

export default async function Page() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();


    return (
        <>
            <h1>Users</h1>
            <ul>
                { users.map(user => (<UserCard key={user.id} user={user} />)) }
            </ul>

            <Counter />
        </>
    )
}