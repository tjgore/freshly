import HeadTag from 'next/head'

const Head = (props) => (
    <HeadTag>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="en_US" property="og:locale"/>
        <meta content="website" property="og:type"/>
            
        <meta name="theme-color" content={props.themeColor}/>
        <meta content={props.email} property="og:email"/>
        <meta name="description" content={props.description}/>
        <meta content={props.title} property="og:site_name"/>
        <meta content={props.title} property="og:title"/>
        <meta content={props.image} property="og:image"/>
        <meta content={props.description} name="og:description"/>
        <meta content={props.permalink} property="og:url"/>
        <link rel="canonical" href={props.permalink}></link>
        <title>{props.title}</title>
    </HeadTag>
)

export default Head