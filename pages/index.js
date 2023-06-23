import config from '../config.json';
import styled from 'styled-components';
import {CSSReset} from '../src/components/CSSReset.js';
import Menu from '../src/components/Menu.js';
import { StyledTimeline } from '../src/components/Timeline.js';
import bg from "../public/banner.jpg";

function HomePage() {
    const estilohomepage = {
        //backgroundColor: "red"
    };

    //console.log(config.playlists);

    return (
        <>
            <CSSReset/>
            <div style={estilohomepage}>
                <Menu/>
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            
            </div>
        </>
    
    );
    
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
    /* .banner {
        height: 230px;
        background-image: url(${config.bg});
        /* background-color: blue; 
    } */
`;


 const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    background-position: center center;
    height: 230px;
`;

function Header() {
    return (
        <StyledHeader>

            {/* <div className="banner"></div> */}
            <StyledBanner bg={config.bg} />

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>

                </div>
                
            
            </section>
            
        </StyledHeader>
    )
}

function Timeline(props) {

    //console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}

                        </div>
                    </section>
                )
            })} 
        </StyledTimeline>
    )
}