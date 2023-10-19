import avatar from '../../../assets/avatar.png';

const Intro = () => {
    return (
        <div className="intro-container">
            <img src={avatar} alt="avatar" className='avatar' />
            <div className="desc">
                <p className='title'>Hey, Nice to <span>MEET</span> you!</p>
                <p>I'm a third year university student <span>passionate</span> about everything in <span>Web Development</span>!</p>
                <p>I have learnt something classics like <span>Typescript</span>, <span>C#</span>...</p>
                <p>I hope to apply and solidify my knowledge through a precious opportunity of <span>Internship</span>!</p>
            </div>
        </div>
    )
}

export default Intro