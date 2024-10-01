import{PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return(
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='fe720919-ad35-444a-a8e4-7af61c2a6e0a'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: "100%"}}
        />
        </div>
    )
}
export default ChatsPage