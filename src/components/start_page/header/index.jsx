import FolderIcon from '../../../assets/Folder.svg'
import StyledHeader from './StyledHeader'
import StyledAvatar from './StyledAvatar'

export default function Header({name}) {
    const avatarSrc = ''
    const userName = name?name:"Порфирьев Михаил"
    return (
        <>
            <StyledHeader>
                <StyledAvatar>
                    {avatarSrc !== ''?
                        <img src={avatarSrc} alt={userName}/>:
                        <p>{userName?.split(' ').reduce((acc, curr) => acc[0]+curr[0], [''])}</p>
                    }
                </StyledAvatar>
                <div className='header_content'>
                <h3>{userName}</h3>
                    <ul className="socials">
                        <li>
                            <FolderIcon width="1rem" height="1rem"/>
                            <a href="https://t.me/_someone">Telegram</a>
                        </li>
                        <li>
                            <FolderIcon width="1rem" height="1rem"/>
                            <a href="https://github.com/viwnu">GitHub</a>
                        </li>
                        <li>
                            <FolderIcon width="1rem" height="1rem"/>
                            <a href="">Resume</a>
                        </li>
                    </ul>
                </div>
            </StyledHeader>
            <hr/>
        </>
    )
}