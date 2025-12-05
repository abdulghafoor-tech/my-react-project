import {TableRow} from "./TableRow"
export function TableBody(props){

    return(
         <tbody>
            {props.userData.map((user) => (
              <TableRow
              user={user}
              key={user.id}
              viewPosts={props.callViewPosts}
              viewUser={props.callViewUser}
              editUser={props.callEditUser}
              deleteUser={props.callDeleteUser}
              />
            ))}
          </tbody>
    )
}