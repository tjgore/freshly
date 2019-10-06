import HeadTag from 'next/head'

const Head = (props) => (
    <HeadTag>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="en_US" property="og:locale"/>
        <meta content="website" property="og:type"/>
            
        <meta name="theme-color" content="#6b46c1"/>
        <meta content="hello@freshly-example.com" property="og:email"/>
        <meta content="Freshly" property="og:site_name"/>
        <meta name="description" content="A food recipe site focused on being healthy and feeling good!"/>
        
        <meta content={props.title} property="og:title"/>
        <meta content={props.image} property="og:image"/>
        <meta content={props.description} name="og:description"/>
        <meta content={props.permalink} property="og:url"/>
        <link rel="canonical" href={props.permalink}></link>
        <title>{props.title} | Freshly</title>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"/>
    </HeadTag>
)

export default Head