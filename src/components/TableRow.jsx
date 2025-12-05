export function TableRow(props){
    const {user}= props ||{};
    return(
        <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <span>
                    <button
                      className="main-button"
                      onClick={() =>props.viewUser(user.id)}
                    >
                      View User
                    </button>
                    <button
                      className="main-button"
                      onClick={() => props.viewPosts(user.id)}
                    >
                      View Post
                    </button>
                    <button
                      className="main-button"
                      onClick={() => props.editUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="main-button"
                      onClick={() => props.deleteUser(user.id)}
                      style={{
                        backgroundColor: "blue",
                        opacity:
                          String(user.id) === String(props.activeUserId) ? 0.5 : 1,
                      }}
                      disabled={String(user.id) === String(props.activeUserId)}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
    )
}