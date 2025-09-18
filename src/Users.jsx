function Users({person,user}){
    return( <>
    <h1>Hello duniya</h1>
    <h1>{user.name}</h1>
    <h2>{person.team}</h2>
    <h2>{person.isRegular? "isregular": "isNotRegular"}</h2>
    </>
    );
}
export default Users;